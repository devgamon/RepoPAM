import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Object = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Classes e Objetos</Text>
            <Text style={[styles.paragraph, styles.blueText]}>Classes são modelos ou protótipos que definem a estrutura e o comportamento de objetos. Elas servem como um plano ou blueprint para criar objetos. As classes especificam quais atributos um objeto pode ter e quais métodos ele pode executar. Objetos, por outro lado, são instâncias concretas das classes. Eles representam entidades do mundo real com características específicas definidas pela classe. Os objetos têm seus próprios valores para os atributos da classe e podem invocar os métodos definidos na classe para realizar ações relacionadas a esses objetos.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        padding: 20,
        backgroundColor: '#B1C9A7',
        marginBottom: 15,
    },
    title:{
        fontSize: 18,
        color: '#F0F0F0',
        marginBottom: 10,
        textAlign: 'center'
    },
    paragraph: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'justify',
    },
    blueText: {
        color: '#F0F0F0',
    },
});

export default Object;