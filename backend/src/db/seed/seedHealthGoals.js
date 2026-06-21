import { db } from "../config/db.js";
import { healthGoals } from "../schema/healthGoals.js";

await db.insert(healthGoals).values([
  {
    name: "Lose Weight",
    description:
      "Reduce body fat and improve fitness",
  },
  {
    name: "Build Muscle",
    description:
      "Increase muscle mass and strength",
  },
  {
    name: "Maintain Weight",
    description:
      "Maintain current body composition",
  },
  {
    name: "Improve Health",
    description:
      "Develop healthier nutrition habits",
  },
]);

console.log(
  "Health goals seeded successfully"
);

process.exit(0);