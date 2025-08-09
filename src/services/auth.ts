import { api } from "@/lib/api";

export interface SignupPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  role?: string;
}

export async function signup(data: SignupPayload) {
  const res = await api.post("/auth/signup", data);
  return res.data;
}

export interface SigninPayload {
  email: string;
  password: string;
}

export interface SigninResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

export async function signin(data: SigninPayload): Promise<SigninResponse> {
  const res = await api.post("/auth/signin", data);
  return res.data;
}
