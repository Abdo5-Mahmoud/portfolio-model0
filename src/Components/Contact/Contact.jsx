import { useEffect, useRef, useState } from 'react'
import Letter from '../AnimatedLetters/Letter.jsx'
import './Contact.scss'

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_btijufb', 'template_faml8wb', refForm.current, {
        publicKey: 'OYlj4IT4z2KiOc8FK',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          window.location.reload(false)
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Letter
              strArray={'Contact me'.split('')}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However if you have other request or question, don't
            hesitate to contact me useing berlow form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="subject">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    required
                    placeholder="Message"
                    id=""
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value={'SEND'} />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Abdullah Mah,
          <br />
          Cairo,
          <br />
          Giza Elwraq, 16 s <br />
          <span>abdofwzy9@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[30.0444196, 31.2357116]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            <Marker position={[30.0444196, 31.2357116]}>
              {/* <Popup>Hello: I live Here</Popup> */}
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
