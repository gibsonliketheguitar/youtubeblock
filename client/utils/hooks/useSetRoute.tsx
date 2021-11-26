import { useRouter } from "next/dist/client/router";

export default function useSetRoute() {
    const router = useRouter()
    const routeTo = (route: string) => router.push(route)
    return { routeTo }
}