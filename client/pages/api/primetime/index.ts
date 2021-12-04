import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const baseURL = 'http://localhost:3001'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req })
    const { accessToken } = req.query
    try {
        if (!session) throw 'Invalid Credentials'
        let response = await fetch('http://localhost:3001/primetime', {
            method: 'GET',
            headers: {
                //'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json()
        if (response.ok) res.status(201).send({ data: result })
        else throw result.message
    }
    catch (error: string | any) {
        res.status(401).send({ message: error })
    }
    finally {
        res.end()
    }
}