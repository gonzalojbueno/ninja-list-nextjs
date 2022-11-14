import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav>
        <div className="logo">
          <Image src='/logo.png' width={128} height={77} alt='logotipo'/>
        </div>
        <Link href="/"passHref legacyBehavior><a>Home</a></Link>
        <Link href="/about"passHref legacyBehavior><a>About</a></Link>
        <Link href="/ninjas"passHref legacyBehavior><a>Ninja Listing</a></Link>
    </nav>
  )
}

export default Navbar
