
$(function (){
var task = $('#task').html();

var data = [
	{
		title: 'Журавлева Татьяна Анатольевна',
		},
	{
		title: 'Студент курса GoForIT, банкир, экономист',
		content: []
	},
	{
		title: 'Хочу учить фронденд потому что',
		content: ['Интересная и перспективная работа','Стабильно развивающий рынок труд','Удобный график работы','Хочу работать в IT']
	},
  {
		title: 'Мои контакты:',
		content: ['тел.:+380965105932', 'Моя страница в FB:<a href="https://facebook.com/dogta">Facebook.com</a>']
	},
];

var doc = tmpl(task, {data: data});
$('body').append(doc);

})
