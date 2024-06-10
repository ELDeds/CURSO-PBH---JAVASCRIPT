/*
Código para escrever criar uma váriavel é let
LEMBRE-SE TODO CÓDIGO PRECISA TERMINAR com ;
*/
let nomeAlunoCurso = "Andre Teixeira"

/*
Código para criar uma string, o sinal ""
*/
let stringCriada = "Escrevendo algo"
/*
Código para criar um array, o sinal []
*/
let carros = ["uno","gol","fiat"];
/*
Forma de escrever direcionando numeração
*/
let carros1 = [];
carros[0]= "uno";
carros[1]= "gol";
carros[2]= "fiat";
/*
Javascript não depende da necessidade de definir qual tipo de váriavel é aquela (int, float, double)
A forma de escrever numeros é a seguinte:
*/
let numeroInteiro = "32";
let numeroDecial = "32.3";
/*
Forma de escrever Boolean no JS
*/
let testandoboole = Boolean(18 > 6);
/*
Para imprimir na tela use console.log
*/
console.log(testandoboole);
/*
PARA TRABALHAR COM BANCO DE DADOS NO JS (SEM O HTML) É PRECISO DE INSTALAR O PACOTE READLINE-SYNC
UTILIZE SEMPRE O CODIGO NO TERMINAL "NPM INSTALL READLINE-SYNC"
TODO INICIO DE CÓDIGO DEVERÁ INICIAR COM let readlineSync = require("readline-sync");
*/
/*
Os operadores aritméticos em Javascript são:





Operador	Descrição
+	Adição
-	Subtração
*	Multiplicação
**	Exponenciação
/	Divisão
%	Módulo (Resto de uma divisão)
++	Incremento
--	Decremento
*/
let calculo = 3 * 3
calculo--
/* Existem algumas formas de atribuir valores a uma variável em Javascript. A mais comum seria o sinal de = .

Por exemplo a variável x = 10; 

A variável x está recebendo o valor 10;

Existem algumas outras formas de atribuir valores a variáveis em Javascript.

Operador	Exemplo	Outra forma de escrever
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
*/
calculo +=10
console.log(calculo)
/*
Os operadores de comparação são muito úteis quando precisamos comparar números ou strings.


Operador	Nome	Exemplo	Resultado
==	Igual	a == b	Compara se o valor da variável a é igual ao valor da variável b
===	Idêntico	a === b	Compara se o valor e o tipo da variável a são iguais ao valor e o tipo da variável b
!=	Diferente	a != b	Retorna verdadeiro se o valor da variável a é diferente de b
!==	Não Idêntico	a !== b	Compara se o valor e o tipo da variável a são diferentes do valor e o tipo da variável b
>	Maior que	a > b	Verifica se a é maior que b
<	Menor que	a < b	Verifica se a é menor que b
>=	Maior ou igual 	a >= b	Verifica se a é maior ou igual a b
<=	Menor ou igual	a <= b	Verifica se a é menor ou igual a b
*/
let a = 2
if (a ==1) { 
console.log("Ligado")
}else console.log("Desligado")

/*

Operador	Nome	Exemplo	Resultado
&&	e	a && b	Verdadeiro se a e b são verdadeiros
||	ou	a || b	Verdadeiro se a ou b são verdadeiros
!	Negação	!a	Verdadeiro se a não é verdadeiro
*/
let num = 1; 
let num2 = 1;
if (num == 1 && num2 == 1) console.log("São identicos");
else console.log("Diferentes");