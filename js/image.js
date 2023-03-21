import {fotosMass} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const socialPicture = socialComments.querySelector('.social__picture');
const socialText = socialComments.querySelector('.social__text');
const socialcommentTwo = socialComments.querySelector('.social__comment:nth-child(2)');
bigPicture.classList.remove('hidden');

bigPictureImg.src = fotosMass[0].url.avatar;
likesCount.textContent = fotosMass[0].likes;
commentsCount.textContent = fotosMass[0].comments.length;


socialPicture.src = fotosMass[0].comments[0].avatar;
socialText.textContent = fotosMass[0].comments[0].message;
socialComments.removeChild(socialcommentTwo);
