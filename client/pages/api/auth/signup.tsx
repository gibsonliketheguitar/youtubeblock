import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const baseURL = 'http://localhost:3001'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req })

    try {
        if (!session) throw 'Failed to create account'

        let response = await fetch(baseURL + '/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(session?.user)
        })

        if (response.ok) res.status(201).send({ message: 'Sign Up Succesful' })
        else throw (await response.json().then(data => data.message))
    }
    catch (error: string | any) {
        res.status(401).send({ message: error, error: 'Unauthorized' })
    }
    finally {
        res.end()
    }
}