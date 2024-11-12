import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

// Mock data for chat conversations
const chatData = [
  {
    id: '1',
    name: 'Dr. Johnson',
    lastMessage: 'Here is a reminder for our appointment tomorrow.',
    avatar: 'https://media.istockphoto.com/id/175399910/photo/confident-african-american-female-doctor-isolated.jpg?s=612x612&w=0&k=20&c=3L5M1Cv-SRX1TvUf67kpiRCjkca4u4nQUaH7l3IFZkc=',
  },
  {
    id: '2',
    name: 'Dr. Smith',
    lastMessage: 'Got it, thanks!',
    avatar: 'https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg',
  },
  {
    id: '3',
    name: 'Dr. Doe',
    lastMessage: 'Can you send me the files?',
    avatar: 'https://capturely.com/wp-content/uploads/Doctor-4-2.webp',
  },
];

export default function ChatScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatTextContainer}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatTextContainer: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatMessage: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
});
