import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genre"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"), // 24h
    initialData: genres,
  });

  // return { data: genres, isLoading: false, error: null };
};

export default useGenres;
