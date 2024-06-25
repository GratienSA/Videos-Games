import React, { useEffect, useState } from "react";
import GenreCard from "./GenreCard";
import { getGenresList } from "../services/gamesdata";
import { genreType } from "../utils/TypesGames";

const GenreList = () => {
	const [genreList, setgenreList] = useState<genreType[]>([]);
	useEffect(() => {
		const getGenres = async () => {
			const response = await getGenresList;
			setgenreList(response.data.results);
		};
		getGenres();
	}, []);

	return (
		<div className="flex flex-col gap-3">
			<h2>Genres</h2>
			<div className="flex flex-col justify-center">
				{genreList.map((genre: genreType) => (
					<GenreCard key={genre.id} genre={genre} />
				))}
			</div>
		</div>
	);
};

export default GenreList;
