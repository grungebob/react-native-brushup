import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { USERS } from '../../../../data/users';

export const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((user, index) => (
                    <View key={index} style={{alignItems: 'center'}}>
                        <Image source={{uri: user.image}} style={styles.story}/>
                        <Text style={{color: 'white'}}>{
                        user.user.length > 11 ? user.user.slice(0, 9) + '...' : user.user
                        }</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
   story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
   }
});