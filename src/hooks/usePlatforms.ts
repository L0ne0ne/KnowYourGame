import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient, { FetchResponse, Platform } from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"), // 24h
    initialData: platforms,
  });
};

export default usePlatforms;
