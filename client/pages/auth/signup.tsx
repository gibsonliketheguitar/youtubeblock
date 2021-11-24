import { useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'

function SignUp() {
    const { data: session } = useSession()

    useEffect(() => {
        async function signUp() {
            const res = await fetch('/api/auth/signup')
            const result = await res.json()
        }
        signUp()
    }, [session])

    return (
        <div className='flex-grow flex flex-col justify-center items-center'>
            <button onClick={() => signIn('google')}> Sign Up </button>
        </div>
    )
}

export default SignUp