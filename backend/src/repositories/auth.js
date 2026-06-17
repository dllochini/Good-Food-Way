import { db } from "../config/db.js";
import { eq } from "drizzle-orm";
import { users } from "../schema/users.js";

export const findUserByEmail = async (email) => {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  return result[0];
};

export const findUserById = async (id) => {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.id, id));

  return result[0];
};

export const createUser = async (userData) => {
  const [user] = await db
    .insert(users)
    .values(userData)
    .returning();

  return user;
};