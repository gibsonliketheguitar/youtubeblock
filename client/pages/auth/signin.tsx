import { useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'

function SignIn() {
    const { data: session } = useSession()

    useEffect(() => {
        async function signIn() {
            const res = await fetch('/api/auth/signin')
            const result = await res.json()
            console.log(result)
        }
        signIn()
    }, [session])

    return (
        <div className='flex-grow flex flex-col justify-center items-center'>
            <button onClick={() => signIn('google')}> Sign in </button>
        </div>
    )
}

export default SignIn