import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import react from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <Box padding="10px">
        <InfiniteScroll
          dataLength={fetchedGamesCount} //This is important field to render the next data
          hasMore={!!hasNextPage}
          next={() => fetchNextPage()}
          loader={<Spinner />}
          endMessage={
            <Text style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </Text>
          }
        >
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
            {data?.pages.map((page, index) => (
              <react.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </react.Fragment>
            ))}
            {isLoading &&
              skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))}
          </SimpleGrid>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default GameGrid;

{
  /* <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {data?.pages.map((page, index) => (
          <react.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </react.Fragment>
        ))}

        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))} */
}
{
  /* {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
        <GameCard game={game} />
        </GameCardContainer>
      ))} */
}
//   </SimpleGrid>
//   {hasNextPage && (
//     <Button onClick={() => fetchNextPage()} marginY={5}>
//       {isFetchingNextPage ? "looding" : "load more"}{" "}
//     </Button>
//   )}
// </Box>
