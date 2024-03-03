"use server";

// create a server action which guarantee to execute on only server
// This feature exist in react,

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email")
  };
  console.log("==> ~ shareMeal ~ meal:", meal);
}
