import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
    const router = useRouter()
    console.log('cfile index',router.query);
  return (
    <div>Index in dynamic routing path.</div>
  )
}

export default index