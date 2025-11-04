// app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    },
});

interface CartItem {
    title: string;
    price: number;
    quantity: number;
}

interface OrderRequestBody {
    email: string;
    name: string;
    cartItems: CartItem[];
    total: number;
    orderId: string | number;
}

export async function POST(request: Request): Promise<NextResponse> {
    try {

        console.log('Email API called')
        const { email, name, cartItems, total, orderId }: OrderRequestBody = await request.json();


         console.log('📧 Attempting to send email to:', email);
        console.log('🔑 Environment check - EMAIL_USER exists:', !!process.env.EMAIL_USER);
        console.log('🔑 Environment check - CLIENT_ID exists:', !!process.env.GOOGLE_CLIENT_ID);




        console.log('verifying connection')
        await transporter.verify()
        console.log('Email connection verified')

        const result = await transporter.sendMail({
            from: `Audiophile <${process.env.EMAIL_USER}>`,
            to: [email],
            subject: `Order Confirmation - #${orderId}`,
            html: `
                <h1>Thank you for your order, ${name}!</h1>
                <p>Your order #${orderId} has been confirmed.</p>
                <h2>Order Summary:</h2>
                ${cartItems.map((item: CartItem) => `
                    <div>
                        <strong>${item.title}</strong> - ${item.price} x ${item.quantity}
                    </div>
                `).join('')}
                <h3>Total Amount: $${total}</h3>
                <p>We'll send you a shipping confirmation when your order ships.</p>
            `,
        })

        console.log('sending email')


        return NextResponse.json({
            success: true,
            messageId: result.messageId,
            message: "Email sent successfully"
        });
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({
            error: 'Failed to send email',
            details : error instanceof Error ? error.message : 'unknown error'
         }, { status: 500 });
    }
}