function createGrid(xsize, ysize) {
	const grid = document.getElementById("grid-container");
	
	for(let i = 0; i < xsize*ysize; i++) {
		const new_block = document.createElement("div");
		new_block.style.backgroundColor = "blue";
		new_block.classList.add("grid-block");

		new_block.style.width = 100/xsize + "%";
		new_block.style.height = 100/ysize + "%";

		new_block.addEventListener("mouseenter", (e) => {
			e.target.style.backgroundColor = "black";
		});

		grid.appendChild(new_block);
	};

};

createGrid(3, 3);
