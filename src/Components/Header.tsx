import React from "react";

const Header = () => {
	return (
		<div className="flex items-center px-8 py-4">
			<div
				className=" bg-slate-200 p-2 w-full
      mx-5 rounded-full "
			>
				<input
					type="text"
					placeholder="Search Games"
					className="px-2  w-full border-3 border-red bg-transparent  outline-none"
				/>
			</div>
		</div>
	);
};

export default Header;