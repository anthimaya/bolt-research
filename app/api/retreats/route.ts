import { NextResponse } from 'next/server';
import { db } from '@/db';
import { retreats } from '@/db/schema';
import { auth } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    const allRetreats = await db.select().from(retreats);
    return NextResponse.json(allRetreats);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while fetching retreats.' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await auth(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, location, duration, description, website } = await req.json();

    const [retreat] = await db.insert(retreats).values({
      name,
      location,
      duration,
      description,
      website,
      userId: user.id,
    }).returning();

    return NextResponse.json(retreat);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while creating the retreat.' }, { status: 500 });
  }
}
</boltArtifact>

Now, let's create a utility function for authentication:

<boltArtifact id="create-auth-util" title="Create authentication utility">
<boltAction type="file" filePath="lib/auth.ts">
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function auth(req: NextRequest) {
  const token = req.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
    const [user] = await db.select().from(users).where(eq(users.id, decoded.userId));

    if (!user) {
      return null;
    }

    return { id: user.id, name: user.name, email: user.email };
  } catch (error) {
    console.error(error);
    return null;
  }
}