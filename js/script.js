// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
let value = 0
function random() {
    var userInput = $("#search-term").val();
    var request_url = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=pg&api_key=DZv24irnixTUp5tlcJ8hv8eiQHdYBdmM";
    var random = Math.random()*25;
    var randomizer = Math.floor(random);
    fetch(request_url)
        .then(function(response) {
        return response.json();
        })
        .then(function(apiData) {
        var pic_url = apiData.data[randomizer].images.original.url;
        console.log(random);
            $('.gallery').html("<div class='text-center'><img src=" + pic_url + "></div>");
            $('#msg').hide();       
    })
}

function all() {
    var userInput = $("#search-term").val();
    var request_url = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=pg&api_key=DZv24irnixTUp5tlcJ8hv8eiQHdYBdmM";
    fetch(request_url)
        .then(function(response) {
        return response.json();
        })
        .then(function(apiData) {
        var arrayLength = apiData.data.length;
        console.log(arrayLength);
            $('.gallery').html("<div class='text-center'><img src=" + pic_url + "></div>");
            $('#msg').hide();       
    })
}

function retrieve(type) {
    if (type === "random") {
        random();
    } else if(type === "all") {
        all();
    }
}

$("#all").click(function(){
    value = 1;
    console.log(value);
})

$("#random").click(function(){
    value = 0;
    console.log(value);
})

$("#search-button").click(function(){
    if (value === 0){
        retrieve("random");
    } else if (value === 1){
        retrieve("all");
    }
});

