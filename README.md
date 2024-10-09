# Mindful Retreats

Mindful Retreats is a web application for finding and listing mindfulness retreats. It's built with Next.js, React, Tailwind CSS, shadcn/ui, and uses PostgreSQL with DrizzleORM for the backend.

## Prerequisites

- Node.js (v14 or later)
- PostgreSQL

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mindful-retreats.git
cd mindful-retreats
```

2. Install dependencies:

```bash
npm install
```

3. Set up the environment variables:

Copy the `.env.local.example` file to `.env.local` and update the values:

```bash
cp .env.local.example .env.local
```

Update the `DATABASE_URL` and `JWT_SECRET` in the `.env.local` file.

4. Set up the database:

Create a new PostgreSQL database for the project, then run the migrations:

```bash
npm run db:push
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- User authentication (sign up, login)
- List new retreats
- Search and view existing retreats

## Technologies Used

- Next.js
- React
- Tailwind CSS
- shadcn/ui
- DrizzleORM
- PostgreSQL

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.