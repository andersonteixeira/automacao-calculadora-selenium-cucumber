# encoding: iso-8859-1
# language: pt
Funcionalidade: Calcular diferentes tipos de tri�ngulos
  Eu, como usu�rio da calculadora de tri�ngulos,
  quero realizar os c�lculos dos tipos de tri�ngulos

  Contexto: Acessar a aplica��o
    Dado que acessado a aplica��o

  Cenario: Valores invalidos
    Quando n�o informar os valores dos lados
    E calcular os lados do tri�ngulo
    Entao ser� exibida a mensagem "Preencha todos os lados"

  Esquema do Cenario: C�lculo dos Tri�ngulos
    Quando informar os valores do lado1 <lado1>, lado2 <lado2> e lado3 <lado3>
    E calcular os lados do tri�ngulo
    Entao o <triangulo> ser� calculado

    Exemplos: 
      | lado1 | lado2 | lado3 | triangulo              |
      |     1 |     1 |     2 | "Tri�ngulo Is�sceles"  |
      |     3 |     3 |     3 | "Tri�ngulo Equil�tero" |
      |     1 |     2 |     3 | "Tri�ngulo Escaleno"   |
