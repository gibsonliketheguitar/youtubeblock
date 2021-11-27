import { AiFillHome } from 'react-icons/ai'
import Icon from '@components/common/Icon'
import { useSession } from 'next-auth/react'
import useSetRoute from '@utils/hooks/useSetRoute'

function ButtonHome() {
    const { routeTo } = useSetRoute()
    const { data: session } = useSession()
    const handleGoHome = () => (session?.user) ? routeTo('/primetime') : routeTo('/')

    return (
        <div className='flex flex-col justify-centers items-center'>
            <Icon icon={<AiFillHome />} handleOnClick={handleGoHome} />
        </div>
    )
}

export default ButtonHome