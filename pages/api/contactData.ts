import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const MAILTO = process.env.MAILTO;
const MAILFROM = process.env.MAILFROM;

if (!SENDGRID_API_KEY || !MAILTO || !MAILFROM) {
  throw new Error("Variables d'environnement manquantes");
}

sgMail.setApiKey(SENDGRID_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, email, phone, message } = req.body;

    const msg = {
      to: MAILTO as string,
      from: MAILFROM as string,
      subject: 'Un patient vient de vous écrire',
      text: `Name: ${username}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Mail envoyé !" });
    } catch (error) {
      res.status(500).json({ error: "Le mail n'a pas été envoyé" });
    }
  } else {
    res.status(405).json({ error: "Methode incorrecte" });
  }
}