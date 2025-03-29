import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { getPlayers } from '../api/footballApi';

export default function PlayersScreen({ route, navigation }) {
  const { teamId } = route.params;
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayers(teamId)
      .then(data => {
        setPlayers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error cargando jugadores:', error);
        setLoading(false);
      });
  }, [teamId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#6200ea" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        keyExtractor={item => item.player.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.playerCard} onPress={() => navigation.navigate('PlayerDetail', { player: item.player })}>
            <Image source={{ uri: item.player.photo }} style={styles.playerImage} />
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>{item.player.name}</Text>
              <Text style={styles.position}>{item.player.position || 'Sin posición'}</Text>
              <Text style={styles.stats}>Goles: {item.statistics[0].goals.total || 0}</Text>
              <Text style={styles.stats}>Asistencias: {item.statistics[0].assists || 0}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4', padding: 10 },
  loader: { flex: 1, justifyContent: 'center' },
  playerCard: { backgroundColor: '#fff', padding: 15, marginVertical: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center' },
  playerImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  playerInfo: { flex: 1 },
  playerName: { fontSize: 18, fontWeight: 'bold' },
  position: { fontSize: 14, color: 'gray' },
  stats: { fontSize: 14, color: 'black' },
});
