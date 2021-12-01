import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const baseURL = 'http://localhost:3001'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req })
    const { accessToken, subscriptions } = req.body
    const payload = {
        title: 'None',
        description: 'None',
        tags: [],
        shared: [],
        rank: 99,
        subscriptions
    }
    try {
        if (!session) throw 'Invalid Credentials'
        let response = await fetch(baseURL + '/primetime', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })

        if (response.ok) {
            res.status(201).send({ message: 'Cread' })
        }
        else {
            throw await response.json().then(data => data.message)
        }
    }
    catch (error: string | any) {
        res.status(401).send({ message: error, error: 'Unauthorized' })
    }
    finally {
        res.end()
    }
}