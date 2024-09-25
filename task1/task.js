export function findByActorNameAndGenre(allMovies, allActors, actorName, genre) {
    
    const actorFinder = allActors.find(actor => actor.name === actorName);
    
        if (!actorFinder) {
     
        return [];
        }

    const moviesFound = allMovies.filter(movie => {
        const rightActor = movie.actor_ids.includes(actorFinder.id);
        const rightGenre = movie.genres.includes(genre);

        return rightActor&&rightGenre;
    });

  
    const moviesTitles = moviesFound.map(movie => movie.title);
    return moviesTitles;
}