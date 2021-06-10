const FIREBASE_DOMAIN =
  "https://arn-rai-dee-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function addUser(userData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}