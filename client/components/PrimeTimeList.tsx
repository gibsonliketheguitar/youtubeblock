import Carousel from '@components/common/Carousel'
import { default as PreviewBlock } from '@components/PrimeTimePreviewBlock'
import { default as PtInterface } from '@ts/interface/primeTimeList'
import isArrEmpty from '@utils/isArrEmpty'

export default function PrimeTimeList({ data }: PtInterface) {
    if (isArrEmpty(data)) return <></>
    return (
        <div className="flex flex-col">
            {data?.map((item: any, indx: number) => {
                return (
                    <Carousel key={indx}>
                        <PreviewBlock
                            key={indx}
                            id={item.id}
                            subscriptions={item.subscriptions}
                        />
                    </Carousel>
                )
            })}
        </div>
    )
}
