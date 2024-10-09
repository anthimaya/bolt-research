import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const retreats = pgTable('retreats', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  location: text('location').notNull(),
  duration: text('duration').notNull(),
  description: text('description').notNull(),
  website: text('website').notNull(),
  userId: serial('user_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});