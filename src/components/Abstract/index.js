import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Abstract = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Abstração</Text>
            <Text style={[styles.paragraph, styles.red]}>É o conceito de simplificar complexidades e focar apenas nos aspectos mais relevantes de um objeto. Ela envolve a criação de classes e objetos que representam entidades do mundo real, capturando apenas os detalhes essenciais e ocultando os detalhes irrelevantes. Em outras palavras, a abstração permite que você modele objetos de forma a destacar apenas as características e comportamentos significativos, tornando mais fácil entender e manipular esses objetos em seu código.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        padding: 20,
        backgroundColor: '#739855',
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
    red: {
        color: '#F0F0F0',
    },
});

export default Abstract;
