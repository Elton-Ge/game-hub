import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  // console.log(getCropedImageUrl(game.background_image));
  return (
    <Card>
      <Image src={getCropedImageUrl(game.background_image)} height={"200px"} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
        <Heading fontSize={"1xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
