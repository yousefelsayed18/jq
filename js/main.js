/// <reference types="../@types/jquery"/>

// Open Sidebar
$(".sidebar-btn").on("click", function () {
  $(".side-bar")
    .animate({ width: "250px", paddingLeft: "20px" }, 500)
    .css("cssText", "display: block !important");
  $(".sidebar-btn").animate({ left: "250px" }, 500);
  $(".home-caption-heading").animate({ marginLeft: "250px" }, 500);
});

// Close Sidebar
$(".close-btn").on("click", function () {
  $(".side-bar").animate(
    { width: "0px", paddingLeft: "0px" },
    500,
    function () {
      $(this).css("display", "none");
    }
  );

  $(".sidebar-btn").animate({ left: "0" }, 500);
  $(".home-caption-heading").animate({ marginLeft: "0" }, 500);
});

// Open And Close Slider
$("h3.toggle").on("click", function () {
  $(this).next().slideToggle(500);
});

// Count
$(window).on("load", function () {
  timeCount("06 july 2024 3:30:00");
});

// Time Counter
function timeCount(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  let timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  // To Live Counter
  setInterval(() => {
    timeCount(countTo);
  }, 1000);
}

// Sidebar Scroll
$(".side-bar a:not(.close-btn)").on("click", function () {
  let sectionId = $(this).attr("href");
  let sectionPosition = $(sectionId).offset().top;

  $(window).animate({ scrollTop: sectionPosition }, 2000);
});

// Textarea Char Counter
$("textarea").on("keyup", function () {
  let charLength = this.value.length;
  let avilableLength = 100 - charLength;

  $(".char-counter").html(avilableLength);

  if (avilableLength <= 0) {
    $(".char-counter").html("your available character finished");
  }
});
