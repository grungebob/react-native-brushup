import { SafeAreaView, StyleSheet } from "react-native";
import { Header } from './components/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100vw',
        flex: 1,
    }
})

export default HomeScreen;