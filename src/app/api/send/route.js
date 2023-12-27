import { EmailTemplate } from '../../../components/EmailTemplate'
import {NextResponse} from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("api body", body)
    const {name, email, organization, services, message} = body;

    if (!name || !email || !message) {
      return NextResponse,json('Name, email, and message are required fields.');
    }

    if (name.trim().length < 3 || name.trim().length > 50 || /\d/.test(name)) {
      return NextResponse.json({ error: 'Invalid name. It should be between 3 and 50 characters and contain no numbers.' });
    }

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' });
    }

    if (organization.trim().length > 150 || services.trim().length > 150 || message.trim().length > 2000) {
      return NextResponse.json({ error: 'Organization, services, or message length exceeds the limit.' });
    }

    const data = await resend.emails.send({
        from: "Elvis <elvis@elvischiqui.com>",
        to: "elvisrchiqui@gmail.com",
        subject: "🎉New submission to your contact form!",
        react: EmailTemplate({ 
            name: name, 
            email: email,
            organization: organization,
            services: services,
            message: message
        }),
    });
    return NextResponse.redirect('https://elvischiqui.com/contact/success');
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ error })
  }
}
