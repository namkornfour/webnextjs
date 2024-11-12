import useSWR from "swr";
import { StudentProps } from "@/types/Student";

export function useStudentById(id: string) {
  async function fetcher(url: string): Promise<StudentProps> {
    const res = await fetch(url, { cache: 'no-store'  });
    if (!res.ok) {
      throw new Error("Error cannot get data");
    }
    return res.json();
  }

  const { data, isLoading, mutate, error } = useSWR<StudentProps>(
    `/api/students/${id}`,
    fetcher
  );

  return {
    data,
    isLoading: !data && !error,
    mutate,
    error,
  };
}

export function useStudent() {
  async function fetcher(url: string): Promise<StudentProps[]> {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("No found data");
    }

    return res.json();
  }

  const { data, isLoading, mutate, error } = useSWR<StudentProps[]>(
    "/api/students",
    fetcher
  );

  return {
    data,
    isLoading: !data && !error,
    mutate,
    error,
  };
}
