import * as React from 'react';

import { StyleSheet, Text, Linking } from 'react-native';
import { useCameraDevices } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

export default function VisionCamera() {
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.ALL_FORMATS], {
    checkInverted: true,
  });

  // Alternatively you can use the underlying function:
  //
  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], { checkInverted: true });
  //   //runOnJS(setBarcodes)(detectedBarcodes);
  //   console.log(`QR Codes in Frame: ${detectedBarcodes}`);
  // }, []);

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  //   const onPress = async (url) => {
  //     //const url = 'https://example.com';
  //     await Linking.canOpenURL(url);
  //     Linking.openURL(url);
  //   };

  return (
    device != null &&
    hasPermission && (
      <>
        <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} frameProcessor={frameProcessor} frameProcessorFps={5} />
        {barcodes.map((barcode, idx) => (
          <Text
            key={idx}
            style={styles.barcodeTextURL}
            onPress={() => {
              //Linking.openURL(barcode.displayValue);
            }}>
            {barcode.displayValue}
          </Text>
        ))}
      </>
    )
  );
}

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
