import { Resend } from 'resend';

type ContactPayload = {
  name: string;
  email: string;
  topic?: string;
  message: string;
  company?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || 'Aurora Mind <onboarding@resend.dev>';

    if (!apiKey) {
      return Response.json(
        { ok: false, error: 'Не задан RESEND_API_KEY.' },
        { status: 500 }
      );
    }

    if (!toEmail) {
      return Response.json(
        { ok: false, error: 'Не задан CONTACT_TO_EMAIL.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = (await request.json()) as Partial<ContactPayload>;

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const topic = (body.topic || '').trim();
    const message = (body.message || '').trim();
    const company = (body.company || '').trim();

    if (company) {
      return Response.json({ ok: false, error: 'Spam detected.' }, { status: 400 });
    }

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: 'Заполните обязательные поля.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { ok: false, error: 'Некорректный email.' },
        { status: 400 }
      );
    }

    const subject = `Новая заявка с сайта Aurora Mind: ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>Новая заявка с сайта Aurora Mind</h2>
        <p><strong>Имя:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Тема обращения:</strong> ${escapeHtml(topic || '—')}</p>
        <p><strong>Сообщение:</strong></p>
        <div style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; white-space: pre-wrap;">
          ${escapeHtml(message)}
        </div>
      </div>
    `;

    const text = `
Новая заявка с сайта Aurora Mind

Имя: ${name}
Email: ${email}
Тема обращения: ${topic || '—'}

Сообщение:
${message}
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      html,
      text,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);

      return Response.json(
        { ok: false, error: 'Не удалось отправить письмо.' },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact route error:', error);

    return Response.json(
      { ok: false, error: 'Ошибка сервера при отправке формы.' },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}