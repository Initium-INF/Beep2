import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Modal, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Scanner from "../components/Scanner";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [scanResult, setScanResult] = useState({ type: "", data: "" });

  const onCodeScanned = (scannedType, scannedData) => {
    setScanResult({ type: scannedType, data: scannedData });
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Scanner onCodeScanned={onCodeScanned} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <StatusBar style="auto" />

      <Image
        source={require("../../assets/qrcode.png")}
        style={styles.image}
      />

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Tipo: {scanResult.type}</Text>
        <Text style={styles.resultText}>Código: {scanResult.data}</Text>
      </View>

      <Button title="Escanear" onPress={() => setModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(169, 169, 169, 0.8)', 
    borderRadius: 10,
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end"

  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,

  },
});
