import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Screenshots from "../entities/Screenshots";

const useScreenShots = (gameId: number) => {
  const apiclient = new APIClient<Screenshots>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiclient.getAll,
  });
};

export default useScreenShots;
