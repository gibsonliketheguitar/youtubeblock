import useSetRoute from "@utils/hooks/useSetRoute"

export default function ButtonSignIn() {
    const { routeTo } = useSetRoute()
    return (
        <button onClick={() => routeTo('/auth/signin')}> Sign In</button>
    )
}