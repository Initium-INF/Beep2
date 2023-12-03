import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Modal } from 'react-native';
import ModalComponent from '../Modal';

const Camera = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ModalComponent visible={modalVisible} onClose={closeModal}>
        <View style={styles.modalContent}>
        </View>
      </ModalComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});

export default Camera;
