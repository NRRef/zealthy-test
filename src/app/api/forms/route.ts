import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        try {
            const form = await prisma.form.findUnique({
                where: { id: parseInt(id) },
            });
            if (!form) {
                return NextResponse.json({ error: 'Form not found' }, { status: 404 });
            }
            return NextResponse.json(form);
        } catch (error) {
            console.error('Error fetching form:', error);
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }
    } else {
        try {
            const forms = await prisma.form.findMany();
            return NextResponse.json(forms);
        } catch (error) {
            console.error('Error fetching forms:', error);
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }
    }
}

export async function POST(request: Request) {
  try {
    const { name, steps } = await request.json();
    
    if (!name || !Array.isArray(steps)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const form = await prisma.form.create({
      data: { name, steps },
    });

    return NextResponse.json({ message: 'Form created', form }, { status: 201 });
  } catch (error) {
    console.error('Error creating form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}