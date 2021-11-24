import { useRouter } from 'next/dist/client/router'
import { VscAccount } from 'react-icons/vsc'
import Icon from '@components/common/Icon'
import { useSession } from 'next-auth/react'

function ButtonSettings() {
    const router = useRouter()
    const { data: session } = useSession()
    const handleGoSettings = () => router.push('/settings')

    if (!session) return <></>
    return (
        <div className='flex flex-col justify-centers items-center'>
            <Icon icon={<VscAccount />} handleOnClick={handleGoSettings} />
        </div>
    )

}

export default ButtonSettings