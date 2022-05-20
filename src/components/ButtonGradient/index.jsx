import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ButtonGradient ({ title, onPress }){
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <LinearGradient
        colors={['#000', '#C55128', '#FF6833']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 5,
  },
  linearGradient: {
    height: 50,
    width: '80%',
    paddingHorizontal: 40,
    borderRadius: 50,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
