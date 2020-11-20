const date = new Date();
const currentYear = date.getFullYear();
const birthYear = prompt('Введите год рождения');
const userAge = currentYear - birthYear;

if (isNaN(userAge) === true) {
  alert('Ты что, не знаешь цифр?');
} else if(userAge > 17) {
  alert('Доступ разрешен.');
} else if (userAge < 12) {
  alert('Ты, мальчик, что здесь делаешь? А ну бегом к маме!');
} else {
  alert('Доступ запрещен. Подрасти еще немного.');
}

let answer = isNaN(userAge) === true ? 'Ты что, не знаешь цифр?' : userAge > 17 ? 'Доступ разрешен.' : userAge < 12 ? 'Ты, мальчик, что здесь делаешь? А ну бегом к маме!' : 'Доступ запрещен. Подрасти еще немного.'

alert(answer);