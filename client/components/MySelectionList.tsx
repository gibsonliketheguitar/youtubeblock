import { default as ResetBtn } from '@components/ButtonReset'
import MySelection from '@ts/interface/mySelection'
import useMySelection from "@utils/hooks/useMySelection"
import MySelectionIcon from './MySelectionIcon'

export default function MySelectionList() {
    const { mySelectionList } = useMySelection()
    return (
        <div className="flex flex-row flex-wrap justify-start">
            {mySelectionList.map((item: MySelection, indx: number) => {
                return <MySelectionIcon key={indx} {...item} />
            })}
            <ResetBtn />
        </div>
    )
}