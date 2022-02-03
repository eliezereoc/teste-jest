const calculaValor = require("../src/calcula-valor");
// import calculaValor from "../src/calcula-valor.js";

describe("calculaMontante", () => {
  test("Deve retornar o capital", () => {
    // Operação
    const montante = calculaValor.caculaMontante(100, 0.0175, 1);

    expect(montante).toBe(100);
  });

  test("Com 4 prestações é acrescido de juros", () => {
    const montante = calculaValor.caculaMontante(500, 0.025, 4);

    expect(montante).toBe(538.45);
  });
});

describe("arredondar", () => {
  test("Arredondar em duas casas decimais", () => {
    // Operação
    const arredondar = calculaValor.arredondar(538.4453124999998);

    expect(arredondar).toBe(538.45);
  });

  test("1.005 deve retornar 1.01", () => {
    // Operação
    const resultado = calculaValor.arredondar(1.005);

    expect(resultado).toBe(1.01);
  });
});

describe("calcularPrestacoes", () => {
  test("O numero de parcelas é iguall ao numero de prestações", () => {
    const numeroPrestacoes = 6;
    const prestacoes = calculaValor.calcularPrestacoes(200, numeroPrestacoes);

    expect(prestacoes.length).toBe(numeroPrestacoes);
  });

  test("Uma unica prestação, valor igual ao montante", () => {
    const numeroPrestacoes = 1;
    const prestacoes = calculaValor.calcularPrestacoes(50, numeroPrestacoes);

    expect(prestacoes.length).toBe(numeroPrestacoes);
    expect(prestacoes[0]).toBe(50);
  });

  test("Duas parcelas é igual metade do montante.", () => {
    const numeroPrestacoes = 2;
    const prestacoes = calculaValor.calcularPrestacoes(50, numeroPrestacoes);

    expect(prestacoes.length).toBe(numeroPrestacoes);
    expect(prestacoes[0]).toBe(25);
    expect(prestacoes[1]).toBe(25);
  });

  //test.skip
  //test.only
  test("Valor da soma das prestações deve ser igual ao montante com duas casas decimais.", () => {
    //Dados (given)
    const numeroPrestacoes = 3;
    const montante = 100;

    //Quando (when)
    const prestacoes = calculaValor.calcularPrestacoes(
      montante,
      numeroPrestacoes
    );

    //Então (then)
    expect(prestacoes.length).toBe(numeroPrestacoes);
    const soma = calculaValor.arredondar(
      prestacoes[0] + prestacoes[1] + prestacoes[2]
    );
    expect(soma).toBe(montante);
  });
});
