// Your Code Here!
let combinedMovieDataSet = movieDetails
  .map((detail) => {
    //Find the same movie in the other array
    let thisMovie = movies.find(
      (movie) =>
        detail.title === movie.title &&
        movie.year === parseInt(detail.release_date)
    );
    if (!thisMovie) {
      return undefined;
    }
    return { ...thisMovie, ...detail };
  })
  .filter((movie) => movie);

console.log("Combined Movies:", combinedMovieDataSet);

function movieCard(movies) {
  console.log(movies)
  let display = document.getElementById("gallery");
  let card = document.createElement("div");

  display.innerHTML = ""

  let cardInfo = movies.map(
    (movie) =>
      `<div class="movieCard"> <img width="250px" src=${movie.imageUrl}> <h2>Title: ${movie.title}</h2>
      <h3>Cast: ${movie.cast}</h3>
      <h4>Year: ${movie.year}</h4>
      </div>`
  );

  card.innerHTML = cardInfo.join("");
  card.classList.add("movie-card-container")
  display.append(card);
}



let searchButton = document.getElementById("btn");

function movieSearch() {

  let searchedTitle = document.getElementById("title").value;
  let searchedActor = document.getElementById("actor").value;

  let filterSearch = combinedMovieDataSet.filter((movie) =>
    movie.title.toLowerCase().includes(searchedTitle.toLowerCase())
  ).filter((movie) =>
  movie.cast.some((castMember) =>
    castMember.toLowerCase().includes(searchedActor)
  )
);
  console.log(filterSearch)

  movieCard(filterSearch)
}
searchButton.addEventListener("click", movieSearch);

movieCard(combinedMovieDataSet);
