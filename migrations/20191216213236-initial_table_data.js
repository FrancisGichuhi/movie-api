'use strict';

module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */


    return queryInterface.bulkInsert('movies', [
      {
        title: "12 Angry Men",
        director: "Sidney Lumet",
        releaseDate: "4/10/1957",
        rating: "Not Rated",
        runTime: 95 ,
        genre: "Drama"
      },
      {
        title: "2001: A Space Odyssey",
        director: "Stanley Kubrick",
        releaseDate: "4/3/1968",
        rating: "G",
        runTime: 140 ,
        genre: "Science fiction"
      },
      {
        title: "A Clockwork Orange",
        director: "Stanley Kubrick",
        releaseDate: "12/19/1971",
        rating: "R",
        runTime: 137 ,
        genre: "Drama"
      },
      {
        title: "A Night At The Opera",
        director: "Sam Wood",
        releaseDate: "11/15/1935",
        rating: "Passed",
        runTime: 90 ,
        genre: "Comedy"
      },
      {
        title: "A Streetcar Named Desire",
        director: "Elia Kazan",
        releaseDate: "3/22/1952",
        rating: "PG",
        runTime: 125 ,
        genre: "Drama"
      },
      {
        title: "All About Eve",
        director: "Joseph L. Mankiewicz",
        releaseDate: "10/27/1950",
        rating: "Passed",
        runTime: 138 ,
        genre: "Drama"
      },
      {
        title: "All The President's Men",
        director: "Alan J. Pakula",
        releaseDate: "4/1/1976",
        rating: "PG",
        runTime: 136 ,
        genre: "Drama"
      },
      {
        title: "American Graffiti",
        director: "George Lucas",
        releaseDate: "8/11/1973",
        rating: "PG",
        runTime: 110 ,
        genre: "Comedy"
      },
      {
        title: "Annie Hall",
        director: "Woody Allen",
        releaseDate: "4/20/1977",
        rating: "PG",
        runTime: 94 ,
        genre: "Romantic comedy"
      },
      {
        title: "Apocalypse Now",
        director: "Francis Ford Coppola",
        releaseDate: "8/15/1979",
        rating: "R",
        runTime: 157 ,
        genre: "Drama"
      },
      {
        title: "Ben-Hur",
        director: "William Wyler",
        releaseDate: "1/29/1960",
        rating: "G",
        runTime: 212 ,
        genre: "Epic"
      },
      {
        title: "Blade Runner",
        director: "Ridley Scott",
        releaseDate: "6/25/1982",
        rating: "R",
        runTime: 124 ,
        genre: "Science fiction"
      },
      {
        title: "Bonnie And Clyde",
        director: "Arthur Penn",
        releaseDate: "8/13/1967",
        rating: "R",
        runTime: 111 ,
        genre: "Biography"
      },
      {
        title: "Bringing Up Baby",
        director: "Howard Hawks",
        releaseDate: "2/18/1938",
        rating: "Not Rated",
        runTime: 102 ,
        genre: "Screwball comedy"
      },
      {
        title: "Butch Cassidy And The Sundance Kid",
        director: "George Roy Hill",
        releaseDate: "10/24/1969",
        rating: "PG",
        runTime: 112 ,
        genre: "Comedy-drama"
      },
      {
        title: "Cabaret",
        director: "Bob Fosse",
        releaseDate: "2/13/1972",
        rating: "PG",
        runTime: 124 ,
        genre: "Drama"
      },
      {
        title: "Casablanca",
        director: "Michael Curtiz",
        releaseDate: "1/23/1943",
        rating: "PG",
        runTime: 103 ,
        genre: "Romance"
      },
      {
        title: "Chinatown",
        director: "Roman Polanski",
        releaseDate: "6/20/1974",
        rating: "R",
        runTime: 132 ,
        genre: "Mystery"
      },
      {
        title: "Citizen Kane",
        director: "Orson Welles",
        releaseDate: "9/5/1941",
        rating: "PG",
        runTime: 119 ,
        genre: "Drama"
      },
      {
        title: "City Lights",
        director: "Charles Chaplin",
        releaseDate: "3/7/1931",
        rating: "G",
        runTime: 87 ,
        genre: "Comedy-drama"
      },
      {
        title: "Do The Right Thing",
        director: "Spike Lee",
        releaseDate: "6/30/1989",
        rating: "R",
        runTime: 120 ,
        genre: "Drama"
      },
      {
        title: "Double Indemnity",
        director: "Billy Wilder",
        releaseDate: "4/24/1944",
        rating: "Passed",
        runTime: 106 ,
        genre: "Film noir"
      },
      {
        title: "Dr. Strangelove",
        director: "Stanley Kubrick",
        releaseDate: "1/29/1964",
        rating: "PG",
        runTime: 102 ,
        genre: "Black comedy"
      },
      {
        title: "Duck Soup",
        director: "Leo McCarey",
        releaseDate: "11/17/1933",
        rating: "Not Rated",
        runTime: 80 ,
        genre: "Comedy"
      },
      {
        title: "E.T",
        director: "Steven Spielberg",
        releaseDate: "6/11/1982",
        rating: "PG",
        runTime: 120 ,
        genre: "Fantasy"
      },
      {
        title: "Easy Rider",
        director: "Dennis Hopper",
        releaseDate: "7/14/1969",
        rating: "R",
        runTime: 95 ,
        genre: "Drama"
      },
      {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        releaseDate: "7/6/1994",
        rating: "PG-13",
        runTime: 142 ,
        genre: "Comedy-drama"
      },
      {
        title: "Gone With The Wind",
        director: "Victor Fleming",
        releaseDate: "1/17/1940",
        rating:"Passed",
        runTime: 220,
        genre:"Romance"
      },
      {
        title: "Goodfellas",
        director: "Martin Scorsese",
        releaseDate: "9/19/1990",
        rating: "R",
        runTime: 146 ,
        genre: "Drama"
      },
      {
        title: "High Noon",
        director: "Fred Zinnemann",
        releaseDate: "7/30/1952",
        rating: "PG",
        runTime: 87 ,
        genre: "Western"
      },
      {
        title: "In The Heat Of The Night",
        director: "Norman Jewison",
        releaseDate: "8/2/1967",
        rating: "Not Rated",
        runTime: 110 ,
        genre: "Drama"
      },
      {
        title: "Intolerance",
        director: "D. W. Griffith",
        releaseDate: "9/5/1916",
        rating: "Passed",
        runTime: 197 ,
        genre: "Drama"
      },
      {
        title: "It Happened One Night",
        director: "Frank Capra",
        releaseDate: "2/23/1934",
        rating: "Not Rated",
        runTime: 105 ,
        genre: "Screwball comedy"
      },
      {
        title: "It'S A Wonderful Life",
        director: "Frank Capra",
        releaseDate: "1/7/1947",
        rating: "PG",
        runTime: 132 ,
        genre: "Comedy-drama"
      },
      {
        title: "Jaws",
        director: "Steven Spielberg",
        releaseDate: "6/20/1975",
        rating: "PG",
        runTime: 124 ,
        genre: "Drama"
      },
      {
        title: "King Kong",
        director: "Merian C. Cooper",
        releaseDate: "4/7/1933",
        rating: "Passed",
        runTime: 110,
        genre:  "Adventure"
      },
      {
        title: "Lawrence Of Arabia",
        director: "David Lean",
        releaseDate: "12/16/1962",
        rating: "Approved",
        runTime: 180 ,
        genre: "Adventure"
      },
      {
        title: "M*A*S*H",
        director: "Robert Altman",
        releaseDate: "3/1/1970",
        rating: "R",
        runTime: 116 ,
        genre: "Comedy"
      },
      {
        title: "Midnight Cowboy",
        director: "John Schlesinger",
        releaseDate: "5/25/1969",
        rating: "R",
        runTime: 113 ,
        genre: "Drama"
      },
      {
        title: "Modern Times",
        director: "Charles Chaplin",
        releaseDate: "2/21/1936",
        rating: "G",
        runTime: 87 ,
        genre: "Comedy"
      },
      {
        title: "Mr. Smith Goes to Washington",
        director: "Frank Capra",
        releaseDate: "10/19/1939",
        rating: "Not Rated",
        runTime: 130 ,
        genre: "Comedy-drama"
      },
      {
        title: "Nashville",
        director: "Robert Altman",
        releaseDate: "6/11/1975",
        rating: "R",
        runTime: 157 ,
        genre: "Comedy-drama"
      },
      {
        title: "Network",
        director: "Sidney Lumet",
        releaseDate: "11/14/1976",
        rating: "R",
        runTime: 121 ,
        genre: "Comedy-drama"
      },
      {
        title: "North By Northwest",
        director: "Alfred Hitchcock",
        releaseDate: "9/26/1959",
        rating: "Not Rated",
        runTime: 136 ,
        genre: "Drama"
      },
      {
        title: "On The Waterfront",
        director: "Elia Kazan",
        releaseDate: "6/22/1954",
        rating: "Not Rated",
        runTime: 107 ,
        genre: "Drama"
      },
      {
        title: "One Flew Over The Cuckoo's Nest",
        director: "Milos Forman",
        releaseDate: "11/19/1975",
        rating: "R",
        runTime: 133 ,
        genre: "Drama"
      },
      {
        title: "Platoon",
        director: "Oliver Stone",
        releaseDate: "12/19/1986",
        rating: "R",
        runTime: 120 ,
        genre: "Drama"
      },
      {
        title: "Psycho",
        director: "Alfred Hitchcock",
        releaseDate: "9/8/1960",
        rating: "R",
        runTime: 108 ,
        genre: "Horror"
      },
      {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseDate: "10/14/1994",
        rating: "R",
        runTime: 154 ,
        genre: "Comedy-drama"
      },
      {
        title: "Raging Bull",
        director: "Martin Scorsese",
        releaseDate: "12/19/1980",
        rating: "R",
        runTime: 129 ,
        genre: "Biography"
      },
      {
        title: "Raiders Of The Lost Ark",
        director: "Steven Spielberg",
        releaseDate: "6/12/1981",
        rating: "PG",
        runTime: 115 ,
        genre: "Adventure"
      },
      {
        title: "Rear Window",
        director: "Alfred Hitchcock",
        releaseDate: "9/1/1954",
        rating: "PG",
        runTime: 112 ,
        genre: "Mystery"
      },
      {
        title: "Rocky",
        director: "John G. Avildsen",
        releaseDate: "12/3/1976",
        rating: "PG",
        runTime: 121 ,
        genre: "Drama"
      },
      {
        title: "Saving Private Ryan",
        director: "Steven Spielberg",
        releaseDate: "7/24/1998",
        rating: "R",
        runTime: 170 ,
        genre: "Drama"
      },
      {
        title: "Schindler's List",
        director: "Steven Spielberg",
        releaseDate: "12/15/1993",
        rating: "R",
        runTime: 185 ,
        genre: "Drama"
      },
      {
        title: "Shane",
        director: "George Stevens",
        releaseDate: "8/1/1953",
        rating: "Not Rated",
        runTime: 118 ,
        genre: "Western"
      },
      {
        title: "Singin' In The Rain",
        director: "Gene Kelly",
        releaseDate: "4/11/1952",
        rating: "G",
        runTime: 103,
        genre: "Musical" 
      },
      {
        title: "Snow White And The Seven Dwarfs",
        director: "William Cottrell",
        releaseDate: "2/4/1938",
        rating: "G",
        runTime: 86,
        genre: "Musical"
      },
      {
        title: "Some Like It Hot",
        director: "Billy Wilder",
        releaseDate: "4/14/1959",
        rating: "Not Rated",
        runTime: 120 ,
        genre: "Comedy"
      },
      {
        title: "Sophie'S Choice",
        director: "Alan J. Pakula",
        releaseDate: "12/10/1982",
        rating: "R",
        runTime: 157 ,
        genre: "Drama"
      },
      {
        title: "Spartacus",
        director: "Stanley Kubrick",
        releaseDate:"11/17/1960",
        rating: "PG-13",
        runTime: 195 ,
        genre: "Epic"
      },
      {
        title: "Star Wars",
        director: "George Lucas",
        releaseDate: "5/25/1977",
        rating: "PG",
        runTime: 123 ,
        genre: "Adventure"
      },
      {
        title: "Sullivan's Travels",
        director: "Preston Sturges",
        releaseDate: "2/6/1942",
        rating: "Not Rated",
        runTime: 91 ,
        genre: "Comedy-drama"
      },
      {
        title: "Sunrise",
        director: "F.W. Murnau",
        releaseDate: "11/4/1927",
        rating: "Passed",
        runTime: 94 ,
        genre: "Drama"
      },
      {
        title: "Sunset Blvd",
        director: "Billy Wilder",
        releaseDate: "9/29/1950",
        rating: "Not Rated",
        runTime: 115 ,
        genre: "Drama"
      },
      {
        title: "Swing Time",
        director: "George Stevens",
        releaseDate: "9/4/1936",
        rating: "Not Rated",
        runTime: 103 ,
        genre: "Musical"
      },
      {
        title: "Taxi Driver",
        director: "Martin Scorsese",
        releaseDate: "2/7/1976",
        rating: "R",
        runTime: 112 ,
        genre: "Drama"
      },
      {
        title: "The African Queen",
        director: "John Huston",
        releaseDate: "3/21/1952",
        rating: "PG",
        runTime: 106 ,
        genre: "Romance"
      },
      {
        title: "The Apartment",
        director: "Billy Wilder",
        releaseDate: "9/16/1960",
        rating: "Not Rated",
        runTime: 125 ,
        genre: "Comedy-drama"
      },
      {
        title: "The Best Years Of Our Lives",
        director: "William Wyler",
        releaseDate: "5/29/1947",
        rating: "Approved",
        runTime: 172 ,
        genre: "Drama"
      },
      {
        title: "The Bridge On The River Kwai",
        director: "David Lean",
        releaseDate: "12/14/1957",
        rating: "PG",
        runTime: 161 ,
        genre: "Drama"
      },
      {
        title: "The Deer Hunter",
        director: "Michael Cimino",
        releaseDate: "12/8/1978",
        rating: "R",
        runTime: 183 ,
        genre: "Drama"
      },
      {
        title: "The French Connection",
        director: "William Friedkin",
        releaseDate: "10/1/1971",
        rating: "R",
        runTime: 104 ,
        genre: "Drama"
      },
      {
        title: "The General",
        director: "Buster Keaton, Clyde Bruckman",
        releaseDate:"2/5/1927" ,
        rating: "Passed",
        runTime: 77,
        genre: "Comedy"
      },
      {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        releaseDate: "3/24/1972",
        rating: "R",
        runTime: 177 ,
        genre: "Drama"
      },
      {
        title: "The Godfather Part Ii",
        director: "Francis Ford Coppola",
        releaseDate: "12/20/1974",
        rating: "R",
        runTime: 200 ,
        genre: "Drama"
      },
      {
        title: "The Gold Rush",
        director: "Charles Chaplin",
        releaseDate: "8/16/1925",
        rating: "Not Rated",
        runTime: 74 ,
        genre: "Comedy-drama"
      },
      {
        title: "The Graduate",
        director: "Mike Nichols",
        releaseDate: "12/21/1967",
        rating: "PG",
        runTime: 105 ,
        genre: "Comedy-drama"
      },
      {
        title: "The Grapes Of Wrath",
        director: "John Ford",
        releaseDate: "3/15/1940",
        rating: "Passed",
        runTime: 129 ,
        genre: "Drama"
      },
      {
        title: "The Last Picture Show",
        director: "Peter Bogdanovich",
        releaseDate: "10/1/1971",
        rating: "R",
        runTime: 118 ,
        genre: "Drama"
      },
      {
        title: "The Lord Of The Rings: The Fellowship Of The Ring",
        director: "Peter Jackson",
        releaseDate: "12/19/2001",
        rating: "PG-13",
        runTime: 178 ,
        genre: "Adventure"
      },
      {
        title: "The Maltese Falcon",
        director: "John Huston",
        releaseDate: "10/18/1941",
        rating: "Not Rated",
        runTime: 100 ,
        genre: "Drama"
      },
      {
        title: "The Philadelphia Story",
        director: "George Cukor",
        releaseDate: "1/17/1941",
        rating: "Not Rated",
        runTime: 112 ,
        genre: "Romantic comedy"
      },
      {
        title: "The Searchers",
        director: "John Ford",
        releaseDate: "5/26/1956",
        rating: "Passed",
        runTime: 119 ,
        genre: "Western"
      },
      {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        releaseDate: "10/14/1994",
        rating: "R",
        runTime: 142 ,
        genre: "Drama"
      },
      {
        title: "The Silence Of The Lambs",
        director: "Jonathan Demme",
        releaseDate: "2/14/1991",
        rating: "R",
        runTime: 120 ,
        genre: "Drama"
      },
      {
        title: "The Sixth Sense",
        director: "M. Night Shyamalan",
        releaseDate: "8/6/1999",
        rating: "PG-13",
        runTime: 107 ,
        genre: "Drama"
      },
      {
        title: "The Sound Of Music",
        director: "Robert Wise",
        releaseDate: "4/1/1965",
        rating: "G",
        runTime: 175 ,
        genre: "Musical"
      },
      {
        title: "The Treasure Of The Sierra Madre",
        director: "John Huston",
        releaseDate: "1/24/1948",
        rating: "Passed",
        runTime: 128 ,
        genre: "Drama"
      },
      {
        title: "The Wild Bunch",
        director: "Sam Peckinpah",
        releaseDate: "6/18/1969",
        rating: "R",
        runTime: 135 ,
        genre: "Western"
      },
      {
        title: "The Wizard Of Oz",
        director: "Victor Fleming, King Vidor",
        releaseDate:"8/25/1939" ,
        rating: "PG",
        runTime:101,
        genre: "Fantasy, Musical"
      },
      {
        title: "Titanic",
        director: "James Cameron",
        releaseDate: "12/19/1997",
        rating: "PG-13",
        runTime: 197 ,
        genre: "Drama"
      },
      {
        title: "To Kill A Mockingbird",
        director: "Robert Mulligan",
        releaseDate: "12/25/1962",
        rating: "Not Rated",
        runTime: 129 ,
        genre: "Drama"
      },
      {
        title: "Tootsie",
        director: "Sydney Pollack",
        releaseDate: "12/17/1982",
        rating: "PG",
        runTime: 116 ,
        genre: "Comedy-drama"
      },
      {
        title: "Toy Story",
        director: "John Lasseter",
        releaseDate: "11/22/1995",
        rating: "G",
        runTime: 81 ,
        genre: "Comedy"
      },
      {
        title: "Unforgiven",
        director: "Clint Eastwood",
        releaseDate: "8/7/1992",
        rating: "R",
        runTime: 130 ,
        genre: "Western"
      },
      {
        title: "Vertigo",
        director: "Alfred Hitchcock",
        releaseDate: "5/28/1958",
        rating: "PG",
        runTime: 120 ,
        genre: "Romance"
      },
      {
        title: "West Side Story",
        director: "Robert Wise, Jerome Robbins",
        releaseDate: "12/23/1961",
        rating: "Not Rated",
        runTime:155 ,
        genre: "Drama, Musical"
      },
      {
        title: "Who's Afraid Of Virginia Woolf?",
        director: "Mike Nichols",
        releaseDate: "6/22/1966",
        rating: "Not Rated",
        runTime: 131 ,
        genre: "Drama"
      },
      {
        title: "Yankee Doodle Dandy",
        director: "Michael Curtiz",
        releaseDate: "1/2/1943",
        rating: "Passed",
        runTime: 126 ,
        genre: "Biography"
      }
    
    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('movies', null, {})
  }
};