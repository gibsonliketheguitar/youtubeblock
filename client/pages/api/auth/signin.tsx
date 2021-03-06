import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";

const baseURL = 'http://localhost:3001'
const secret = process.env.JWT_SECRET!

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req })
    try {
        if (!session) throw 'Error'

        let response = await fetch(baseURL + '/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(session?.user)
        })

        if (response.ok) {
            let { accessToken } = await response.json()
            res.status(200).send({ message: 'Login successful', accessToken })
        }
        else {
            throw 'Error'
        }
    }
    catch (error) {
        res.status(401).send({ message: 'Failed to login. Please check your credentials', error: 'Unauthorized' })
    }
    finally {
        res.end()
    }
}