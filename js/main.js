//mobile nav
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
  mobileNavIcon.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});
//video
const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoFile = document.querySelector('#video-story');
const videoFileOverlay = document.querySelector('#video-story-overlay');

videoFile.addEventListener('ended', function () {
  videoBtnIcon.src = './img/story/play-white.svg';
});

videoBtn.addEventListener('click', function () {
  function toggleOverlay(event) {
    if (event.type === 'mouseleave') {
      videoFileOverlay.classList.add('hidden');
    } else {
      videoFileOverlay.classList.remove('hidden');
    }
  }

  if (videoFile.paused) {
    videoFile.play();
    videoBtnIcon.src = './img/story/pause-white.svg';
    videoFileOverlay.onmouseleave = toggleOverlay;
    videoFileOverlay.onmouseenter = toggleOverlay;
  } else {
    videoFile.pause();
    videoBtnIcon.src = './img/story/play-white.svg';
    videoFileOverlay.onmouseleave = null;
    videoFileOverlay.onmouseenter = null;
  }
});
