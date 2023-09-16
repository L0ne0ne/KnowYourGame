import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { publishers } from "./publisher";

export interface Game {
  id: number;
  slug: string;
  name: string;
  genres: Genre[];
  publishers: publishers[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
}
