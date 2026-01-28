import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, companySize, message } = body;

    // Validate required fields
    if (!name || !email || !company || !companySize) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email notification
    await resend.emails.send({
      from: 'PromptAI Website <noreply@promptaiconsulting.com.au>',
      to: 'luca@promptaiconsulting.com.au',
      replyTo: email,
      subject: `New enquiry from ${name} at ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #f97316;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Company Size:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${companySize}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0;">${message || '<em>No message provided</em>'}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; color: #666; font-size: 12px;">
            This enquiry was submitted via promptaiconsulting.com.au
          </p>
        </div>
      `,
    });

    console.log('Contact form submission sent:', {
      name,
      email,
      company,
      companySize,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
