import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST'){
        return res.status(405).json('Method not allowed')
    }

    const {priceIDs} = req.body;

    console.log(priceIDs.map((id: string) => {
        return {
            price: id,
            quantity: 1
        }
    }))

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: priceIDs.map((id: string) => {
            return {
                price: id,
                quantity: 1
            }
        })
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}