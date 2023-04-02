import useData from "./useData";
import { PlatForm } from "./useGames";

const usePlatforms = () => useData<PlatForm>("/platforms/lists/parents");
export default usePlatforms;
