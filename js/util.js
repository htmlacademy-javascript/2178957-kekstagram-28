const COMMENT_LISTS = [ 'Всё отлично!','В целом всё неплохо', 'Но не всё',
  'Когда вы делаете фотографию', 'хорошо бы убирать палец из кадра', 'В конце концов это просто непрофессионально',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!)',];
const DESCRIPTIONS = ['отдых', 'Море', 'чил','travel','Красота',];
const NAMES = ['Сергей', 'Людмила', 'Ирина', 'Светлана',];
const NUMBERS_PHOTO = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];


const randomPhotos = Math.floor(Math.random() * (25 - 1));
const randomName = Math.floor(Math.random() * (4 - 1));


function commentFotos () {
  const randomComments = Math.floor(Math.random() * (9 - 1));
  const randomNames = Math.floor(Math.random() * (4 - 1));
  return {
    id: 2,
    avatar: `img/avatar-1${NUMBERS_PHOTO}.svg`,
    message: COMMENT_LISTS[randomComments],
    name:  NAMES[randomNames],
  };
}
const functionComments = commentFotos();

function fotosAvatars (){
  return {
    avatar: `img/avatar-1${NUMBERS_PHOTO[randomPhotos]}.svg`,
  };
}
const fotoss = fotosAvatars ();


function functionInfoPhotos (item) {
  const randomNumber = Math.floor(Math.random() * (5 - 1));
  const date = {
    id: item,
    url: fotoss,
    description:  DESCRIPTIONS[randomNumber],
    likes: Math.floor(Math.random() * (200 - 15)),
    name:  NAMES[randomName],
    comments: [functionComments],
  };
  return date;
}
functionInfoPhotos();

function fotosFunctions () {
  const fotos = [];
  NUMBERS_PHOTO.forEach((item) => {
    if(item > 1){
      fotos.push(functionInfoPhotos(item));
    }
  });
  return fotos;
}
export{fotosFunctions};
