import { VscAccount } from 'react-icons/vsc'
import Icon from '@components/common/Icon'
import useSetRoute from '@utils/hooks/useSetRoute'

export default function ButtonSettings() {
    const { routeTo } = useSetRoute()
    return (
        <div className='flex flex-col justify-centers items-center'>
            <Icon icon={<VscAccount />} handleOnClick={() => routeTo('/settings')} />
        </div>
    )
}