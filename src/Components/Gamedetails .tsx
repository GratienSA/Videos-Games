import { Flame, MessageCircle, Star } from "lucide-react";
import React from "react";

const Gamedetails = () => {
	return (
		<div className="sm:w-full">
			<img
				src=""
				alt=""
				className="h-[270px] object-cover rounded-lg   sm:w-full"
			/>
			<h2>
				name
				<span className="bg-green-100 text-black">metacritic</span>
			</h2>
			<div className="flex gap-3 ">
				<Star fill="yellow" color="yellow" />
				rate
				<MessageCircle fill="white" />
				reviews
				<Flame fill="orange" />
				suggestions
			</div>
		</div>
	);
};

export default Gamedetails;
