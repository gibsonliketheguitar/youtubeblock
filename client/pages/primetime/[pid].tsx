import useAccessToken from '@utils/hooks/useAccessToken'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function PrimeTimeBlock() {
    const router = useRouter()
    const { accessToken } = useAccessToken()
    const { pid } = router.query

    useEffect(() => {
        async function getPageData() {
            const res = await fetch(`/api/primetime/${pid}/accessToken?=${accessToken}`)
            const result: any = await res.json()
            console.log(result)
        }

        getPageData()
    }, [])

    return <div>
        Hello World: {pid}
    </div>
}