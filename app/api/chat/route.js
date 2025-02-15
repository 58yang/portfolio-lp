import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ASSISTANT_ID = "asst_CEQf7nfse7Nwa07htQk8TTZn";

export async function POST(request) {
  let thread;
  try {
    // リクエストボディの検証
    const body = await request.json();
    if (
      !body.messages ||
      !Array.isArray(body.messages) ||
      body.messages.length === 0
    ) {
      return NextResponse.json(
        { error: "Invalid request format: messages array is required" },
        { status: 400 }
      );
    }

    const userMessage = body.messages[body.messages.length - 1].content;
    if (!userMessage) {
      return NextResponse.json(
        { error: "Invalid request format: message content is required" },
        { status: 400 }
      );
    }

    // スレッドの作成
    console.log("Creating thread...");
    thread = await openai.beta.threads.create();
    console.log("Thread created:", thread.id);

    // メッセージの追加
    console.log("Adding message to thread...");
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: userMessage,
    });

    // アシスタントの実行
    console.log("Running assistant...");
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: ASSISTANT_ID,
    });
    console.log("Run created:", run.id);

    // 実行状態の監視
    let runStatus;
    const startTime = Date.now();
    const TIMEOUT = 30000;

    do {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      console.log("Run status:", runStatus.status);

      if (Date.now() - startTime > TIMEOUT) {
        throw new Error("Request timeout: Assistant response took too long");
      }

      if (runStatus.status === "failed") {
        console.error("Run failed with details:", runStatus);
        throw new Error(
          `Assistant run failed: ${
            runStatus.last_error?.message || "Unknown error"
          }`
        );
      }

      if (runStatus.status === "cancelled") {
        throw new Error("Assistant run was cancelled");
      }

      if (runStatus.status === "expired") {
        throw new Error("Assistant run expired");
      }
    } while (runStatus.status !== "completed");

    // メッセージの取得
    console.log("Getting messages...");
    const threadMessages = await openai.beta.threads.messages.list(thread.id);

    if (!threadMessages.data || threadMessages.data.length === 0) {
      throw new Error("No response received from assistant");
    }

    const assistantMessage = threadMessages.data[0];
    if (!assistantMessage.content?.[0]?.text?.value) {
      throw new Error("Invalid assistant response format");
    }

    return NextResponse.json({
      content: assistantMessage.content[0].text.value,
    });
  } catch (error) {
    console.error("OpenAI API Error:", {
      name: error.name,
      message: error.message,
      status: error.status,
      code: error.code,
      type: error.type,
      details: error.response?.data,
    });

    // OpenAIのAPIエラーの場合
    if (error.response?.status) {
      return NextResponse.json(
        {
          error: "OpenAI API Error",
          message: error.message,
          status: error.response.status,
          type: error.type,
        },
        { status: error.response.status }
      );
    }

    // その他のエラー
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: error.message,
        type: error.name,
      },
      { status: 500 }
    );
  } finally {
    // スレッドのクリーンアップ
    if (thread?.id) {
      try {
        await openai.beta.threads.del(thread.id);
        console.log("Thread cleaned up:", thread.id);
      } catch (error) {
        console.error("Error cleaning up thread:", error);
      }
    }
  }
}
