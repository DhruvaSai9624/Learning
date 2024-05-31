import Link from 'next/link'
import React from 'react'

const users = () => {
  return (
    <>
        <div>
            <h1>Users</h1>
        </div>
        <Link href="/users/new">New</Link>
        <br />
        <Link href='/'>Home</Link>
    </>
  )
}

export default users
