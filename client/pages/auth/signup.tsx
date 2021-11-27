import useGlobalAlertMessage from '@utils/hooks/useGlobalAlertMessage'
import useSetRoute from '@utils/hooks/useSetRoute'
import executeAfter from '@utils/executeAfter'
import { useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'

export default function SignUp() {
    const { data: session } = useSession()
    const { routeTo } = useSetRoute()
    const { setMessage } = useGlobalAlertMessage()

    useEffect(() => {
        if (!session) return
        async function signUp() {
            try {
                const res = await fetch('/api/auth/signup')
                if (!res.ok) throw (await res.json().then(data => data.message))
                else executeAfter(routeTo('/primetime'), 3)
            }
            catch (error: string | any) {
                setMessage(error)
            }
        }
        signUp()
    }, [session])

    return (
        <div className='flex-grow flex flex-col justify-center items-center'>
            <button onClick={() => signIn('google')}> Sign Up </button>
            <br />
            <button onClick={() => routeTo('/auth/signin')}> Sign in with existing Account</button>
        </div>
    )
}