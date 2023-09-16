import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import { DefinitionItem } from "./DefinitionItem";

interface Prop {
  gameDetail: Game;
}

export const GameAttributes = ({ gameDetail }: Prop) => {
  return (
    <SimpleGrid column={2} as="dl">
      <DefinitionItem term="Platform">
        {gameDetail.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <CriticScore score={gameDetail.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {gameDetail.genres.map((genre) => (
          <Text key={genre.id}> {genre.name} </Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {gameDetail.publishers?.map((publisher) => (
          <Text key={publisher.id}> {publisher.name} </Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};
