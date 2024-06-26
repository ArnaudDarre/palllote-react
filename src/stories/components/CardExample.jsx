import React from 'react'
import PropTypes from 'prop-types'

import { Card } from '../../lib/components/Card'
import { CardHeader } from '../../lib/components/CardHeader'
import { CardMedia } from '../../lib/components/CardMedia'

export const CardExample = ({
  title,
  width,
  ...props
}) => {

  return (
    <Card {...props}>
      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height="66.666%" width={width} />
      <CardHeader
        title={title}
        subtitle="Edible mushrooms"
      />
    </Card>
  )
}

CardExample.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number
}
