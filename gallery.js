function load() {
  var carousel = $(".owl-carousel");
  carousel.trigger('destroy.owl.carousel');
  carousel.find('.owl-stage-outer').children().unwrap();
  carousel.removeClass("owl-center owl-loaded owl-text-select-on");

  let content = '';
  for (var i = 0; i < 10; i++) {
    content += `<div><img src='${getRandomImage()}'></div>`
  }
  carousel.html(content);
  carousel.owlCarousel();
}

function getRandomImage() {
  const random = Math.floor(Math.random() * 4);
  return `image${random}.png`;
}