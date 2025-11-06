import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import styles from './styles'; <--- importando o styles do outro arquivo

//const avatarUrl = "url da imagem"
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá, mundo!</Text>
      <StatusBar style="auto" />
    </View>
    
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
