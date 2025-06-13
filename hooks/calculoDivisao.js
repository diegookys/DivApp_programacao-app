import {useState} from 'react';

export default function calculoDivisao(){
  const [valorTotal, setarvalorTotal] = useState('');
  const [pessoas, numeroDePessoas] = useState('');
  const [taxa, setarTaxa] = useState('');
  const [resultado, mostrarResultado] = useState(null);

  const calcular = () => {
  const numeroValorTotal = parseFloat(valorTotal.replace(',', '.'));
  const pessoasFormato = pessoas.replace(',', '.');
  const pessoasNumero = Number(pessoasFormato);
  const taxaNumero = parseFloat(taxa.replace(',', '.')) || 0;

  const erros = [];

  if(isNaN(numeroValorTotal) || numeroValorTotal < 0){
    erros.push("Valor total inválido.");
  }

  if(!Number.isInteger(pessoasNumero) || pessoasNumero <= 0){
    erros.push("Digite um número inteiro positivo.");
  }

  if(taxa && (isNaN(taxaNumero) || taxaNumero < 0)){
    erros.push("Taxa de serviço inválida ou negativa.");
  }

  if(erros.length > 0){
    alert(erros.join("\\n"));
    mostrarResultado(null);
    return;
  }

  const totalComTaxa = numeroValorTotal + (numeroValorTotal * (taxaNumero / 100));
  const valorPorPessoa = totalComTaxa / pessoasNumero;

  mostrarResultado(valorPorPessoa.toFixed(2));
};


  const limpar = () => {
    setarvalorTotal('');
    numeroDePessoas('');
    setarTaxa('');
    mostrarResultado(null);
  };

  return{
    valorTotal,
    pessoas,
    taxa,
    setarvalorTotal,
    numeroDePessoas,
    setarTaxa,
    resultado,
    calcular,
    limpar
  };
}