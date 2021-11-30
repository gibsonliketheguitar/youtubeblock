import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import YtSelectFloatBtn from '@ts/interface/ytSelectFloatBtn';
import { PREV, NEXT } from '@utils/constants';
import useCurrYtList from '@utils/hooks/useSubscriptionList';
import getSubscriptions from '@utils/youtubeSubscriptionHelpers';

export default function YoutuberSelectFloatingButton({ type, disable, pageToken }: YtSelectFloatBtn) {
    const { setCurrYtList } = useCurrYtList()
    //position
    const fixedDirection = type === PREV ? 'left-0' : 'right-0'
    const position = `flex fixed z-50 bottom-2/4 ${fixedDirection}`
    //box shape and style
    const scale = 'transform scale-100'
    const height = 'h-8'
    const width = 'w-8'
    const shape = `${height} ${width} rounded-lg`
    //visual 
    const shadow = 'shadow-lg'
    const opacity = 'opacity-60'
    const color = disable ? 'bg-gray-300' : 'bg-yellow-300'
    //hover
    const hover = 'hover:opacity-100 hover:scale-125'

    async function handleOnClick() {
        if (disable) return
        const data = await getSubscriptions(pageToken)
        setCurrYtList(data)
    }

    const IconTable: any = {
        [PREV]: <AiFillCaretLeft />,
        [NEXT]: <AiFillCaretRight />
    }
    console.log(type)

    return (
        <span onClick={() => handleOnClick()}>
            <div className={`${scale} ${position} ${shape} ${color} ${opacity} ${shadow} ${hover}`}>
                <span className='flex-grow flex flex-col justify-center items-center'>{IconTable[type]}</span>
            </div>
        </span>
    )
}
