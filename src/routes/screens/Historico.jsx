import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { ListItem, ThemeProvider } from 'react-native-elements';

const theme = {
  colors: {
    primary: '#191970',
  },
};

const History = () => {
  const [historyItems, setHistoryItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addHistoryItem = () => {
    if (newItem.trim() !== '') {
      const updatedHistoryItems = [...historyItems, newItem];
      setHistoryItems(updatedHistoryItems);
      setNewItem('');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, padding: 16 }}>
        <TextInput
          style={{
            marginBottom: 10,
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#000',
          }}
          placeholder="Item Escaneado"
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
        />

        <View style={{ marginTop: 20, borderRadius: 5, borderWidth: 1, borderColor: '#000' }}>
          {historyItems.map((item, index) => (
            <ListItem key={index} containerStyle={{ paddingVertical: 10 }} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </View>
    </ThemeProvider>
  );
};

export default History;