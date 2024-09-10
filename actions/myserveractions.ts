"use server";

export async function getServerData(formData: any) {
  const data = formData.get("my-input-name");
  console.log(`Server Already ${data}`);
}
