// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
url : "https://api.wunderground.com/weather/api/d/9dcea6730ca4d03e/geolookup/conditions/astronomy/q/" + lat + "," + long + ".jsonp",       
  dataType : "jsonp",
  success : function(parsed_json) {
console.log(parsed_json);
  var location = parsed_json['location']['city'];
  var state = parsed_json['location']['state'];
  $("#cityDisplay").text(location + "," + state);
      

var temp_f = Math.round(parseInt(parsed_json['current_observation']['temp_f']));
            
    var state = parsed_json['location']['state'];
                var summar = parsed_json["current_observation"]["weather"];
                var sRH = parsed_json["moon_phase"]["sunrise"]["hour"];
                var sRM = parsed_json["moon_phase"]["sunrise"]["minute"];
                var sSH = parsed_json["moon_phase"]["sunset"]["hour"];
                var sSM = parsed_json["moon_phase"]["sunset"]["minute"];
                var moon = parsed_json["moon_phase"]["percenthumidity"];


                $("#cityDisplay").text(location + ", " + state);
                $("#summary").text(summar);
                $("#currentTemp").text(temp_f + "°");
                $("#add1").text("Sunrise: " + sRH + ":" + sRM);
                
      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
