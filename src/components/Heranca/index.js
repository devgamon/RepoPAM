import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Heranca = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Herança</Text>
            <Text style={[styles.paragraph, styles.green]}>É um mecanismo que permite que uma classe herde propriedades e métodos de outra classe. Isso significa que você pode criar uma nova classe com base em uma classe existente, aproveitando suas características e comportamentos, e, ao mesmo tempo, estender ou especializar a nova classe adicionando ou modificando suas próprias características e comportamentos. A herança promove a reutilização de código e ajuda a criar hierarquias de classes, onde classes filhas herdam características de classes pai, criando uma relação de "é-um" entre elas. Isso facilita a modelagem de sistemas complexos e a manutenção do código.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        padding: 20,
        backgroundColor: '#91B077',
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
    green: {
        color: '#F0F0F0',
    },
})

export default Heranca;
