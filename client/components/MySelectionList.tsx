import { default as ResetBtn } from '@components/ButtonReset'
import useMySelection from "@utils/hooks/useMySelection"
import MySelectionIcon from './MySelectionIcon'

export default function MySelectionList() {
    const { mySelectionList, remove } = useMySelection()
    return (
        <div className="flex flex-row flex-wrap justify-start">
            {mySelectionList.map((item: any, indx: number) => {
                return <MySelectionIcon key={indx} {...remove} {...item} />
            })}
            <ResetBtn />
        </div>
    )
}