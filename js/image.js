import {fotosMass} from './util.js';

const button = document.querySelector('.big-picture__cancel');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const socialPicture = socialComments.querySelector('.social__picture');
const socialText = socialComments.querySelector('.social__text');
const socialcommentTwo = socialComments.querySelector('.social__comment:nth-child(2)');
const socialCommentsLi = document.createElement('li');
const pictures = document.querySelector('.pictures');
const socialCommentsLoader = document.querySelector('.social__comments-loader');

pictures.addEventListener('click', () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

button.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if(evt.keyCode === 27){
    bigPicture.classList.add('hidden');
  }
});

bigPictureImg.src = fotosMass[0].url.avatar;
likesCount.textContent = fotosMass[0].likes;
commentsCount.textContent = fotosMass[0].comments.length;


socialPicture.src = fotosMass[0].comments[0].avatar;
socialText.textContent = fotosMass[0].comments[0].message;
socialComments.removeChild(socialcommentTwo);

for(let i = 0; i <= 4; i++){
  socialPicture.src = fotosMass[0].comments[i].avatar;
  socialText.textContent = fotosMass[0].comments[i].message;
}

socialComments.appendChild(socialCommentsLi);
const socialCommentLi = socialComments.querySelector('li');
let newLi = socialCommentLi.cloneNode(true);

for(let i = 0; i <= 4; i++){
  newLi = socialCommentLi.cloneNode(true);
  newLi.querySelector('.social__text').textContent = i;
  socialComments.appendChild(newLi);
}


socialCommentsLoader.addEventListener('click', () => {
  for(let i = 0; i <= 4 ; i++){
    newLi = socialCommentLi.cloneNode(true);
    newLi.querySelector('.social__text').textContent = i;
    socialComments.appendChild(newLi);
  }
});
