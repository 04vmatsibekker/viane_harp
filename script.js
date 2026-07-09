const videoOptions = [
  {
    title: "Canon in D – Live Performance",
    description:
      "One of the most recognizable pieces of classical music, Canon in D by Johann Pachelbel is celebrated for its elegant, flowing melody and timeless beauty.",
    src: "harp_videos/CanoninD_harp.mov",
  },
  {
    title: "Maggot Brain - BSA",
    description:
      "A solo harp performance of Maggot Brain, presented for the RPI Black Student Association Fashion Show. This iconic piece is known for its expressive, guitar-driven melody.",
    src: "harp_videos/BSA - maggot brain.mov",
  },
  {
    title: "Fleurs – Original Composition",
    description:
      "An original harp composition inspired by the quiet return of spring. Fleurs is a reflective and somber work that captures the resilience of nature as it begins to bloom again.",
    src: "harp_videos/fleurs.mov",
  },
  {
    title: "Gitana – Arizona Performance",
    description:
      "A live harp performance recorded in Arizona. Gitana is a vibrant Spanish-inspired work that combines energetic rhythms, sweeping arpeggios, and lyrical passages.",
    src: "harp_videos/GITANA.mov",
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
