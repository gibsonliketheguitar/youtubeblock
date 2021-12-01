import useMySelection from '@utils/hooks/useMySelection'
import isArrEmpty from '@utils/isArrEmpty'
import { HiOutlineTrash } from 'react-icons/hi'

export default function ButtonReset() {
    const { mySelectionList, reset } = useMySelection()
    const scale = 'transform scale-90'
    const position = 'flex justify-center items-center ml-1'
    const dimension = 'h-10 w-10 rounded-sm overflow-hide'
    const hover = 'hover:scale-100'

    function handleOnClick() {
        if (isArrEmpty(mySelectionList)) return
        reset()
    }

    return (
        <div className={`${scale} ${position} ${dimension} ${hover} bg-gray-200`} onClick={() => handleOnClick()}>
            <HiOutlineTrash />
        </div>
    )
}