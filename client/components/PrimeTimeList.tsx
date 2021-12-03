import Carousel from '@components/common/Carousel'
import isArrEmpty from '@utils/isArrEmpty'
import { default as PreviewBlock } from '@components/PrimeTimePreviewBlock'

function PrimeTimeList(props: any) {
    if (isArrEmpty(props.data)) return <></>
    return (
        <div className="flex flex-col">
            {props.data.map((item: any, indx: number) => {
                const { id, subscriptions } = item
                return (
                    <Carousel key={indx}>
                        <PreviewBlock
                            key={indx}
                            id={id}
                            subscriptions={subscriptions}
                        />
                    </Carousel>
                )
            })
            }
        </div>
    )
}

export default PrimeTimeList