const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, message, name, telefon } = req.body

  const content = {
    to: `kjeoever@msn.com`,
    cc: email,
    from: 'ktldesign80@gmail.com',
    subject: `Ny melding fra kontaktskjema - ${email}`,
    html: `<p>Melding: ${message} - Avsender: ${name} - Telefon: ${telefon}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Meldingen er sendt.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Det oppsto en feil, meldingen ble ikke sendt.')
  }
}