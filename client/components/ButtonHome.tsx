import { useRouter } from 'next/dist/client/router'
import { AiFillHome } from 'react-icons/ai'
import Icon from '@components/common/Icon'

function ButtonHome() {
    const router = useRouter()
    const handleGoHome = () => router.push('/')

    return (
        <div className='flex flex-col justify-centers items-center'>
            <Icon icon={<AiFillHome />} handleOnClick={handleGoHome} />
        </div>
    )
}

export default ButtonHome