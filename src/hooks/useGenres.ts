import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";

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
