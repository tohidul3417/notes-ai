import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
        <Link href="/">
        <Image src="/logo.png" height={60} width={60} alt="Logo" className="rounded-full" priority/>
        </Link>
    </header>
  )
}

export default Header
