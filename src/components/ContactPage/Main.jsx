import React from 'react'
import { Link } from 'gatsby'

import {
  FaFacebookF,
  FaTwitter,
  FaXing,
  FaEnvelope,
  FaLinkedinIn,
} from 'react-icons/fa'

import { GridContainer, BusinessInformation, FormContainer } from './components'
import Form from './Form'

const dankeStyling = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'center',
  textAlign: 'center',
  height: '100%',
}

const ContactForm = ({ danke }) => {
  return (
    <GridContainer>
      <FormContainer>
        <h2 className="title form">Erreichen Sie Uns Hier</h2>
        <h4 className="subtitle">
          Ob Informationen, Supervisionsanmeldungen, oder etwas ganz anderes,
          Sie erreichen uns jederzeit!
        </h4>
        {!danke ? (
          <Form />
        ) : (
          <div style={dankeStyling}>
            <h3 className="subtitle">
              Vielen Dank! <br />
              Ihre Nachricht ist erfolgreich versendet worden.
            </h3>
            <p>
              Zurück zur{' '}
              <Link to="/" style={{ background: 'none', textShadow: 'none' }}>
                Homepage
              </Link>
              .
            </p>
          </div>
        )}
      </FormContainer>
      <BusinessInformation>
        <h2 className="title info">Kontakt</h2>
        <div className="information">
          <div>
            <p>
              t.f.b.s. - Telgte
              <br />
              Münsterstraße 16
              <br />
              48291 Telgte
              <br />
              NRW, Deutschland
            </p>
          </div>
          <div>
            <p>
              Fon: 02504 / 739596
              <br />
              Fax: 02504 / 739597
              <br />
              Email: info@tfbs.de
              <br />
              Website: https://www.tfbs.de
            </p>
          </div>
          <div className="socials">
            <p>Finden sie uns auf</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/coachingTelgte/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size="1.3em" color="#fff" />
              </a>

              <a
                href="https://twitter.com/coachingtelgte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size="1.3em" color="#fff" />
              </a>

              <a
                href="https://de.linkedin.com/in/michael-fa%C3%9Fnacht-57b782132"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size="1.3em" color="#fff" />
              </a>

              <a
                href="https://www.xing.com/companies/beratungspraxistraining-fortbildung-beratung-supervision"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXing size="1.3em" color="#fff" />
              </a>

              <a
                href="mailto:info@tfbs.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size="1.3em" color="#fff" />
              </a>
            </div>
          </div>
          <div className="online-beratung">
            <p>Weiter zur OnlineBeratung</p>
            <a
              href="https://app.flexperto.com/expert/3542/schedule"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#8594;
            </a>
          </div>
        </div>
      </BusinessInformation>
    </GridContainer>
  )
}

export default ContactForm
