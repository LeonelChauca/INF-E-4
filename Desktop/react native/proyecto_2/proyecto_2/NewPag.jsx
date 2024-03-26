import React, { useState } from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';


export const NewPag = ({navigation}) => {

    const [num1, setnum1] = useState('')
    const [num2, setnum2] = useState('')
    const enviar=()=>{
        navigation.navigate('Carrito',num1,num2);
    }
  return (
    <View>
         <Text>num1</Text>
         <TextInput style={styles.input} onChangeText={setnum1} value={num1}/>
         <Text>num2</Text>
         <TextInput style={styles.input} onChangeText={setnum2} value={num2}/>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={()=>enviar()}>Enviar </Text>
         </TouchableOpacity>
    </View>
   
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 2,
        width: 50,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#e06f1f'
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
      },

  });