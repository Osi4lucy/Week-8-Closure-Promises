
const movieUrl = 'https://gist.githubusercontent.com/evanc/17f1ade674aa0d8066e0a33be923fe17/raw/b3b6cd9c96e5ca59bf7610c4c17da420bcaea0ae/movies.json';

function getAjaxData(url){

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.open("GET", url);

        request.onload = () => resolve(request.responseText);

        request.onerror = () => reject(request.statusText);

        request.send();

    });

}

getAjaxData(movieUrl)

.then(main, main); // onResolve, onReject

function main(x){

    console.log(x);

}

function movieRating(movie){
	if(movie.rating>=8.5){
		movie.tag = 'Excellent';
	}else if(movie.rating>=8){
		movie.tag = 'Very Good';
	}else{
		movie.tag = 'Good';
	}
	return movie;
}
function mainMovies(movies){
	movies = movies.map(movieRating);
	console.log(movies);

	const averageRating = movies
	    .map(a=> parseFloat(a.rating))
		.reduce((a, b)=> a+b , 0)/movies.length;

	const numberOfExcellentMovies = movies
		.filter(a=> a.rating >= 8.5)
		.length

	console.log(averageRating);
}
