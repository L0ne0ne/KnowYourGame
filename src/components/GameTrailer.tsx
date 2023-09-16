import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  const first = data?.results[0];

  if (isLoading) return null;
  if (error) throw error;

  return <video src={first?.data[480]} poster={first?.preview} controls />;
};
