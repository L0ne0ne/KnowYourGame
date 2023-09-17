import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { GameAttributes } from "../components/GameAttributes";
import { ExpandableText } from "../components/expandableText";
import useGameDetail from "../hooks/useGameDetails";
import { GameTrailer } from "../components/GameTrailer";
import { GameScreenshots } from "../components/GameScreenshots";

export const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: gameDetail, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error || !gameDetail) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading> {gameDetail.name} </Heading>
        <ExpandableText children={gameDetail.description_raw} />
        <GameAttributes gameDetail={gameDetail} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={gameDetail.id} />
        <GameScreenshots gameId={gameDetail.id} />
      </GridItem>
    </SimpleGrid>
  );
};
