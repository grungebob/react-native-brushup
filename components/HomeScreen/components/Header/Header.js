import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../../../assets/logo.svg')}/>
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image 
                        source={require('../../../../assets/plus.svg')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={require('../../../../assets/heart.svg')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>
                            11
                        </Text>
                    </View>
                    <Image 
                        source={require('../../../../assets/message.svg')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    iconsContainer: {
        flexDirection: 'row',
        marginRight: '1vw',
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 15,
        width: 25,
        height: 15,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    unreadBadgeText: {
        color: '#FFFFFF',
        fontWeight: 600,
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        resizeMode: 'contain',
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    }
});