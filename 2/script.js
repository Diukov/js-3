const userAge = Number(prompt('Сколько Вам лет?'));
const jsKnowledge = prompt('Знаете ли вы Javascript?');
const htmlCssKnowledge = prompt('Знаете ли вы HTML и CSS?');
const userExperiense = Number(prompt('Сколько лет составляет Ваш коммерческий опыт работы?'));

if (userAge > 24 || jsKnowledge == 'да' || htmlCssKnowledge == 'да' || userExperiense > 0.5) {
  alert('Поздравляем, вы приняты!');
} else {
  alert('Извините, но Вы нам не подходите.')
}