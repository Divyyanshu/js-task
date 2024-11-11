// Task 1: Add and Remove Elements Conditionally
// 1. Create an array of your favorite movies.
// 2. Add a new movie only if it doesn’t already exist in the array.
// 3. Remove the last movie if the array length exceeds 5.


let favMovies = ["ddlj", "kick", "spiderman", "msdhoni", "stree"];

// addition movie 
function addmovie(movie) {
    if (!favMovies.includes(movie)) {
        favMovies.push(movie);
        console.log(`${movie} this movie has been added in the list`)
    } else {
        console.log(`${movie} this movie is already in the list`)
    }
    // removal movie
    if (favMovies.length > 5) {
        const removeMovie = favMovies.pop(movie)
        console.log(`${removeMovie} this movie is removed in the list for exceed the list size by 6`)
    }
}


addmovie("spiderman");
console.log(favMovies)