let date = new Date();
let currentYear = date.getFullYear();
let birthYear = prompt('Введите год рождения');
const userAge = currentYear - birthYear;

if (isNaN(userAge) === true) {
  alert('Ты что, не знаешь цифр?');
} else if(userAge > 17) {
  alert('Доступ разрешен.')
} else if (userAge < 12) {
  alert('Ты, мальчик, что здесь делаешь? А ну бегом к маме!');
} else {
  alert('Доступ запрещен. Подрасти еще немного.');
}