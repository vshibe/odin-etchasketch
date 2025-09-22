let bgColor = "gray";
let fillColor = "black";

function createGrid(xsize, ysize) {
	const grid = document.getElementById("grid-container");

	for(let i = 0; i < xsize*ysize; i++) {
		const new_block = document.createElement("div");
		new_block.style.backgroundColor = bgColor;
		new_block.classList.add("grid-block");

		new_block.style.width = 100/xsize + "%";
		new_block.style.height = 100/ysize + "%";

		new_block.addEventListener("mouseenter", (e) => {
			e.target.style.backgroundColor = fillColor;
		});

		grid.appendChild(new_block);
	};
};

function clearGrid() {
	const grid = document.getElementById("grid-container");
	for(const block of grid.childNodes) {
		block.style.backgroundColor = bgColor;
	};	
};

function removeGrid() {
	const grid = document.getElementById("grid-container");
	while (grid.firstChild) {
		grid.removeChild(grid.lastChild);
	};
};

document.getElementById("grid-size").addEventListener("click", (e) => {
	const new_size = +(prompt("What grid size?"));
	console.log(new_size);

	if(new_size && new_size <= 100) {
		removeGrid();

		createGrid(new_size, new_size);
	}
	else {
		console.log("Invalid new grid size.");
	};
});

document.getElementById("grid-clear").addEventListener("click", clearGrid);

removeGrid();
createGrid(5,5);
