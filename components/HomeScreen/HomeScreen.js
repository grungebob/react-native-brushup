import { SafeAreaView, StyleSheet } from "react-native";
import { Header, Stories } from './components';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
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