$(document).ready(function(){
    $.getJSON("/saved", function (data) {
        // For each one
        for (var i = 0; i < data.length; i++) {
            console.log(data[i])
          // Display the apropos information on the page
          $("#savedarticles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
        }
      });
})