import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b9898',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:22,
    fontWeight:"bold",
  },
});
