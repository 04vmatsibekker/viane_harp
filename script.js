const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const videoSelectButtons = document.querySelectorAll('.video-card button');
const featuredVideo = document.querySelector('#featuredVideo');
const featuredTitle = document.querySelector('#featuredTitle');
const featuredDescription = document.querySelector('#featuredDescription');

const harpVideos = [
  {
    title: 'Canon in D (Arrangement)',
    src: 'harp_videos/canonind.mp4',
    description: 'A timeless Canon arranged for solo harp — warm, lyrical, and perfect for ceremonies.'
  },
  {
    title: 'Sunlit Ceremony Performance',
    src: 'harp_videos/performance1.mov',
    description: 'A graceful piece arranged for wedding ceremonies, captured with soft lighting and serene motion.'
  },
  {
    title: 'Evening Reception Melody',
    src: 'harp_videos/performance2.mov',
    description: 'Smooth harp arrangements for cocktail hours and intimate gatherings.'
  },
  {
    title: 'Classical Harp Showcase',
    src: 'harp_videos/performance3.mov',
    description: 'An elegant studio performance highlighting refined technique and lush harmony.'
  }
];

function toggleMenu() {
  navLinks.classList.toggle('open');
}

function updateFeaturedVideo(index) {
  const item = harpVideos[index];
  if (!item) return;

  featuredVideo.src = item.src;
  featuredVideo.poster = '';
  featuredTitle.textContent = item.title;
  featuredDescription.textContent = item.description;

  document.querySelectorAll('.video-card').forEach((card, cardIndex) => {
    card.classList.toggle('active', cardIndex === index);
  });
}

function initVideoSelection() {
  videoSelectButtons.forEach((button, index) => {
    button.addEventListener('click', () => updateFeaturedVideo(index));
  });
}

function createVideoCards() {
  const cardsContainer = document.querySelector('.video-select');
  cardsContainer.innerHTML = '';

  harpVideos.forEach((video, index) => {
    const card = document.createElement('article');
    card.className = 'video-card';
    card.innerHTML = `
      <button type="button">
        <strong>${video.title}</strong>
        <span>${video.description}</span>
      </button>
    `;
    card.querySelector('button').addEventListener('click', () => updateFeaturedVideo(index));
    cardsContainer.appendChild(card);
  });
}

function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      if (link.hash === '') return;
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
      }
    });
  });
}

function init() {
  navToggle.addEventListener('click', toggleMenu);
  createVideoCards();
  initSmoothScrollLinks();
  updateFeaturedVideo(0);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
