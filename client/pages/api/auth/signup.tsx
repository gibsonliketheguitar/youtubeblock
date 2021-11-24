import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const baseURL = 'http://localhost:3001'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req })

    if (session) {
        let response = await fetch(baseURL + '/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(session.user)
        })
        let result = await response.json()

        if (result?.error) res.send({ message: result.message, error: result.error })
        else res.send({ 'test': 'sign up' })
    }
    else {
        res.send({ message: 'Failed to sign up account', error: 'Unauthorized' })
    }
}