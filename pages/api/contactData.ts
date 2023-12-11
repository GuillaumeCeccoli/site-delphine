import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

if (!SENDGRID_API_KEY) {
  throw new Error('Please define the SENDGRID_API_KEY environment variable');
}

sgMail.setApiKey(SENDGRID_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, email, phone, message } = req.body;

    const msg = {
      to: 'guiceccoli@gmail.com',
      from: 'gceccoli@proton.me',
      subject: 'Un patient viens de vous écrire',
      text: `Name: ${username}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}