const API_URL = import.meta.env.VITE_API_URL;

export async function login(correo, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, password })
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);

  localStorage.setItem("token", data.token);
  return data;
}

export async function register(payload) {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);

  return data;
}
