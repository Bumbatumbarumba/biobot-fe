export interface GoogleProfile {
  name: string;
  email: string;
  picture: string;
}

export interface AuthContextType {
  user: GoogleProfile | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}
