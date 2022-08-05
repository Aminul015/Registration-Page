import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.page}>Login Page</Text>

      <TextInput style={styles.username} placeholder="User Name"/>
      <TextInput style={styles.username} placeholder="Full Name"/>
      <TextInput style={styles.username} placeholder="Email"/>
      <TextInput style={styles.username} placeholder="Password"/>
      <Button style={{color:"red" , backgroundColor:"green"}} title="Sign Up"/>
      
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

  page:{
    fontSize:40,
    fontWeight:700,
    color:'blue'
  },

  username:{
    marginTop: 15,
    width: '50%',
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        fontSize: 20,
        marginBottom:25,
  },

  bt:{
    display:"",
    marginTop:20,
    color: "secondary"
  },
  img:{
    innerHeight:25
  }
});
