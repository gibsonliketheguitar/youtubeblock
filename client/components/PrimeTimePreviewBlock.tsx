import { Pressable } from 'react-native'
import { default as BlockIcon } from '@components/PrimeTimePreviewBlockIcon'
import { default as PTPreviewBlock } from '@ts/interface/primeTimePreviewBlock'
import useSetRoute from '@utils/hooks/useSetRoute'
//components

export default function PrimeTimePreviewBlock({ subscriptions, id }: PTPreviewBlock) {
    const { routeTo } = useSetRoute()

    function handlePress(e: any) {
        e.preventDefault()
        routeTo(`/primetime/block/${id}`)
    }

    return (
        <Pressable
            onPress={(e) => handlePress(e)}
            onLongPress={(e) => { }}
        >
            <div className="flex flex-row" >
                {subscriptions?.map((item: any, index: number) => {
                    return (
                        <BlockIcon
                            key={index + '_' + item.title}
                            {...item}
                        />
                    )
                })}
            </div>
        </Pressable>
    )
}