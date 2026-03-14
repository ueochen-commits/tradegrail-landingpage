export const API_BASE = "/api";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "API request failed");
  }

  return response.json();
}

export const tradesApi = {
  getAll: (userId: number) => apiFetch(`/trades?userId=${userId}`),
  create: (trade: any) => apiFetch("/trades", {
    method: "POST",
    body: JSON.stringify(trade),
  }),
};

export const authApi = {
  login: (credentials: any) => apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  }),
  signup: (userData: any) => apiFetch("/auth/signup", {
    method: "POST",
    body: JSON.stringify(userData),
  }),
};
