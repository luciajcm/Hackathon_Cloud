const API_URL = import.meta.env.VITE_API_URL;

function getAuthHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
  };
}

export async function createReport(payload) {
  const res = await fetch(`${API_URL}/reports`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data;
}

export async function getMyReports() {
  const res = await fetch(`${API_URL}/reports/me`, {
    headers: getAuthHeaders()
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data;
}

export async function getReports(status = "PENDIENTE") {
  const res = await fetch(`${API_URL}/reports?status=${status}`, {
    headers: getAuthHeaders()
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data;
}

export async function updateReport(id, payload) {
  const res = await fetch(`${API_URL}/reports/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data;
}

export async function getReportHistory(id) {
  const res = await fetch(`${API_URL}/reports/${id}/history`, {
    headers: getAuthHeaders()
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data;
}
