import type { User } from "@/types/user";

export const useUsers = () => {
  const { data, pending, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );

  return {
    users: data,
    pending,
    error,
  };
};
