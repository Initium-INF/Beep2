import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';

const BlockPicker = ({ title, items, selectedItem, onSelectItem, onRoomSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePicker = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemPress = (item) => {
    onSelectItem(item);
    setIsExpanded(false);
    onRoomSelect(true); // Chamada quando uma sala é selecionada
  };

  return (
    <View style={styles.pickerContainer}>
      <TouchableOpacity onPress={togglePicker} style={styles.pickerHeader}>
        <Text style={styles.title}>{title}: {selectedItem || 'Selecione um item'}</Text>
        <AntDesign name={isExpanded ? 'up' : 'down'} size={20} color="black" />
      </TouchableOpacity>

      <Modal visible={isExpanded} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={items}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleItemPress(item)}>
                  <Text style={styles.modalItem}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default function Home() {
  const [selectedBlocoA, setSelectedBlocoA] = useState(null);
  const [selectedBlocoB, setSelectedBlocoB] = useState(null);
  const [selectedBlocoC, setSelectedBlocoC] = useState(null);
  const [selectedBlocoD, setSelectedBlocoD] = useState(null);
  const [selectedBlocoE, setSelectedBlocoE] = useState(null);
  const [isRoomSelected, setIsRoomSelected] = useState(false);

  useEffect(() => {
   
    if (isRoomSelected) {

      console.log('Scanning started...');
    }
  }, [isRoomSelected]);

  const handleBlocoASelection = (item) => {
    setSelectedBlocoA(item);
  };

  const handleBlocoBSelection = (item) => {
    setSelectedBlocoB(item);
  };

  const handleBlocoCSelection = (item) => {
    setSelectedBlocoC(item);
  };

  const handleBlocoDSelection = (item) => {
    setSelectedBlocoD(item);
  };

  const handleBlocoESelection = (item) => {
    setSelectedBlocoE(item);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <BlockPicker
        title="Bloco A"
        items={['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5']}
        selectedItem={selectedBlocoA}
        onSelectItem={handleBlocoASelection}
        onRoomSelect={setIsRoomSelected}
      />

      <BlockPicker
        title="Bloco B"
        items={['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5']}
        selectedItem={selectedBlocoB}
        onSelectItem={handleBlocoBSelection}
        onRoomSelect={setIsRoomSelected}
      />

      <BlockPicker
        title="Bloco C"
        items={['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5']}
        selectedItem={selectedBlocoC}
        onSelectItem={handleBlocoCSelection}
        onRoomSelect={setIsRoomSelected}
      />

      <BlockPicker
        title="Bloco D"
        items={['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5']}
        selectedItem={selectedBlocoD}
        onSelectItem={handleBlocoDSelection}
        onRoomSelect={setIsRoomSelected}
      />

      <BlockPicker
        title="Bloco E"
        items={['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5']}
        selectedItem={selectedBlocoE}
        onSelectItem={handleBlocoESelection}
        onRoomSelect={setIsRoomSelected}
      />

      {isRoomSelected && (
        <Button
          title="Começar a Scanear"
          onPress={() => {
            console.log('Starting scanning...');
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerContainer: {
    marginBottom: 20,
    width: 300,
  },
  pickerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
