$(document).ready(function() {
    var apikey = 'e5020a88fc270ec0941ae607908cbc53';

     
    // var city = $('#city').toString();
    // var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    // alert("set up")

    // $.get(url, function(data){
    //     console.log(data)
    //     $('#data').html(`Current temp for ${city}: ${data.main.temp}`)
    // })

    $('form').submit(function() {
        $('.block').hide()
        
        

        
        var zip = $('#zipcode').val();
        var zipstring = `${zip}`;
        var url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipstring},us&appid=${apikey}&units=imperial`;
        //var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=imperial`;
        if(zip == ""){
            $('.container-fluid').css({"background-image": "url('tornado.gif')","background-repeat":"no-repeat", "background-size":"cover" })
            $('.box').append(
                `<div class="card-transparent text-light text-center" style="opacity: 80%">
                        <h3 class="text-danger font-weight-bold">ERROR: You must enter a zipcode!</h3><br/>
                        <div class="text-center p-2">
                            <a href=""><button class="btn btn-danger">Go back</button><a/>
                        </div>
                    
                </div>
                `
            )
        }

        $.get(url, function(res) {
            if(res.weather[0].description == "few clouds"){
                $('.container-fluid').css({"background-image": "url('https://j.gifs.com/vQJxxY.gif')","background-repeat":"no-repeat", "background-size":"cover" })
            }
            if(res.weather[0].description == "scattered clouds"){
                $('.container-fluid').css({"background-image": "url('https://i.gifer.com/1F1I.gif')","background-repeat":"no-repeat", "background-size":"cover" })
            }
            if(res.weather[0].description == "broken clouds"){
                $('.container-fluid').css({"background-image": "url('https://media.giphy.com/media/lOkbL3MJnEtHi/giphy.gif')","background-repeat":"no-repeat", "background-size":"cover" })
            }
            if(res.weather[0].description == "overcast clouds"){
                $('.container-fluid').css({"background-image": "url('https://i.gifer.com/7RtV.gif')","background-repeat":"no-repeat", "background-size":"cover" })
            }
            if(res.weather[0].description == "clear sky"){
                $('.container-fluid').css({"background-image": "url('https://i.gifer.com/XFbw.gif')","background-repeat":"no-repeat", "background-size":"cover" })
            }
            if(res.weather[0].main == "Rain"){
                $('.container-fluid').css({"background-image": "url('https://media.giphy.com/media/Mgq7EMQUrhcvC/giphy.gif')","background-repeat":"no-repeat", "background-size":"cover" })
            }
            if(res.weather[0].main == "Thunderstorm"){
                $('.container-fluid').css({"background-image": "url('thunderstorm.gif')","background-repeat":"no-repeat", "background-size":"cover" })
            }
            if(res.weather[0].main == "Drizzle"){
                $('.container-fluid').css({"background-image": "url('heavyrain.gif')","background-repeat":"no-repeat", "background-size":"cover" })
            }
            if(res.weather[0].main == "Mist" || res.weather[0].main == "Fog"){
                $('.container-fluid').css({"background-image": "url('https://media.giphy.com/media/IuKnqFMhtcA2A/giphy.gif')","background-repeat":"no-repeat", "background-size":"cover" })

            }
            if(res.weather[0].main == "Snow"){
                $('.container-fluid').css({"background-image": "url('snow.gif')","background-repeat":"no-repeat", "background-size":"cover" })

            }
            if(res.weather[0].main == "Tornado"){
                $('.container-fluid').css({"background-image": "url('tornado.gif')","background-repeat":"no-repeat", "background-size":"cover" })

            }
            if(res.weather[0].main == "Ash"){
                $('.container-fluid').css({"background-image": "url('volcano.gif')","background-repeat":"no-repeat", "background-size":"cover" })

            }
            if(res.weather[0].main == "Sand"|| res.weather[0].main == "Dust"){
                $('.container-fluid').css({"background-image": "url(‘https://media.giphy.com/media/EaVouuqujYqiI/giphy.gif')","background-repeat":"no-repeat", "background-size":"cover" })
            }

            //var statecaps = state.charAt(0).toUpperCase() +state.slice(1)
            //var citycaps = city.charAt(0).toUpperCase() +city.slice(1)


            console.log(res)
            console.log("helloooooooo")
            console.log(res.name);

                $('#data').append(
                    `
                    <div class="card">
                        <div class="card-body">
                            <div class="text-center">
                                <h2 class="card-title">${res.name}</h2>
                    
                                <img src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" alt="icon" class="icon">
                    
                                <h5>${res.weather[0].description}</h5>
                            </div>
                            <h5>Temperature: ${res.main.temp} ℉ </h5>
                            <h5>High: ${res.main.temp_max} ℉ </h5>
                            <h5>Low: ${res.main.temp_min} ℉ </h5>
                            <h5>Feels like: ${res.main.feels_like} ℉</h5>
                            <h5>Humidity: ${res.main.humidity} </h5>
                            <h5>Wind: ${res.wind.speed} mph</h5>
                            <div class="text-center p-2">
                                <a href=""><button class="btn btn-primary">Go back</button><a/>
                            </div>
                        </div>
                    </div>
                    `
                )
        }, 'json');
    // // //     // don't forget to return false so the page doesn't refresh
        return false;
    });


})
//e5020a88fc270ec0941ae607908cbc53 key
//http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&APPID=e5020a88fc270ec0941ae607908cbc53