import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import calculoDivisao from './hooks/calculoDivisao';
import InputField from './components/InputField';
import ResultCard from './components/ResultCard';

export default function App(){
  const{
    valorTotal,
    pessoas,
    taxa,
    setarvalorTotal,
    numeroDePessoas,
    setarTaxa,
    resultado,
    calcular,
    limpar
  } = calculoDivisao();

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>DivApp🍽️</Text>

      <InputField placeholder="Valor da conta (em R$)" value={valorTotal} onChangeText={setarvalorTotal} />
      <InputField placeholder="Número de pessoas" value={pessoas} onChangeText={numeroDePessoas} />
      <InputField placeholder="Taxa de serviço (em %)(Opcional)" value={taxa} onChangeText={setarTaxa} />

      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.botaoTexto}>CALCULAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoLimpar]} onPress={limpar}>
        <Text style={styles.botaoTexto}>LIMPAR</Text>
      </TouchableOpacity>

      {resultado && <ResultCard label="Cada pessoa deve pagar:" valor={resultado} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000',
    padding: 24,
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 28,
    color: '#e00202',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  botao:{
    backgroundColor: '#e00202',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoLimpar:{
    backgroundColor: '#535353',
  },
  botaoTexto:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});