import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { Asset } from "expo-asset";


export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const loadImages = (images) => images.map(image => {
    if(typeof image === "string"){
      return Image.prefetch(image)
    } else {
      return Asset.loadAsync(image)
    }
  })
  
  const startLoading = async () => {
    // const fonts = loadFonts([Ionicons.font]);
    const images = loadImages([
      require("./public/image/logo.png"), 
      // "https://recipe1.ezmember.co.kr/cache/recipe/2018/06/13/f0926da2bd1ed28b09fc495d30f274531.jpg"
    ])
    await Promise.all([...fonts, ...images]) 
  };
  if (!ready) {
    return (
      <AppLoading 
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  } 
  return (
    <View>
      <Text>We are done loading....</Text>
      <Text>We are done loading....</Text>
      {/* <Image 
        source={images[0]}
      /> */}
      <Image 
        source={require('./public/image/logo.png')}
      />
    </View>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
