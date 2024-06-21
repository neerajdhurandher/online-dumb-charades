

let names = [
    "Aayush Mantry",
    "Anurag Kumar Tripathi",
    "Deepak Yadav",
    "Kajal Gupta",
    "Koutilya Kumar",
    "Neeraj Dhurandher",
    "Nishant Jain",
    "Piyush Agarwal",
    "Rageshwari Behera",
    "Rohit Kumar",
    "Sakshi Mateer",
    "Srishti Bhandarkar",
    "Suhas M",
    "U B Madan",
    "Vidyashree E"
];

let movies = [
    "Dilwale Dulhania Le Jayenge",
    "Sholay",
    "3 Idiots",
    "Gully Boy",
    "Kabir Singh",
    "Baahubali",
    "Lagaan",
    "Padmaavat",
    "Queen",
    "Andhadhun",
    "Dangal",
    "Kabhi Khushi Kabhie Gham",
    "Zindagi Na Milegi Dobara",
    "Gangs of Wasseypur",
    "Article 15",
    "Stree",
    "Uri: The Surgical Strike",
    "Sacred Games",
    "Mirzapur",
    "Delhi Crime",
    "The Family Man",
    "Paatal Lok",
    "Scam 1992: The Harshad Mehta Story",
    "Made in Heaven",
    "Tandav",
    "A Suitable Boy",
    "Aspirants",
    "Special OPS",
    "Breathe",
    "Bandish Bandits",
    "Criminal Justice",
    "She",
    "Panchayat",
    "Hostel Daze",
    "Hush Hush",
    "Chak De! India",
    "Titanic"
];

let current_user = "";
const random_movie_count = 2;

document.addEventListener("DOMContentLoaded", function () {
    populateNameSelect();
});

function populateNameSelect() {
    const nameSelect = document.getElementById("nameSelect");
    names.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.text = name;
        nameSelect.appendChild(option);
    });
}

function handleNameSelect() {
    const nameSelect = document.getElementById("nameSelect");
    current_user = nameSelect.value;
    const movieSelectGroup = document.getElementById("selectMovieGroup");
    if (movieSelectGroup.style.display === "none") {
        movieSelectGroup.style.display = "block";
    }

    if (current_user == "Neeraj Dhurandher") {
        document.querySelector(".add-user-class").style.display = "block"
        document.querySelector(".add-movie-class").style.display = "block"
    }

    populateMovieSelect();
}

function getRandomMovies(movies) {
    if (movies.length < random_movie_count) {
        throw new Error("Not enough movies to select two random ones");
    }

    // Create a copy of the movies array to avoid modifying the original array
    const moviesCopy = [...movies];
    let random_movies_list = []
    for (let i = 0; i < random_movie_count; i++) {
        const randomIndex = Math.floor(Math.random() * moviesCopy.length);
        const randomMovie = moviesCopy.splice(randomIndex, 1)[0];
        random_movies_list.push(randomMovie)
    }


    return random_movies_list
}

function remove_used_movie(movie_name) {
    const index = movies.indexOf(movie_name);
    if (index > -1) {
        movies.splice(index, 1);
        show_add_movie_option();
    }
}

function populateMovieSelect() {
    const movieSelect = document.getElementById("movieSelect");
    movieSelect.innerHTML = "<option hidden>Select a movie</option>";
    let movie_list = getRandomMovies(movies)
    movie_list.forEach(movie => {
        const option = document.createElement("option");
        option.value = movie;
        option.text = movie;
        movieSelect.appendChild(option);
    });

    handleMovieSelect();
}


function handleMovieSelect() {
    const movieSelect = document.getElementById("movieSelect");
    let user_selected_movie = movieSelect.value;
    console.log("selected movie name " + user_selected_movie);

    if (user_selected_movie != "Select a movie") {
        document.getElementById("movie_select_button").style.display = "block"
        document.getElementById("movie_reset_button").style.display = "block"
    }else{
        document.getElementById("movie_select_button").style.display = "none"
        document.getElementById("movie_reset_button").style.display = "none"
    }



    document.getElementById("movie_select_button").addEventListener("click", () => {
        remove_used_movie(user_selected_movie);
    })

    document.getElementById("movie_reset_button").addEventListener("click", () => {
        populateMovieSelect()
    })

}

function show_add_movie_option() {
    document.querySelector(".add-movie-class").style.display = "block"
}

function addUserName() {
    const userNameInput = document.getElementById("addUserName");
    const userName = userNameInput.value.trim();
    if (userName) {
        names.push(userName);
        populateNameSelect();
        userNameInput.value = '';
    }
}

function addMovieName() {
    const movieInput = document.getElementById("addMovieName");
    const movieName = movieInput.value.trim();
    if (movieName) {
        movies.push(movieName);
        populateMovieSelect();
        movieInput.value = '';
    }
}