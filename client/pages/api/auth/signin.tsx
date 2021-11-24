import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";

const baseURL = 'http://localhost:3001'
const secret = process.env.JWT_SECRET!

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const token = await getToken({ req, secret })
    console.log('what is token', token, secret)
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

        if (response.ok) res.status(200).send({ message: 'Login successful' })
        else throw 'Error'
    }
    catch (error) {
        res.status(401).send({ message: 'Please check your credentials', error: 'Unauthorized' })
    }
    finally {
        res.end()
    }
}