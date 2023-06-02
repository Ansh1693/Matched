export async function revokeApiKey({ keyID }: { keyID: string }) {
  const res = await fetch("/api/api-key/revoke", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ keyID }),
  });

  const data = (await res.json()) as {error?: string};

  if(data.error){
    throw new Error(data.error);
  }
}
