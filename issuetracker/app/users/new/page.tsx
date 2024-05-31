import Link from 'next/link'
import React from 'react'

const NewPage = () => {
    return (
        <>
            <div>
                <h1>New Page</h1>
            </div>
            <Link href="/users">Users</Link>
            <br />
            <Link href='/'>Home</Link>
        </>
    )
}

export default NewPage
