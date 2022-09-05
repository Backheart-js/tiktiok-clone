import React, { useState, forwardRef } from 'react';
import img from '~/assets/image';

const Image = forwardRef(({ className, src, fallback: customFallback = img.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  }


  return (
    <img ref={ref} className = {className} src = {fallback || src} {...props} onError={handleError} />
  )
})

export default Image