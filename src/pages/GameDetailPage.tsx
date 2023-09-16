import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { GameAttributes } from "../components/GameAttributes";
import { ExpandableText } from "../components/expandableText";
import useGameDetail from "../hooks/useGameDetails";
import { GameTrailer } from "../components/GameTrailer";

export const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: gameDetail, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error || !gameDetail) throw error;

  return (
    <>
      <Heading> {gameDetail.name} </Heading>
      <ExpandableText children={gameDetail.description_raw} />
      <GameAttributes gameDetail={gameDetail} />
      <GameTrailer gameId={gameDetail.id} />
    </>
  );
};
