import { createContext } from "react";
import { gamesType } from "../utils/TypesGames";

export type typeContext = {
	setPage: React.Dispatch<React.SetStateAction<number>>;
	games: gamesType | null;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const ContextGames = createContext<typeContext>({
	setPage: () => {},
	games: null,
	setSearch: () => {},
});