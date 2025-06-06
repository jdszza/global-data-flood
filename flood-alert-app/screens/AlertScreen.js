
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getAlerts } from '../api';

export default function AlertScreen() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const result = await getAlerts();
        setAlerts(result);
      } catch (error) {
        console.error('Erro ao buscar alertas:', error);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Alertas Ativos</Text>
      {alerts.map((alert, index) => (
        <View key={index} style={styles.card}>
          <Text>Tipo: {alert.tipo}</Text>
          <Text>Descrição: {alert.descricao}</Text>
          <Text>Data/Hora: {alert.dataHora}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: '#fff3cd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
