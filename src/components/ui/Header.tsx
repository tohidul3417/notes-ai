import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { shadow } from '@/styles/utils'
import { Button } from './button'
import { DarkModeToggle } from './DarkModeToggler'
import LogoutButton from './LogoutButton'

const Header = () => {
    const user = null;
  return (
    <header className="bg:popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8" style={{
        boxShadow: shadow
    }}>
        <Link href="/" className="flex items-end gap-2">
        <Image src="/logo.png" height={60} width={60} alt="Logo" className="rounded-full" priority/>
        <h1 className='flex flex-col pb-1 text-2xl font-semibold leading-6'>Note<span>Taker</span></h1>
        </Link>
        <div>
            {user ? (
                <LogoutButton/>
            ) : (
                <>
                <Button asChild>
                    <Link href="/sign-up" className="hidden sm:block">Sign Up</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/login">Login</Link>
                </Button>
                </>
            )}
            <DarkModeToggle />
        </div>
    </header>
  )
}

export default Header
