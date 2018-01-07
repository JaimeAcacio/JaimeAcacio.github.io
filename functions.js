(function(){
var div = document.getElementById('log');
var texto1 = 'Web Developer';
var texto2 = 'Jaime Barbosa Acacio Neto'
function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 100);
}

escrever(texto1,texto2, div);
}());
// Debounce do Lodash serve pra segurar a function de animacao do conteudo para que nao seja ativada tantas vezes.
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//aqui comeca codigo de animação do conteudo
(function(){
var $target = $('.anime'),
	animationClass = 'anime-start',
	offset=$(window).height()*3/4;

function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}
/*esta parte abaixo apenas e nescessario se tive algum 
objeto que assim que a tela carregar ja prescise ser mostrado*/
/*animeScroll();*/

$(document).scroll(debounce(function(){
	animeScroll();
},110));
}());
