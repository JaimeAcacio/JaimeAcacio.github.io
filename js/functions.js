//esta funcao atraves do getelemetbyId pega o valor que estiver em visor e torna nada com ''.
function limpar(){
	document.getElementById('visor').value = '';	
}

//esta funcao concatena o valor q esta na tela com o valor digitado atraves do sinal "+=".
function preencher(valor){
	document.getElementById('visor').value += valor
}

function calcular(){
	if (document.getElementById('visor').value =='') {
		alert("o campo esta vazio!!");
		document.getElementById('visor').value = '';

	}
	else{
	//crio variavel resultado e atribuo ao que for digitado no visor.
	var resultado = 0;
	resultado = document.getElementById('visor').value;

		document.getElementById('visor').value = '';
		//uso o elemento "eval" que faz operacoes com strings passadas.
		document.getElementById('visor').value = eval(resultado);
		}
}
