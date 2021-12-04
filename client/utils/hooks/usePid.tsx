import { PID } from '@ts/types/PID'
import { useRouter } from 'next/router'

export default function usePID(): PID {
    const router = useRouter()
    const { pid } = router.query
    return pid
}