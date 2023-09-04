import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Classes e Objetos: classes são modelos ou protótipos que definem a estrutura e o comportamento de objetos. Elas servem como um plano ou blueprint para criar objetos. As classes especificam quais atributos um objeto pode ter e quais métodos ele pode executar. Objetos, por outro lado, são instâncias concretas das classes. Eles representam entidades do mundo real com características específicas definidas pela classe. Os objetos têm seus próprios valores para os atributos da classe e podem invocar os métodos definidos na classe para realizar ações relacionadas a esses objetos.</Text>
      <Text style={[styles.paragraph, styles.redText]}>Abstração: é o conceito de simplificar complexidades e focar apenas nos aspectos mais relevantes de um objeto. Ela envolve a criação de classes e objetos que representam entidades do mundo real, capturando apenas os detalhes essenciais e ocultando os detalhes irrelevantes. Em outras palavras, a abstração permite que você modele objetos de forma a destacar apenas as características e comportamentos significativos, tornando mais fácil entender e manipular esses objetos em seu código.</Text>
      <Text style={[styles.paragraph, styles.blueText]}>Herança: é um mecanismo que permite que uma classe herde propriedades e métodos de outra classe. Isso significa que você pode criar uma nova classe com base em uma classe existente, aproveitando suas características e comportamentos, e, ao mesmo tempo, estender ou especializar a nova classe adicionando ou modificando suas próprias características e comportamentos. A herança promove a reutilização de código e ajuda a criar hierarquias de classes, onde classes filhas herdam características de classes pai, criando uma relação de "é-um" entre elas. Isso facilita a modelagem de sistemas complexos e a manutenção do código.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 10,
    marginBottom: 20,
  },
  redText: {
    color: 'red',
  },
  blueText: {
    color: 'blue',
  },
});

export default App;