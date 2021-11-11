import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import RNFS from 'react-native-fs';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

export default function Camera() {
    const [{ cameraRef }, { takePicture }] = useCamera(null);

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
            <TouchableOpacity
           style={styles.button}
           activeOpacity={0.5}
           onPress={captureHandle}>
          <Text style={styles.buttonText}>Take Picture</Text>
          </TouchableOpacity>
      
            </RNCamera>
        </View>
    );
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});