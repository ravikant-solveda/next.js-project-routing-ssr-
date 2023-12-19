import { useRouter } from 'next/router'
import React from 'react'

const secondSubcategory = () => {
    const router = useRouter();
    
    console.log('cfile ...subcategory',router.query);
  return (
    <div>[...subcategory]</div>
  )
}

export default secondSubcategory