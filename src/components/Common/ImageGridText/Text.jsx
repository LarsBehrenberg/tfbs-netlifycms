import React from 'react'
import { Content } from './components'
import { Button } from 'components'

const Text = ({ title, subtitle, title_class, html_text, button }) => (
  <Content>
    <div className="content">
      {subtitle && <h4 className="subtitle">{subtitle}</h4>}
      <h2 className={`title ${title_class}`}>{title}</h2>
      <div
        className="normal-text grey"
        dangerouslySetInnerHTML={{ __html: html_text }}
      />
    </div>{' '}
    {button && (
      <Button weblink={button.web_link} to={button.link}>
        {button.text}
      </Button>
    )}
  </Content>
)

export default Text
