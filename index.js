"use strict";
const body = document.querySelector("body");
body.style.fontSize = "2rem";
body.style.marginLeft = "5rem";
const form = document.querySelector("form");

const title = document.getElementById("para");

const useName = document.getElementById("useName");
useName.style.width = "25rem";
useName.style.height = "3rem";
useName.style.fontSize = "1.5rem";

const today = new Date();
const dayArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const weekday = dayArr[today.getDay()];
const goBtn = document.getElementById("submitBtn");
goBtn.style.width = "5rem";
goBtn.style.height = "3rem";
goBtn.style.fontSize = "1.3rem";
goBtn.style.borderRadius = "5px";
goBtn.style.marginLeft = "20px";

const daysLeft = function () {
  const dayOfWeek = 5 - today.getDay();
  console.log(dayOfWeek);
  if (dayOfWeek > 1 && dayOfWeek < 5) {
    return `Only ${dayOfWeek} days left until weekend.`;
  } else if (dayOfWeek === 1) {
    return `Only ${dayOfWeek} day left until weekend.`;
  } else {
    return `It's the weekend 🎉  `;
  }
};

goBtn.addEventListener("click", function (e) {
  e.preventDefault();
  title.textContent = `Hello ${
    useName.value
  }. Today is ${weekday}. ${daysLeft()} `;
});
