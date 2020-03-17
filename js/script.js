// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
function random() {
    var userInput = $("#search-term").val();
    var request_url = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=pg&api_key=DZv24irnixTUp5tlcJ8hv8eiQHdYBdmM";
    var random = Math.random()*25;
    var randomizer = Math.floor(random);
    fetch(request_url)
        .then(function(response) {
        return response.json();
        })
        .then(function(data) {
        var pic_url = data.data[randomizer].images.original.url;
        console.log(random);
            $('.gallery').html("<div class='text-center'><img src=" + pic_url + "></div>");
            $('#msg').hide();       
    })
}

function all() {
    
}

function retrieve(type) {
    if (type === "random") {
        random();
    } else if(type === "all") {
        //all();
    }
}

$("#search-button").click(function(){
    retrieve("random");
});

