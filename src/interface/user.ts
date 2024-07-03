export interface UserType {
  id: number;
  name: string;
  department: string;
  avatar: string;
}

export interface UserContextType {
  users: UserType | null;
  loading: boolean;
  error: string | null;
}