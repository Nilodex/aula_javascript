
function clicou()
{
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>");
    //alert("Obrigado por clicar");
}

function redirecionar()
{
    window.open("https://www.google.com");
    window.location.href = "https://www.google.com";
}

function trocar(elemento)
{
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui";
}

function load()
{
    alert("Página carregada");
}

function funcaoChange(elemento)
{
    console.log(elemento.value);
}


/*
function soma(n1, n2) {
    return n1 + n2;
}
*/
/*var validar;
function validaIdade(idade)
{
    if(idade >= 18)
        validar = true;
    else
        validar = false;
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);
*/

//alert(soma(5, 10));
/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/*var count;
for(count=0; count <= 5; count++)
{
    alert(count);
}*/
/*
var count = 0;
while(count <= 5)
{
    console.log(count);
    alert(count);
    count++;
}*/
/*
var idade = prompt("Qual sua idade");
if(idade >= 18)
    alert("Maior de idade");
else
   alert("Menor de idade"); 
*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/
//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista[0]);
//consoile.log(lista.toString()[0]);
//console.log(lista.join(" - "));



/*var nome = "Danilo Caldas";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.toLowerCase());
alert(frase.replace("Japão","Brasil"));*/