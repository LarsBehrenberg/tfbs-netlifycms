import React from 'react'
import PropTypes from 'prop-types'
import '../preview-styles/neuigkeiten-preview.css'

const NeuigkeitenPreview = ({ entry, widgetFor }) => {
  return (
    <div className="container">
      <div className="header">
        <div className="title-wrapper">
          <h1>{entry.getIn(['data', 'title'])}</h1>
        </div>
      </div>
      <div className="content">{widgetFor('body')}</div>
    </div>
  )
}

NeuigkeitenPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NeuigkeitenPreview
