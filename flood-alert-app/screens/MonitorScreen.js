
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getSensorData } from '../api';

export default function MonitorScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const result = await getSensorData();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados do sensor:', error);
      }
    };

    fetchSensorData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dados de Monitoramento</Text>
      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text>Nível da água: {item.nivelAgua} m</Text>
          <Text>Temperatura: {item.temperatura} ºC</Text>
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
    backgroundColor: '#e6f0ff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
