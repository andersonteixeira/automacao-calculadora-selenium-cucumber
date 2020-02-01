$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Calculadora.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# encoding: iso-8859-1"
    },
    {
      "line": 2,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Calcular diferentes tipos de triângulos",
  "description": "Eu, como usuário da calculadora de triângulos,\nquero realizar os cálculos dos tipos de triângulos",
  "id": "calcular-diferentes-tipos-de-triângulos",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 7051161600,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Acessar a aplicação",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que acessado a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_acessado_a_aplicação()"
});
formatter.result({
  "duration": 8956876200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Valores invalidos",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;valores-invalidos",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 11,
  "name": "não informar os valores dos lados",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "calcular os lados do triângulo",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "será exibida a mensagem \"Preencha todos os lados\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CalculadoraSteps.não_informar_os_valores_dos_lados()"
});
formatter.result({
  "duration": 48600,
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.calcular_os_lados_do_triângulo()"
});
formatter.result({
  "duration": 5726497000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha todos os lados",
      "offset": 25
    }
  ],
  "location": "CalculadoraSteps.será_exibida_a_mensagem(String)"
});
formatter.result({
  "duration": 49852100,
  "status": "passed"
});
formatter.after({
  "duration": 3676673800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Cálculo dos Triângulos",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;cálculo-dos-triângulos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 16,
  "name": "informar os valores do lado1 \u003clado1\u003e, lado2 \u003clado2\u003e e lado3 \u003clado3\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "calcular os lados do triângulo",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o \u003ctriangulo\u003e será calculado",
  "keyword": "Entao "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;cálculo-dos-triângulos;",
  "rows": [
    {
      "cells": [
        "lado1",
        "lado2",
        "lado3",
        "triangulo"
      ],
      "line": 21,
      "id": "calcular-diferentes-tipos-de-triângulos;cálculo-dos-triângulos;;1"
    },
    {
      "cells": [
        "1",
        "1",
        "2",
        "\"Triângulo Isósceles\""
      ],
      "line": 22,
      "id": "calcular-diferentes-tipos-de-triângulos;cálculo-dos-triângulos;;2"
    },
    {
      "cells": [
        "3",
        "3",
        "3",
        "\"Triângulo Equilátero\""
      ],
      "line": 23,
      "id": "calcular-diferentes-tipos-de-triângulos;cálculo-dos-triângulos;;3"
    },
    {
      "cells": [
        "1",
        "2",
        "3",
        "\"Triângulo Escaleno\""
      ],
      "line": 24,
      "id": "calcular-diferentes-tipos-de-triângulos;cálculo-dos-triângulos;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 5662156500,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Acessar a aplicação",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que acessado a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_acessado_a_aplicação()"
});
formatter.result({
  "duration": 5769222900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Cálculo dos Triângulos",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;cálculo-dos-triângulos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 16,
  "name": "informar os valores do lado1 1, lado2 1 e lado3 2",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "calcular os lados do triângulo",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o \"Triângulo Isósceles\" será calculado",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 38
    },
    {
      "val": "2",
      "offset": 48
    }
  ],
  "location": "CalculadoraSteps.Informar_valores_do_lado(int,int,int)"
});
formatter.result({
  "duration": 3281507000,
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.calcular_os_lados_do_triângulo()"
});
formatter.result({
  "duration": 5224942800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Isósceles",
      "offset": 3
    }
  ],
  "location": "CalculadoraSteps.o_será_calculado(String)"
});
formatter.result({
  "duration": 52037500,
  "status": "passed"
});
formatter.after({
  "duration": 3707875200,
  "status": "passed"
});
formatter.before({
  "duration": 5725982600,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Acessar a aplicação",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que acessado a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_acessado_a_aplicação()"
});
formatter.result({
  "duration": 4966737700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Cálculo dos Triângulos",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;cálculo-dos-triângulos;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 16,
  "name": "informar os valores do lado1 3, lado2 3 e lado3 3",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "calcular os lados do triângulo",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o \"Triângulo Equilátero\" será calculado",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 29
    },
    {
      "val": "3",
      "offset": 38
    },
    {
      "val": "3",
      "offset": 48
    }
  ],
  "location": "CalculadoraSteps.Informar_valores_do_lado(int,int,int)"
});
formatter.result({
  "duration": 3302833700,
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.calcular_os_lados_do_triângulo()"
});
formatter.result({
  "duration": 644353800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Equilátero",
      "offset": 3
    }
  ],
  "location": "CalculadoraSteps.o_será_calculado(String)"
});
formatter.result({
  "duration": 57071900,
  "status": "passed"
});
formatter.after({
  "duration": 3677026700,
  "status": "passed"
});
formatter.before({
  "duration": 5298379900,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "Acessar a aplicação",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que acessado a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "CalculadoraSteps.que_acessado_a_aplicação()"
});
formatter.result({
  "duration": 4804029100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Cálculo dos Triângulos",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;cálculo-dos-triângulos;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 16,
  "name": "informar os valores do lado1 1, lado2 2 e lado3 3",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "calcular os lados do triângulo",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o \"Triângulo Escaleno\" será calculado",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "2",
      "offset": 38
    },
    {
      "val": "3",
      "offset": 48
    }
  ],
  "location": "CalculadoraSteps.Informar_valores_do_lado(int,int,int)"
});
formatter.result({
  "duration": 3261234600,
  "status": "passed"
});
formatter.match({
  "location": "CalculadoraSteps.calcular_os_lados_do_triângulo()"
});
formatter.result({
  "duration": 5825834100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Triângulo Escaleno",
      "offset": 3
    }
  ],
  "location": "CalculadoraSteps.o_será_calculado(String)"
});
formatter.result({
  "duration": 32602900,
  "status": "passed"
});
formatter.after({
  "duration": 3725950600,
  "status": "passed"
});
});