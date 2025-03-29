import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { getTeams } from '../api/footballApi';

export default function HomeScreen({ navigation }) {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeams()
      .then(data => {
        setTeams(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error cargando equipos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#6200ea" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={teams}
        keyExtractor={item => item.team.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.teamCard} onPress={() => navigation.navigate('Players', { teamId: item.team.id })}>
            <Image source={{ uri: item.team.logo }} style={styles.logo} />
            <Text style={styles.teamName}>{item.team.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4', padding: 10 },
  loader: { flex: 1, justifyContent: 'center' },
  teamCard: { backgroundColor: '#fff', padding: 15, marginVertical: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center' },
  logo: { width: 50, height: 50, marginRight: 15 },
  teamName: { fontSize: 18, fontWeight: 'bold' },
});
