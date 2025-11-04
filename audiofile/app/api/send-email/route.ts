// app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
        const { email, name, cartItems, total, orderId }: OrderRequestBody = await request.json();

        const { data, error }: { data: unknown; error: unknown } = await resend.emails.send({
            from: 'Audiophile <onboarding@resend.dev>',
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
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ error }, { status: 500 });
    }
}