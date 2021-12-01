import { NextPageContext } from 'next'
import { useSession, signIn, getSession } from 'next-auth/react'
import { useEffect } from 'react'
//helper
import useGlobalAlertMessage from '@utils/hooks/useGlobalAlertMessage'
import executeAfter from '@utils/executeAfter'
import useAccessToken from '@utils/hooks/useAccessToken'
import useSetRoute from '@utils/hooks/useSetRoute'

export default function SignIn() {
    const { data: session } = useSession()
    const { routeTo } = useSetRoute()
    const { setAccessToken } = useAccessToken()
    const { setMessage } = useGlobalAlertMessage()

    useEffect(() => {
        if (!session) return
        async function signIn() {
            try {
                const res = await fetch('/api/auth/signin')
                const result = await res.json()
                if (res.ok) {
                    setAccessToken(result.accessToken)
                    executeAfter(routeTo('/primetime'), 3)
                }
                else {
                    throw result.message
                }
            }
            catch (error: string | any) {
                setMessage(error)
            }
        }
        signIn()
    }, [session])

    return (
        <div className='flex-grow flex flex-col justify-center items-center'>
            <button onClick={() => signIn('google')}> Sign in </button>
            <br />
            <button onClick={() => routeTo('/auth/signup')}> Create a new account</button>
        </div>
    )
}

SignIn.getInitalProps = async (ctx: NextPageContext) => {
    const { req, res } = ctx
    const session = await getSession({ req })
    console.log('what is session', session)

    if (res && session) {
        res.writeHead(302, { Location: '/' });
        res.end()
        return
    }

    return {
        session: undefined
    }
}