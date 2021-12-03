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
            if (!pid) return
            const baseUrl = `/api/primetime/block/${pid}?accessToken=${accessToken}`
            const res = await fetch(baseUrl)
            const result: any = await res.json()
            console.log('block result', result)
        }

        getPageData()
    }, [pid])

    return <div>
        Hello World: {pid}
    </div>
}