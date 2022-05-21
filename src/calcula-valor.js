const caculaMontante = (capital, taxa, periodo) => {
  let montante = capital * Math.pow(1 + taxa, periodo - 1);
  montante = arredondar(montante);
  return montante;
};

const arredondar = (valor) => {
  const precisao = 100;
  const arredondado =
    Math.round((valor + Number.EPSILON) * precisao) / precisao;
  return arredondado;
};

const calcularPrestacoes = (montante, numeroParcelas) => {
  const prestacoesBase = arredondar(montante / numeroParcelas);
  const resultado = Array(numeroParcelas).fill(prestacoesBase);

  let somaPrestacoes = resultado.reduce(
    (vlrAtual, vlrToral) => vlrAtual + vlrToral
  );
  let diferenca = arredondar(montante - somaPrestacoes);
  let i = 0;
  while (diferenca != 0) {
    resultado[i] = resultado[i] + 0.01;
    somaPrestacoes = resultado.reduce(
      (vlrAtual, vlrToral) => vlrAtual + vlrToral
    );
    diferenca = arredondar(montante - somaPrestacoes);
    i++;
  }

  return resultado;
};

export default {
  caculaMontante,
  arredondar,
  calcularPrestacoes,
};

// module.exports = {
//   caculaMontante,
//   arredondar,
//   calcularPrestacoes,
// };
