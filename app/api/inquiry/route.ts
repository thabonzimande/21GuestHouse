import { NextResponse } from "next/server";

interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  inquiryType: "booking" | "event";
  message: string;
}

function validateInquiry(payload: InquiryPayload): void {
  if (!payload.name || !payload.email || !payload.phone || !payload.inquiryType || !payload.message) {
    throw new TypeError("All inquiry fields are required.");
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  const payload = (await request.json()) as InquiryPayload;

  try {
    validateInquiry(payload);
  } catch (error) {
    if (error instanceof TypeError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  return NextResponse.json({ ok: true, note: "Connect this route to your email provider (SMTP/Formspree/Resend)." });
}
