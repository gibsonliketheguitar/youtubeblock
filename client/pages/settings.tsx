import useSetRoute from "@utils/hooks/useSetRoute"
import { signOut, useSession } from "next-auth/react"

function Account() {
    const { data: session } = useSession()
    const { routeTo } = useSetRoute()

    const handleSignOut = () => signOut({ callbackUrl: '/', redirect: true, })

    if (!session) {
        routeTo('/')
        return <></>
    }
    return (
        <div className='flex-grow flex flex-col items-center justify-center'>
            <button onClick={handleSignOut}> SignOut</button>
        </div>
    )
}

export default Account