function soma(n1,n2) {
    var nun1 = n1; 
    var nun2 = n2;

    var somador = nun1 + nun2
    
    return somador;
}
console.log(soma(3,4));

function convertString(NunC) {
    NunN = NunC;
    stringN = (NunN+" "+ "Convertido para String")
       return stringN;
   }
   console.log(convertString(8))

   function primoNun(Eprimo){
    Scaner = Eprimo / 2;
    if Scaner
    
   }

   function areaRetangulo(base,altura){

area = base * altura;
return area;

   }

   console.log(areaRetangulo(10,30))

   function adicionar(){
   var lista = ["um","dois","tres","quatro","cinco"]
    console.log(lista);//para verificar o estado da lista
    lista.push("six");
    console.log(lista)
   }

   var lista = ["um","dois","tres","quatro","cinco"]
   console.log(lista);//para verificar o estado da lista
   lista.push("six");
   console.log(lista);

   var lista = ["um","dois","tres","quatro","cinco"]
   console.log(lista);//para verificar o estado da lista
   lista.pop();
   console.log(lista);

   function deveVotar(idade) {

    var idadeCandidato = idade;

    if (idadeCandidato < 16)
    {
    console.log("não pode votar")
    } 
    else if (idadeCandidato > 16 && idadeCandidato < 18){
    console.log("pode votar")
     } 
     else if (idadeCandidato >= 18 &&idadeCandidato <= 70){
    console.log("deve sim votar")
 } 
   else  console.log("voto facultativo")
   
}

deveVotar(30);


//Python
/*
while True:
    nu = int(input("informe um número: "))
    if nu < 0: # condição de parada!
        print("Fim.")
        break
    if nu % 2 == 0:
        print("Número é par.")
    else:
        print("Número é ímpar.")

       // Python
class Funcionario:
    def __init__(self, salario):
        self.salario = salario
    
    def salario_mes(self, vendas):
        if vendas >= 1000 and vendas < 5000:
            return self.salario + 500
        if vendas >= 5000 and vendas < 7500:
            return self.salario + 700
        if vendas >= 7500:
            return self.salario + 1000
        
funcionario1 = Funcionario(1000)
print(funcionario1.salario_mes(5600))
*/
var lista = [20,48,35,55,33,385,28]

class maiorNumero(lista){

    maior = lista[0]




}



//Python
def buscar_maior(numeros):
    maior = numeros[0]
    for nu in numeros:
        if nu > maior:
            maior = nu
    return maior
print(buscar_maior([1, 8, 3, 6]))

//Python
def somatorio(numeros):
    return sum(numeros)
print(somatorio([1, 2, 3, 4, 5]))

//Python
def ordenar(numeros):
    return numeros.sort() 
print(ordenar[3, 2, 1])

// Python
def somatorio(numeros):
    return sum(numeros)
print(somatorio([1, 2, 3, 4, 5]))

