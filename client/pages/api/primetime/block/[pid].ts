import { url } from "inspector";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const baseURL = ''
export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('what is res method', req.method)
    const { accessToken, pid } = req.query
    const Url = baseURL + `http://localhost:3001/primetime/${pid}`
    try {
        const response = await fetch(Url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json()
        console.log('what is result', result)
        if (response.ok) {
            res.status(201).send({ data: result })
        }
        else {
            throw result.message
        }
    }
    catch (error) {
        res.status(404).send({ message: error, error: 'Unauthorized' })
    }
    finally {
        res.end()
    }
}