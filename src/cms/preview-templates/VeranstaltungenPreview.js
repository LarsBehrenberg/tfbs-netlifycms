import React from 'react'
import PropTypes from 'prop-types'
import '../preview-styles/veranstaltungen-preview.css'

const VeranstaltungenPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const image = getAsset(data.thumbnail)
  return (
    <>
      <a
        className="container"
        href={entry.getIn(['data', 'link'])}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="image-wrapper">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image
              })`,
            }}
          />
        </div>

        <div className="text-content">
          <h3 className="title">{entry.getIn(['data', 'title'])}</h3>
          <div className="text">
            {`${entry.getIn(['data', 'description']).substring(0, 170)}...`}
          </div>
          <span className="read-more">Read more</span>
        </div>
      </a>
      <p className="hint">
        Klick auf die Karte, um den eigegebenen Link zu testen. Der Link wird in
        einem neuen Tab geöffnet.
      </p>
    </>
  )
}

VeranstaltungenPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VeranstaltungenPreview
