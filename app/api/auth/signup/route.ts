import { NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    const [user] = await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
    }).returning();

    return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while creating the user.' }, { status: 500 });
  }
}