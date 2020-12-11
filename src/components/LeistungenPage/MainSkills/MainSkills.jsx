import React from 'react'
import { ImageGridText } from 'components'

const MainSkills = ({ skills }) => {
  return skills.map((skill, index) => {
    const {
      first_grid_image,
      second_grid_image,
      third_grid_image,
      title,
      text,
      subtitle,
      button_text,
      button_link,
    } = skill
    return (
      <ImageGridText
        key={title.text}
        four_box_grid={false}
        title_class="primary"
        first_image={first_grid_image}
        second_image={second_grid_image}
        third_image={third_grid_image}
        title={title.text}
        subtitle={subtitle.text}
        html_text={text.html}
        slideIn={index % 2 === 0 ? 'left' : 'right'}
        button_text={button_text.text}
        button_link={button_link.text}
        reversedOrder={index % 2 === 0 ? false : true}
      />
    )
  })
}

export default MainSkills
