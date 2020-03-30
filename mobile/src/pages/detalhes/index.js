import React from 'react';

import {Feather} from '@expo/vector-icons';

import { View , TouchableOpacity , Image , Text , Linking } from 'react-native';

import { useNavigation , useRoute } from '@react-navigation/native';

import styles from './styles';

import logoImg from '../../img/logo.png';

import * as MailComposer from 'expo-mail-composer';

function Detalhes () {
    const navigation = useNavigation();
    const route = useRoute();

    const caso = route.params.caso;

    const message = `Olá ${caso.nome}, estou entrando em contato pois gostaria de ajudar no caso ${caso.titulo} com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency' , currency: 'BRL' }).format(caso.valor)}. `

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail () {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${caso.titulo}`,
            recipients: [caso.email],
            body: message
        })
    }

    function sendWhatsapp () {
        Linking.openURL(`whatsapp://send?phone=${caso.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0} ]}> ONG: </Text>
                <Text style={styles.incidentValue}> {caso.nome} de {caso.cidade}/{caso.uf} </Text>

                <Text style={styles.incidentProperty}> CASO: </Text>
                <Text style={styles.incidentValue}> {caso.descricao} </Text>

                <Text style={styles.incidentProperty}> VALOR: </Text>
                <Text style={styles.incidentValue}> {Intl.NumberFormat('pt-BR', { style: 'currency' , currency: 'BRL' }).format(caso.valor)} </Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroeTitle}> Salve o dia! </Text>
                <Text style={styles.heroeTitle}> Seja o herói desse caso. </Text>

                <Text style={styles.heroeDescription}> Entre em contato: </Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}> Whatsapp </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}> E-mail </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Detalhes;