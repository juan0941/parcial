import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function TeamCard({ team, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: team.team.logo }} style={styles.logo} />
      <Text style={styles.name}>{team.team.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fff', margin: 10, borderRadius: 10, elevation: 3 },
  logo: { width: 50, height: 50, marginRight: 10 },
  name: { fontSize: 16, fontWeight: 'bold' },
});
