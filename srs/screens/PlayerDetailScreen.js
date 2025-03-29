import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PlayerDetailScreen({ route }) {
  const { player } = route.params;

  // Comprobamos si los datos del jugador están presentes
  if (!player) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorMessage}>Jugador no encontrado.</Text>
      </View>
    );
  }

  // Comprobamos si las estadísticas están disponibles
  const stats = player.statistics && player.statistics[0];
  const goals = stats ? stats.goals.total : 0;
  const assists = stats ? stats.assists : 0;

  return (
    <View style={styles.container}>
      {/* Imagen del jugador */}
      {player.photo ? (
        <Image source={{ uri: player.photo }} style={styles.playerImage} />
      ) : (
        <View style={styles.noImage}><Text>No disponible</Text></View>
      )}

      <Text style={styles.name}>{player.name}</Text>
      <Text style={styles.detail}>Edad: {player.age || 'No disponible'}</Text>
      <Text style={styles.detail}>Posición: {player.position || 'No disponible'}</Text>
      <Text style={styles.detail}>Nacionalidad: {player.nationality || 'No disponible'}</Text>
      <Text style={styles.detail}>Goles: {goals}</Text>
      <Text style={styles.detail}>Asistencias: {assists}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'center', alignItems: 'center' },
  playerImage: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  noImage: { width: 150, height: 150, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center', borderRadius: 75, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  detail: { fontSize: 18, marginVertical: 5 },
  errorMessage: { fontSize: 18, color: 'red', textAlign: 'center' },
});
