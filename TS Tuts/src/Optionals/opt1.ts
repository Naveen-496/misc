function printIngredient(ingredient: string, quantity: string, extra?: string) {
  console.log(`${ingredient}: ${quantity} ${extra ? "-> " + extra : ""}`);
}

// printIngredient("floor", "3cups", "with honey");

interface Users {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: Users): string {
  if (user.info) {
    return user.info!.email!;
  }
  return "e";
}

function getEmailEasy(user: Users): string {
  return user.info?.email ?? "not found";
}

console.log(getEmail({ id: "123" }));
