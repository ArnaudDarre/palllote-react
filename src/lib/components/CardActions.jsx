import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const CardActions = ({ direction, className, children, ...props }) => {

  return (
    <div
      className={classnames([
        'card__actions',
        {
          [`card__actions--${direction}`]: direction
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

CardActions.propTypes = {
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ]),
  className: PropTypes.node,
  children: PropTypes.any
}
