import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const Camera = () => {
  const [scanning, setScanning] = useState(false);

  const onBarcodeDetected = (barcodes) => {
    if (barcodes.length > 0) {
      console.log('Código de Barras:', barcodes[0].data);
      // Pode adicionar lógica adicional aqui com o código de barras
    }
  };

  const startScanning = () => {
    setScanning(true);
  };

  useEffect(() => {
    if (scanning) {
      // Lógica adicional para inicializar o escaneamento aqui, se necessário
    }
  }, [scanning]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {scanning && (
          <RNCamera
            style={{ flex: 1 }}
            type={RNCamera.Constants.Type.back}
            onBarCodeRead={onBarcodeDetected}
          />
        )}
      </View>
      <Button
        title={scanning ? 'Escaneando...' : 'Iniciar Escaneamento'}
        onPress={startScanning}
        disabled={scanning}
      />
    </View>
  );
};

export default Camera;
