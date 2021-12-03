import { default as FloatingButton } from '@components/ButtonFloating'
import PrimeTimeList from '@components/PrimeTimeList'
import useAccessToken from '@utils/hooks/useAccessToken'
import { useEffect, useState } from 'react'

export default function PrimeTime() {
    const { accessToken } = useAccessToken()
    const [primeTimes, setPrimeTimes] = useState([])
    useEffect(() => {
        async function getPrimeTimes() {
            const res = await fetch(`/api/primetime?accessToken=${accessToken}`)
            const result: any = await res.json()
            setPrimeTimes(result.data)
        }
        getPrimeTimes()
    }, [])

    return (
        <div className='flex-grow flex flex-col justify-center items-center'>
            <PrimeTimeList data={primeTimes} />
            <FloatingButton />
        </div>
    )
}
