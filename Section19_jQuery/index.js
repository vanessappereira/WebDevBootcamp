// Change the attribute of an anchor
$("a").attr("href", "https://www.google.pt");

// Change color by clicking a button
$("button").click(function () {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5});
})

// Confirm if it is working when insert a letter in the input
$("input").keydown(function (event) {
    console.log(event.key);
})

// Show the key pressed in H1
$(document).keydown(function (e) {
    $("h1").text(e.key);
})

// Another way to change mdn WebDocs
$(document).on("mouseover", function () {
    $("h1").css("color", "purple");
})