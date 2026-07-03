import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Production: forward to CRM (e.g. HubSpot/Pipedrive), email Sam, push to Slack, etc.
    console.log("[NYN Lead]", JSON.stringify(data));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
