"use client";
import Banner from "../../Components/Banner";
import GameList from "../../Components/GameList";
import GenreList from "../../Components/GenreList";
import Header from "../../Components/Header";
import TrendingGames from "../../Components/TrendingGames";
import React from "react";

const Games = () => {
	return (
		<div className="flex flex-col gap-3 px-8 ">
			<Header/>
			<div className="grid grid-cols-4">
				<div className=" hidden md:block">
					<GenreList />
				</div>
				<div className="col-span-4 md:col-span-3">
					<Banner game={{
						id: 0,
						name: "",
						background_image: "",
						rating: 0,
						metacritic: 0,
						reviews_count: 0
					}} />
					<TrendingGames games={[]} />
					<GameList />
				</div>
			</div>
		</div>
	);
};

export default Games;