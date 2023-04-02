import genres from "../data/genres";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, error: null, isLoading: false });
// const useGenres = () => useData<Genres>("/genres");
export default useGenres;
