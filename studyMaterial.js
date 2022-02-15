const sliderVideo = tns({
  container: ".watchAndListenVideos",
  items: 1,
  // autoplay: true,
  controls: false,
  nav: false,
  edgePadding: 40,
  center: true,
  lazyload: true,
  gutter: 10,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 1,
    },
    700: {
      edgePadding: 40,
      gutter: 30,
    },
    900: {
      edgePadding: 40,
      items: 3,
    },
  },
});

document.querySelector(".prev").addEventListener("click", function () {
  sliderVideo.goTo("prev");
});

document.querySelector(".next").addEventListener("click", function () {
  sliderVideo.goTo("next");
});
