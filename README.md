the different components 

app movieList, MovieDetail

utilities are taken from the exercises 

the app works like this:
at the top of the page we take all the different files that we need like useStates from the utilities
we then use that useStates to create 3 diffenret states movies filter screenings the movies holds all the movies while filter is the one that we actually display 
as when we filter the movies we need to be able to get back all the movies taht we filtered away so if we enter '' we get to the "home page" were it holds all the movies
screenings holds all the screenings that is happening and so that we can display the time it is going to be played at 

use effect allows us to run any code that causes achange of the current component 
in the use effect we fetch the movies and screening times then we attach a slug on the movies and kebabify the title which just cleans up the string by forexample replacing white spaces with hyphens "-" we then give each of our states the values

filter method that takes the input that we can find by using react useRef when we find that value we filter by that value and check if we have any of that genre of movies if not then we just return 

return the html with thte components

MovieList
in the movie list we get te state and then return some html with information about the movie like name date length image

in the movie detail
we get the state then we get the slug from the url and matches that the movie we have clicked on when we find a match we can destructure it to its component and return some html to be rendered 

in main.jsx we get the app and get element by id root to then send it to the index.html so it can be shown on the website