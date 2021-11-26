import { NextPageContext } from 'next'
import { useSession, signIn, getSession } from 'next-auth/react'
import { useEffect } from 'react'
//helper
import useGlobalAlertMessage from '@utils/hooks/useGlobalAlertMessage'
import useSetRoute from '@utils/hooks/useSetRoute'

export default function SignIn() {
    const { data: session } = useSession()
    const { setMessage } = useGlobalAlertMessage()
    const { routeTo } = useSetRoute()

    useEffect(() => {
        if (!session) return
        async function signIn() {
            try {
                const res = await fetch('/api/auth/signin')
                console.log('ok client', res)
                if (!res.ok) throw (await res.json().then(data => data.message))
                else {
                    routeTo('/settings')
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