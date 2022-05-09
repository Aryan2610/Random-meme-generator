"use strict";

const memes = document.querySelector(".meme");

const meme = async function () {
  const res = await fetch("https://meme-api.herokuapp.com/gimme");
  const data = await res.json();
  memes.style.background = `url(${data.url})`;
  memes.style.backgroundSize = "contain";
  memes.style.padding = "20rem";
  memes.style.backgroundPosition = "center";
  memes.style.backgroundRepeat = "no-repeat";
};
