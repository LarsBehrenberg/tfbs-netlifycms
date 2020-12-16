import React from 'react'
import PropTypes from 'prop-types'
import '../preview-styles/veranstaltungen-preview.css'

const VeranstaltungenPreview = ({ entry, getAsset, widgetsFor }) => {
  if (Object.keys(entry.getIn(['data']).toJS()).length > 0) {
    return (
      <>
        <p className="hint">
          Klick auf die Karte, um den eigegebenen Link zu testen. Der Link wird
          in einem neuen Tab geöffnet.
        </p>
        <div style={{ margin: '0 auto' }}>
          {widgetsFor('veranstaltungen-liste').map((node, index) => {
            const data = node.getIn(['data']).toJS()
            const image = getAsset(data.thumbnail)
            return (
              <>
                <div className="vertical-line" />
                <a
                  className="container"
                  href={node.getIn(['data', 'link'])}
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
                    <h3 className="title">
                      {node ? node.getIn(['data', 'title']) : ''}
                    </h3>
                    {node ? (
                      <div className="text">
                        {`${node
                          .getIn(['data', 'description'])
                          .substring(0, 170)}...`}
                      </div>
                    ) : (
                      <span></span>
                    )}

                    <span className="read-more">Read more</span>
                  </div>
                </a>
              </>
            )
          })}
        </div>
        {/* <a
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
        </p> */}
      </>
    )
  }
  return <h2>Du hast momentan keine Veranstaltung eingetragen.</h2>
}

VeranstaltungenPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VeranstaltungenPreview
