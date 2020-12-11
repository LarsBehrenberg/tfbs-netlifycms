import React from 'react'
import { MapContainer } from './components'

const mapStyles = {
  border: 0,
  marginBottom: 0,
}

const Map = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.209389805925!2d7.782001415783023!3d51.9848370797165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9bda3071e2ec9%3A0x44e4d9b3d7653edf!2sBeratungsPraxis%20t.f.b.s.%20-%20Telgte!5e0!3m2!1sen!2sjp!4v1606268674005!5m2!1sen!2sjp"
        width="100%"
        height="100%"
        frameBorder="0"
        style={mapStyles}
        allowFullScreen=""
        aria-hidden="false"
        title="Google Map"
      ></iframe>
    </MapContainer>
  )
}

export default Map
