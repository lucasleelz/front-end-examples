var DEFAULT_IMAGE_SELECTOR = '[data-image-role="target"]';
var DEFAULT_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var THUMBNAIL_URL = 'data-image-url';
var THUMBNAIL_TITLE = 'data-image-title';

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DEFAULT_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DEFAULT_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute(THUMBNAIL_URL);
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute(THUMBNAIL_TITLE);
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumbnail) {
  'use strict';
  thumbnail.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumbnail);
  })
}

function getThumbnails() {
  'use strict';
  var thumbnials = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  return [].slice.call(thumbnials);
}

function initializeEvents() {
  'use strict';
  var thumbnials = getThumbnails();
  thumbnials.forEach(addThumbClickHandler);
}

initializeEvents();
