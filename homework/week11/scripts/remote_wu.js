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
url : "https://api.wunderground.com/api/9dcea6730ca4d03e/geolookup/conditions/q/" + lat + "," + long + ".jsonp",       
  dataType : "jsonp",
  success : function(parsed_json) {
  console.log(parsed_json);
  var city = parsed_json['location']['city'];
  var state = parsed_json['location']['state'];
  var temp_f = Math.round(parseInt(parsed_json['current_observation']['temp_f']));
  var state = parsed_json['location']['state'];
  var summary = parsed_json["current_observation"]["weather"];
  var humidity = parsed_json['current_observation']['relative_humidity'];
  var wind = parsed_json['current_observation']['wind_mph'];
  var feels = parsed_json['current_observation']['feelslike_f'];
  
  $("#cityDisplay").text(city + ", " + state);
  $("#summary").text(summary);
  $("#currentTemp").text(temp_f + "°");
  $("#add1").text("Humidity:" + " " + humidity);
  $("#add2").text("Current Wind Spped is: " + wind + " " "MPH");
  $("#add3").text("Feels Like: " + feels + "°");
               
                
      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
