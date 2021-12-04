import { default as Icon } from '@components/BlockSelection/BlockSelectionIcon'
import isArrEmpty from '@utils/isArrEmpty'

export default function BlockSelectionList({ data }: any) {
    return (
        <div className='flex flex-row flex-wrap justify-center'>
            {
                data?.map((ele: any, index: number) => {
                    return (
                        <Icon key={index} {...ele} />
                    )
                })
            }
        </div>
    )
}

