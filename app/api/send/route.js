// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: ['allison@allisonrandel.com'],
//       subject: 'Hello world',
//       react: <>Email me!</>,
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
