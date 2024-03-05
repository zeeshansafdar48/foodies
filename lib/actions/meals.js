"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "../meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

// create a server action which guarantee to execute on only server
// This feature exist in react,

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email")
  };
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // NOTE: Serialize Object ==> Which means it should't include any methods. Because those would lost while being sent to the client.
    // But any simple values like Object, Numbers, String, Nest Objects, boolean etc will work
    // For example following is the Serialize Object
    return {
      message: "Invalid Input."
    };
    // throw new Error("Invalid Input ");
  }
  await saveMeal(meal);
  redirect("/meals");
}
