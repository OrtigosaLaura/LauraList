import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
      <Image 
      source={require('../assets/logo.png')} 
      style={styles.logo} 
      />
      </View>
      <View style={styles.content}>
      <Text style={styles.title}> 
      Market Laura List
      </Text>
      <Text style={styles.text}>
        Monte sua lista de compras e não esqueça mais 
        o que precisa comprar no supermercado!!!
      </Text>
      <Link style={styles.button} href={"/home"}>
        <Text style={styles.buttonText}>Acessar</Text>
      </Link>
      </View>
      <StatusBar style="light" backgroundColor='#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#228B22',
  },
  containerImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center'
  },
  text: {
    fontSize: 17,
    color: 'gray',
    textAlign: 'center'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#228B22',
    bottom: '15%',
    alignSelf: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    width: '60%',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }
});
