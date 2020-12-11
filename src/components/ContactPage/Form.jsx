import React from 'react'
import { navigate, Link } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'
import { InputWrapper, ConsentCheckBox, SubmitButton } from './components'

const RECAPTCHA_KEY = '6LdGSewZAAAAAKRRdDP1YVCIXmzOeDX5Tp58vmOi'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Form = () => {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()
  const [buttonDisabled, setButtonDisabled] = React.useState(true)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  React.useEffect(() => setButtonDisabled(true), [])

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <form
      name="contact-us"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      action="/danke"
      onSubmit={handleSubmit}
    >
      <noscript>
        <p>This form won’t work with Javascript disabled</p>
      </noscript>
      <InputWrapper>
        <input
          type="text"
          id="text-input"
          name="name"
          onChange={handleChange}
          required
        />
        <label htmlFor="text-input">Name / Alias</label>
      </InputWrapper>
      <InputWrapper>
        <input
          id="email-input"
          type="email"
          name="email"
          placeholder=""
          onChange={handleChange}
          required
        />
        <label htmlFor="email-input">Email</label>
      </InputWrapper>
      <InputWrapper>
        <textarea
          id="textarea"
          type="text"
          name="message"
          onChange={handleChange}
          required
        />
        <label htmlFor="textarea">Nachricht</label>
      </InputWrapper>
      <ConsentCheckBox>
        <input
          type="checkbox"
          name="datenschutzerklrung"
          value="1"
          required
          aria-invalid="false"
        ></input>
        <label>
          <b>Hiermit bestätige ich die Datenschutzhinweise:</b> Mit der Eingabe
          und Absendung Ihrer Daten erklären Sie sich einverstanden, dass wir
          Ihre Angaben zum Zwecke der Beantwortung Ihrer Anfrage und etwaiger
          Rückfragen entgegennehmen, zwischenspeichern und auswerten. Sie können
          dem jederzeit widersprechen (Widerrufsrecht). Siehe auch unsere{' '}
          <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>.
        </label>
      </ConsentCheckBox>
      {/* Recaptcha */}
      <Recaptcha
        ref={recaptchaRef}
        sitekey={RECAPTCHA_KEY}
        size="normal"
        id="recaptcha-google"
        hl="de"
        onChange={() => setButtonDisabled(false)}
      />
      <SubmitButton type="submit" disabled={buttonDisabled}>
        <div>
          <svg
            width="8"
            height="12"
            viewBox="0 0 13 19"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 9.5L0 19L0 0L13 9.5Z"
              fill="white"
            />
          </svg>
        </div>
        <span>Senden</span>
      </SubmitButton>
    </form>
  )
}

export default Form
