import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { RNCamera } from "react-native-camera";

const Camera = () => {
  const [scanning, setScanning] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [type, setType] = useState("");
  const [data, setData] = useState("");

  const onBarcodeDetected = (barcodes) => {
    if (barcodes.length > 0) {
      setType(barcodes[0].type);
      setData(barcodes[0].data);
      setModalVisible(true);
      stopScanning();
    }
  };

  const startScanning = () => {
    setScanning(true);
  };

  const stopScanning = () => {
    setScanning(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {scanning ? (
        <RNCamera
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={onBarcodeDetected}
        />
      ) : (
        <View style={{}} />
      )}

      <StatusBar style="auto" />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modal}>
          <Text>Tipo: {type}</Text>
          <Text>Data: {data}</Text>
          <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity style={styles.scanButton} onPress={startScanning}>
        <Text style={styles.scanButtonText}>Escanear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
  },
  scanButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  scanButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#FF5733",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Camera;
