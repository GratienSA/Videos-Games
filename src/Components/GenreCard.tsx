
import React from "react";
import { genreType } from "../utils/TypesGames";

const GenreCard = ({ genre }: { genre: genreType }) => {
	return (
		<div className="flex gap-2 items-center p-1  cursor-pointer overflow-hidden rounded-md hover:bg-gray-400">
			<img
				src={genre.image_background}
				className=" group-hover: scale-105 transition-all w-[40px] h-[40px] object-cover rounded-lg"
				alt="test"
			/>
			<h3>{genre.name}</h3>
		</div>
	);
};

export default GenreCard;