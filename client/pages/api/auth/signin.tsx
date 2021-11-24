import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const baseURL = 'http://localhost:3001'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req })
    if (session) {
        let response = await fetch(baseURL + '/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(session.user)
        })
        let result = await response.json()
        if (result?.error) res.send({ message: result.message, error: result.error })
        else res.send({ message: 'login successful' })
    }
    else {
        res.send({ message: 'Please check your credentials', error: 'Unauthorized' })
    }
}