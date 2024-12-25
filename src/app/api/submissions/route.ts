import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const {
            email,
            password,
            birthday,
            streetAddress,
            city,
            state,
            zipCode,
            aboutMe,
            formId
        } = data;

        if (!email || !password || !formId || !birthday || !city || !state || !zipCode) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }
        const date = new Date(birthday)
        const submission = await prisma.submission.create({
            data: {
                email,
                password,
                birthday: date,
                streetAddress,
                city,
                state,
                zipCode,
                aboutMe,
                formId: parseInt(formId)
            }
        });
        return NextResponse.json({ message: 'Submission created', submission }, { status: 201 }, {
            headers: {
                'Cache-Control': 'no-store, max-age=0',
            },
        });
    } catch (e) {
        console.error('Error creating submission:', e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const submissions = await prisma.submission.findMany({
            include: {
                form: {
                    select: {
                        name: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json(submissions, {
            headers: {
                'Cache-Control': 'no-store, max-age=0',
            },
        });
    } catch (error) {
        console.error('Error fetching submissions:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
