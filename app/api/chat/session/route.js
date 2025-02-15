import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST() {
  try {
    // 新しいセッションIDを生成
    const sessionId = uuidv4();

    return NextResponse.json({ sessionId });
  } catch (error) {
    console.error("Session creation error:", error);
    return NextResponse.json(
      { error: "Failed to create session" },
      { status: 500 }
    );
  }
}
