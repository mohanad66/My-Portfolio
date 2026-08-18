/* eslint-disable no-undef */
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, projectType, projectLink, message, timeline } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || 'mohanadmahmoud33245@gmail.com';

    if (!apiKey) {
        return res.status(500).json({ error: 'Email service not configured' });
    }

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #10b981;">New Project Inquiry</h2>
            <hr style="border: 1px solid #e5e7eb;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Project Link:</strong> ${projectLink || 'None provided'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
            <hr style="border: 1px solid #e5e7eb;" />
            <p><strong>Message:</strong></p>
            <p style="background: #f9fafb; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
            <hr style="border: 1px solid #e5e7eb;" />
            <p style="color: #6b7280; font-size: 12px;">Sent from your portfolio contact form</p>
        </div>
    `;

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: [toEmail],
                subject: `New Project Inquiry from ${name}`,
                html: htmlContent,
                reply_to: email,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Resend error:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }

        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
