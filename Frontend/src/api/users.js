const API_URL = import.meta.env.VITE_API_URL;

function getAuthHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
  };
}

export async function getMe() {
  const res = await fetch(`${API_URL}/users/me`, {
    headers: getAuthHeaders()
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data;
}

export async function updateMe(payload) {
  const res = await fetch(`${API_URL}/users/me`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data;
}
