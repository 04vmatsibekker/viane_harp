const videoOptions = [
  {
    title: "Canon in D – Live Performance",
    description:
      "A graceful performance that highlights the harp's romantic tone for ceremonies and celebrations.",
    src: "harp_videos/canonind.mp4",
  },
  {
    title: "Wedding Prelude Highlights",
    description:
      "An elegant selection designed for cocktail hour, processionals, and intimate guest moments.",
    src: "harp_videos/canonind.mp4",
  },
];

const video = document.getElementById("performance-video");
const titleEl = document.getElementById("video-title");
const descriptionEl = document.getElementById("video-description");
const buttons = document.querySelectorAll(".video-list__item");

function switchVideo(index) {
  const option = videoOptions[index];
  video.setAttribute("src", option.src);
  video.load();
  titleEl.textContent = option.title;
  descriptionEl.textContent = option.description;

  buttons.forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switchVideo(Number(button.dataset.video));
  });
});

switchVideo(0);
