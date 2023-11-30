import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const History = () => {
  // Estado para armazenar os itens do histórico
  const [historyItems, setHistoryItems] = useState([]);

  // Função para adicionar um item ao histórico
  const addItemToHistory = () => {
    // Gera um item de histórico com um timestamp
    const newItem = `Item ${historyItems.length + 1} - ${new Date().toLocaleTimeString()}`;
    
    // Adiciona o novo item à lista de histórico utilizando spread operator para criar um novo array
    setHistoryItems([...historyItems, newItem]);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Botão para adicionar um item ao histórico */}
      <Button title="Adicionar Item ao Histórico" onPress={addItemToHistory} />

      {/* Lista de itens do histórico utilizando FlatList */}
      <FlatList
        data={historyItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 8 }}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default History;
