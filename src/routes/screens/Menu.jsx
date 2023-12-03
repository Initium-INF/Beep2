import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuScreen = ({ navigation }) => {
  const navigateToScreen = (screenName) => {

    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Menu</Text>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Home')}>
        <Text style={styles.menuItemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Profile')}>
        <Text style={styles.menuItemText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen('Settings')}>
        <Text style={styles.menuItemText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default MenuScreen;
