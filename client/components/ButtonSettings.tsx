import { useRouter } from 'next/dist/client/router'
import { VscAccount } from 'react-icons/vsc'
import Icon from '@components/common/Icon'

function ButtonSettings() {
    const router = useRouter()
    const handleGoSettings = () => router.push('/settings')

    return (
        <div className='flex flex-col justify-centers items-center'>
            <Icon icon={<VscAccount />} handleOnClick={handleGoSettings} />
        </div>
    )
}

export default ButtonSettings