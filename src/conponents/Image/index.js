import React, { forwardRef } from 'react';
import img from '~/assets/image';

const Image = forwardRef(({ className, src, ...props }, ref) => {
    
  return (
    <img ref={ref} className = {className} src = {src} {...props} />
  )
})

export default Image