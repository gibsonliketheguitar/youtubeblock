import { PID } from '@ts/types/PID'
import useAccessToken from '@utils/hooks/useAccessToken'
import usePID from '@utils/hooks/usePid'

import { useEffect } from 'react'

export default function PrimeTimeBlock() {
    const { accessToken } = useAccessToken()
    const { pid }: any = usePID()

    useEffect(() => {
        async function getPageData() {
            if (!pid) return
            const baseUrl = `/api/primetime/block/${pid}?accessToken=${accessToken}`
            const res = await fetch(baseUrl)
            const result: any = await res.json()

            console.log(result)
        }
        getPageData()
    }, [pid])

    return (
        <div className='flex-grow flex flex-col justify-items items-center'>

        </div>
    )
}