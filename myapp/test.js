import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import MutliView from './src/components/MutliView';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <MutliView />
      <View style={styles.top}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        />
      </View>
      <View style={styles.center}>
        <Text>View 2</Text>
      </View>
      <View style={styles.bottom}>
        <Text>View 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    // paddingTop: 12,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  top : {
    flex : 1,
    flexDirection:'column',
    backgroundColor:"green",
    justifyContent:"center",
    alignItems:"center",
  },
  center : {
    flex : 1,
    backgroundColor : 'blue',
    justifyContent:"center",
    alignItems:"center",
  },
  bottom : {
    flex : 1,
    backgroundColor : 'yellow',
    justifyContent:"center",
    alignItems:"center",
  },
  tinyLogo : {
    width:50,
    height:50,
  }
});


// import { StatusBar } from 'expo-status-bar';
// import { Image, StyleSheet, Text, View } from 'react-native';
// // import MutliView from './src/components/MutliView';
// import LottieView from 'lottie-react-native';

// export default function Main() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <View style={styles.animationContainer}>
//         <LottieView style={{width:'75%',height:'80%'}} source={require('./assets/Animations/splashScreen.json')} autoPlay loop={false} />
//         <Text style={styles.mainHeading}>Welcome to E-CAMPUS</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex : 1,
//     justifyContent:"center",
//     alignItems:"center",
//     backgroundColor : 'teal',
//   },
//   mainHeading : {
//     fontSize: 24,
//     color : '#B5C0D0',
//   },
//   animationContainer : {
//     width:'75%',
//     height:'75%',
//     justifyContent:"center",
//     alignItems:"center",
//   }
// });
