export function findUniqueGenres(genres) {


    const listOfGenres = new Set();

    
    for (const genreList of genres) {
      
        for (const item of genreList) {
          listOfGenres.add(item);
         }
    }


        return Array.from(listOfGenres);
    }




