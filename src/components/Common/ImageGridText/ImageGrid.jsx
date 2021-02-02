import React from 'react'
import { GridContainer, Grid } from './components'
import Img from 'gatsby-image'

const ImageGrid = ({ images, grid_title, grid_subtitle }) => (
  <GridContainer>
    <Grid className={grid_title ? 'four_box_grid' : 'three_box_grid'}>
      {grid_title && grid_subtitle && (
        <div className="text-container">
          <h2>{grid_subtitle}</h2>
          <h4>{grid_title}</h4>
        </div>
      )}
      <div className="image-1">
        <Img
          fluid={images[0].localFile.childImageSharp.fluid}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          imgStyle={{ objectFit: 'cover' }}
          objectFit="cover"
        />
      </div>
      <div className="image-2">
        <Img
          fluid={images[1].localFile.childImageSharp.fluid}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          imgStyle={{ objectFit: 'cover' }}
          objectFit="cover"
        />
      </div>
      <div className="image-3">
        <Img
          fluid={images[2].localFile.childImageSharp.fluid}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          imgStyle={{ objectFit: 'cover' }}
          objectFit="cover"
        />
      </div>
    </Grid>
  </GridContainer>
)

export default ImageGrid
