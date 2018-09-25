export const fetchMovieTitles = async inputTitle => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=2a98f74c&s=${inputTitle}/`,
  );
  const { Search, totalResults, Response } = await response.json();
 
  return {
    title: Search[0].Title,
    //totalResults: totalResults,
    //search_response: Response,
  };
};