import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/dist/client/router"

function Account() {
    const { data: session } = useSession()
    const router = useRouter()
    const options = {
        callbackUrl: '/',
        redirect: true,
    }
    if (!session) {
        router.push('/')
        return <></>
    }
    return (
        <div className='flex-grow flex flex-col items-center justify-center'>
            <button onClick={() => signOut(options)}> SignOut</button>
        </div>
    )
}

export default Account