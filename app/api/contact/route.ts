import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validacija
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Sva polja su obavezna' },
        { status: 400 }
      );
    }

    // OPCIJA 1: RESEND (Preporučeno - Besplatno 100 emailova/dan)
    // Uncomment when you add Resend API key
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Fantom Website <onboarding@resend.dev>', // Promeni kad dodaš domain
      to: 'fantomsystems@gmail.com',
      subject: `Nova poruka od ${name}`,
      html: `
        <h2>Nova poruka sa sajta Fantom</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    // OPCIJA 2: NODEMAILER (Gmail SMTP)
    const nodemailer = require('nodemailer');
    
    // Ukloni razmake iz app password-a
    const appPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: appPassword,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'fantomsystems@gmail.com',
      subject: `🔔 Nova poruka od ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Fantom</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Nova poruka sa sajta</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Detalji:</h2>
            <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 4px solid #667eea;">
              <p style="margin: 5px 0;"><strong>👤 Ime:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
              <p style="margin: 5px 0;"><strong>📱 Telefon:</strong> <a href="tel:${phone}" style="color: #667eea;">${phone}</a></p>
            </div>
            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Poruka:</h3>
              <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #999; font-size: 12px; text-align: center;">
              Poslato sa Fantom sajta • ${new Date().toLocaleString('sr-RS')}
            </p>
          </div>
        </div>
      `,
    });

    // Loguj i u konzolu za debug
    console.log('✅ Nova poruka poslata:', { name, email, phone, message });

    return NextResponse.json(
      { message: 'Poruka uspešno poslata!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Greška:', error);
    return NextResponse.json(
      { error: 'Greška pri slanju poruke' },
      { status: 500 }
    );
  }
}

