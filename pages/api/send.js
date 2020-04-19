const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey('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')

  const { email, message, name, telefon } = req.body

  const content = {
    to: `ktl80@outlook.com`,
    cc: email,
    from: 'kjeoever@msn.com',
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