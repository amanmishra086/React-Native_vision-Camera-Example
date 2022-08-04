import { View, Text ,StatusBar,Alert,StyleSheet} from 'react-native'
import React from 'react'
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {RNHoleView} from 'react-native-hole-view';

export default function RNVisionCamera() {

    const devices = useCameraDevices();
const device = devices.back;

const [frameProcessor, barcodes] = useScanBarcodes([
    BarcodeFormat.ALL_FORMATS, // You can only specify a particular format
  ]);

const [barcode, setBarcode] = React.useState('');
const [hasPermission, setHasPermission] = React.useState(false);
const [isScanned, setIsScanned] = React.useState(false);

React.useEffect(() => {
    checkCameraPermission();
  }, []);

 const checkCameraPermission = async () => {
    const status = await Camera.getCameraPermissionStatus();
    setHasPermission(status === 'authorized');
 };

 React.useEffect(() => {
    toggleActiveState();
    return () => {
      barcodes;
    };
  }, [barcodes]);

const toggleActiveState = async () => {
    if (barcodes && barcodes.length > 0 && isScanned === false) {
      setIsScanned(true);
      // setBarcode('');
      barcodes.forEach(async (scannedBarcode: any) => {
        if (scannedBarcode.rawValue !== '') {
          setBarcode(scannedBarcode.rawValue);
          Alert.alert(barcode);
        }
      });
    }
  };

  return(
   
    
    // device != null &&
    //   hasPermission && (
    //     <>
    //       <StatusBar barStyle="light-content" backgroundColor="#000000" />
    //       <Camera
    //         style={StyleSheet.absoluteFill}
    //         device={device}
    //         isActive={!isScanned}
    //         frameProcessor={frameProcessor}
    //         frameProcessorFps={5}
    //         audio={false}
    //       />
    //     //  <RNHoleView
    //     //       holes={[
    //     //         {
    //     //           x: widthToDp('8.5%'),
    //     //           y: heightToDp('36%'),
    //     //           width: widthToDp('83%'),
    //     //           height: heightToDp('20%'),
    //     //           borderRadius: 10,
    //     //         },
    //     //       ]}
    //     //       style={styles.rnholeView}
    //     //     />
    //     <View/>
      //)
   <View>
    <Text>Hello</Text>
   </View>
  );
  
}
// Styles:
const styles = StyleSheet.create({
  rnholeView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});