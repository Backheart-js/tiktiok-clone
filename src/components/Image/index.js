import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types'

import img from '~/assets/image';

const Image = forwardRef(({ className, src, alt, fallback: customFallback = img.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  }


  return (
    <img ref={ref} alt={alt} className = {className} src = {fallback || src} {...props} onError={handleError} />
  )
})

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
}

export default Image