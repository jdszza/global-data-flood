
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { sendControlAction } from '../api';

export default function ControlScreen() {
  const [acao, setAcao] = useState('');

  const handleEnviar = async () => {
    try {
      await sendControlAction(acao);
      Alert.alert('Ação enviada com sucesso!');
      setAcao('');
    } catch (error) {
      console.error('Erro ao enviar ação de controle:', error);
      Alert.alert('Erro ao enviar ação!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar Ação de Controle</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a ação (ex: ativar barreira)"
        value={acao}
        onChangeText={setAcao}
      />
      <Button title="Enviar" onPress={handleEnviar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
