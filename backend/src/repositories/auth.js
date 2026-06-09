import { db } from "../config/db.js";
import { users } from "../schema/users.js";
import { eq } from "drizzle-orm";

export const findUserByEmail = async (email) => {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  return result[0];
};

export const createUser = async (userData) => {
  const result = await db
    .insert(users)
    .values(userData)
    .returning();

  return result[0];
};