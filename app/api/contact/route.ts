import { NextResponse } from "next/server";

// In-memory store (replace with DB in production)
const leads: unknown[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic validation
    const { name, email, company, size } = body;
    if (!name || !email || !company || !size) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Store the lead
    const lead = {
      id: `lead_${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      status: "new",
    };
    leads.push(lead);

    // In production: send to CRM, email, DB, etc.
    console.log("New enterprise lead:", lead);

    return NextResponse.json(
      {
        success: true,
        message: "Request received. Our team will contact you within 24 hours.",
        id: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Admin endpoint to view leads (protect with auth in production)
  return NextResponse.json({ count: leads.length, leads });
}
