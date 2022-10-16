import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import RootNavigator from "./src/navigation/RootNavigator";
// import WelcomeScreen from "./src/screens/Welcome/WelcomeScreen";
import HomeScreen from "./src/screens/Home/HomeScreen";
import WelcomeScreen from "./src/screens/Welcome/WelcomeScreen";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
      <RootNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
