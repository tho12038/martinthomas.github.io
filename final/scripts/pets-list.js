$.getJSON( "../scripts/available-pets.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<img class='json_images' alt='" + key + "'src='" + val + "'/>" );
  });
 
  $( "<div/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "div.banner-section" );
});