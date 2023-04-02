import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCropedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

function GenresList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={getCropedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize={"lg"}
              variant={"link"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenresList;
