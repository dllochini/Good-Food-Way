import { db } from "../config/db.js";
import { dietPreferences } from "../schema/dietPreferences.js";

await db.insert(dietPreferences).values([
  {
    dietType: "Vegetarian",
  },
  {
    dietType: "Non Vegetarian",
  },
]);

console.log("Diet preferences seeded successfully");

process.exit(0);
