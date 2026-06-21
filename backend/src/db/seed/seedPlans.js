import { db } from "../../config/db.js";
import { plans } from "../schema/plans.js";

await db.insert(plans).values([
  {
    name: "Free Plan",
    description:
      "Basic nutrition guidance",
    price: "0.00",
    durationDays: 30,
    recommended: false,
  },
  {
    name: "Plan A",
    description:
      "One personalized meal daily",
    price: "2999.00",
    durationDays: 30,
    recommended: true,
  },
  {
    name: "Plan B",
    description:
      "Complete nutrition support",
    price: "4999.00",
    durationDays: 30,
    recommended: false,
  },
]);

console.log(
  "Plans seeded successfully"
);

process.exit(0);