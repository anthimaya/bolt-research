import { NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const [user] = await db.select().from(users).where(eq(users.email, email));

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

    return NextResponse.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while logging in.' }, { status: 500 });
  }
}