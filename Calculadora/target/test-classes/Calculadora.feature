# encoding: iso-8859-1
# language: pt
Funcionalidade: Calcular diferentes tipos de triângulos
  Eu, como usuário da calculadora de triângulos,
  quero realizar os cálculos dos tipos de triângulos

  Contexto: Acessar a aplicação
    Dado que acessado a aplicação

  Cenario: Valores invalidos
    Quando não informar os valores dos lados
    E calcular os lados do triângulo
    Entao será exibida a mensagem "Preencha todos os lados"

  Esquema do Cenario: Cálculo dos Triângulos
    Quando informar os valores do lado1 <lado1>, lado2 <lado2> e lado3 <lado3>
    E calcular os lados do triângulo
    Entao o <triangulo> será calculado

    Exemplos: 
      | lado1 | lado2 | lado3 | triangulo              |
      |     1 |     1 |     2 | "Triângulo Isósceles"  |
      |     3 |     3 |     3 | "Triângulo Equilátero" |
      |     1 |     2 |     3 | "Triângulo Escaleno"   |
