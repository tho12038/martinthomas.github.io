$(function(){
    console.log("run");
    $.getJSON( "../scripts/links.json", function( data ) {
  var items = [];
        console.log("anything");
 $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "div.links" );
});
});