import { HiViewGridAdd } from 'react-icons/hi'
import useSetRoute from '@utils/hooks/useSetRoute'

function FloatingButton() {
    const scale = 'transform scale-100'
    const position = 'flex flex-col fixed bottom-3 right-3 z-50 items-center justify-center'
    const height = 'h-12'
    const width = 'w-12'
    const color = 'bg-yellow-300'
    const shape = `${height} ${width} rounded-lg shadow-lg`
    const hover = 'hover:scale-105 hover:cursor-pointer'

    const { routeTo } = useSetRoute()
    return (
        <div
            className={`${scale} ${position} ${shape} ${color} ${hover}`}
            onClick={() => routeTo('/primetime/block')}
        >
            <HiViewGridAdd />
        </div>
    )
}

export default FloatingButton