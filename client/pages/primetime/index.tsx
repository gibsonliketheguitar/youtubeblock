import { useEffect, useState } from 'react'
import { default as FloatingButton } from '@components/ButtonFloating'
import PrimeTimeList from '@components/PrimeTimeList'
import useAccessToken from '@utils/hooks/useAccessToken'
import useGlobalAlertMessage from '@utils/hooks/useGlobalAlertMessage'

export default function PrimeTime() {
    const [primeTimes, setPrimeTimes] = useState([])
    const { accessToken } = useAccessToken()
    const { setMessage } = useGlobalAlertMessage()

    useEffect(() => {
        async function getPrimeTimes() {
            try {
                const res = await fetch(`/api/primetime?accessToken=${accessToken}`)
                const result: any = await res.json()

                if (res.ok) setPrimeTimes(result.data)
                else throw result.message
            }
            catch (error: any) {
                setMessage(error)
            }
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
