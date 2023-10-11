import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const History = () => {
const [historyItems, setHistoryItems] = useState([]);

const addItemToHistory = () => {
    // Gera um item de histórico com um timestamp
    const newItem = `Item ${historyItems.length + 1} - ${new Date().toLocaleTimeString()}`;
    
    // Adiciona o novo item à lista de histórico
    setHistoryItems([...historyItems, newItem]);
};

return (
    <View style={{ flex: 1, padding: 16 }}>
    <Button title="Adicionar Item ao Histórico" onPress={addItemToHistory} />

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
