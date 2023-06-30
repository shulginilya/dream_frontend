// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly

type BoxOfficeType = {
	budget: number;
	grossUS: number;
	grossWorldwide: number;
}; 

type Movie = {
	title: string;
	originalTitle?: string;
	director: string;
	releaseYear: number;
	boxOffice: BoxOfficeType;
};

const dune: Movie = {
	title: "Dune",
	originalTitle: "Dune Part One",
	director: "Denis Villeneuve",
	releaseYear: 2021,
	boxOffice: {
		budget: 165000000,
		grossUS: 108327830,
		grossWorldwide: 400671789,
	},
};

const cats: Movie = {
	title: "Cats",
	director: "Tom Hooper",
	releaseYear: 2019,
	boxOffice: {
		budget: 95000000,
		grossUS: 27166770,
		grossWorldwide: 73833348,
	},
};

// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
const getProfit = (cats: Movie): number => cats.boxOffice.budget - cats.boxOffice.grossWorldwide;
// For example...
// getProfit(cats) => -21166652
