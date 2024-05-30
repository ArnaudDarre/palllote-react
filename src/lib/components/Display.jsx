import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const viewportSizes = {
  'mobile-sm': 375,
  'mobile': 576,
  'tablet': 768,
  'laptop': 1024,
  'desktop': 1280
}

export const Display = ({ show, hide, children }) => {
  const [isDisplayed, setDisplayed] = useState(false)

  const updateMedia = () => {
    const viewportValue = viewportSizes[show || hide]
    if (show) {
      setDisplayed(window.innerWidth <= viewportValue)
    } else if (hide) {
      setDisplayed(window.innerWidth > viewportValue)
    }
  }

  useEffect(() => {
    updateMedia()
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [show, hide])

  return <>{isDisplayed ? children : null}</>
}

Display.propTypes = {
  show: PropTypes.oneOf([
    'mobile-sm',
    'mobile',
    'tablet',
    'laptop',
    'desktop'
  ]),
  hide: PropTypes.oneOf([
    'mobile-sm',
    'mobile',
    'tablet',
    'laptop',
    'desktop'
  ]),
  children: PropTypes.any
}
