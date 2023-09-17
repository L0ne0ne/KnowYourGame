import Genre from "./Genre";
import Platform from "./Platform";
import Publishers from "./publisher";

interface Game {
  id: number;
  slug: string;
  name: string;
  genres: Genre[];
  publishers: Publishers[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
}

export default Game;
