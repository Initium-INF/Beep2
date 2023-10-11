import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

const ModalComponent = ({ visible, onClose }) => {
    return (
    <Modal
    animationType="slide"
    ransparent={true}
    visible={visible}
    onRequestClose={onClose}
    >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#000', padding: 20 }}>
        <Text>Conteúdo do Modal</Text>
        <TouchableOpacity onPress={onClose}>
            <Text>Fechar</Text>
        </TouchableOpacity>
        </View>
    </View>
    </Modal>
);
};

export default ModalComponent;
