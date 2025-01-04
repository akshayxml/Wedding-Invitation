(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

$(document).ready(function() {
    document.getElementById("my_audio").play();
});

const targetDate = new Date("2025-02-23T11:30:00+05:30"); // Target time in IST

  function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;
    let timer;

    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
      return;
    }
    else{
        document.querySelector(".countdown-container").style.display = "flex";
        document.getElementById("time").style.display = "none";
    }

    const totalDays = 100; // Assume the countdown starts with 100 days
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((timeLeft / 1000) % 60);

    updateCircle("days-progress", daysLeft / totalDays);
    updateCircle("hours-progress", hoursLeft / 24);
    updateCircle("minutes-progress", minutesLeft / 60);
    updateCircle("seconds-progress", secondsLeft / 60);

    document.querySelector("#days-text").innerText = `${daysLeft}d`;
    document.querySelector("#hours-text").innerText = `${hoursLeft}h`;
    document.querySelector("#minutes-text").innerText = `${minutesLeft}m`;
    document.querySelector("#seconds-text").innerText = `${secondsLeft}s`;
  }

  function updateCircle(id, progress) {
    const circle = document.getElementById(id);
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - progress);

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
  }

timer = setInterval(updateCountdown, 1000);
  updateCountdown();