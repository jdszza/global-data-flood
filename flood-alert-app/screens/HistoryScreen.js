
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getHistory } from '../api';

export default function HistoryScreen() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const result = await getHistory();
        setHistorico(result);
      } catch (error) {
        console.error('Erro ao buscar histórico:', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Histórico de Ocorrências</Text>
      {historico.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text>Ação: {item.acao}</Text>
          <Text>Executado: {item.executado ? 'Sim' : 'Não'}</Text>
          <Text>Data/Hora: {item.dataHora}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
