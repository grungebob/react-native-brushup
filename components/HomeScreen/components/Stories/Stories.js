import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { USERS } from '../../../../data/users';

export const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((user, index) => (
                    <Image source={{uri: user.image}} 
                    style={styles.story}/>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
   story: {
    
   }
});