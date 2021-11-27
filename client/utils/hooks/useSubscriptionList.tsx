import { subscriptionAtom } from "@store/atom";
import { useAtom } from "jotai";

export default function useSubscriptionList() {
    const [subscriptions, setSubscriptions] = useAtom(subscriptionAtom)
    return { subscriptions, setSubscriptions }
}