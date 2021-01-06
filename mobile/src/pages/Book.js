import React,{useState} from "react"
import {View,Alert,AsyncStorage,StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native'
import api from '../services/api'


export default function Book({navigation}){
    const[date,setDate] = useState('')

    const id = navigation.getParam('id')

    async function handleSubmit(){

        const user_id = await AsyncStorage.getItem('user')

        await api.post(`/spots/${id}/bookings`,{
            date
        },
        {
            headers:{user_id}
        } )
        Alert.alert('Solicitação de reserva enviada')
        navigation.navigate('List')
    }
    function handleCancel(){
        navigation.navigate('List')
    }


    return (<View style={styles.container} >
         <Text style={styles.label}>Data de interesse</Text>
             <TextInput
             
             style={styles.input}
             placeholder="Qual data você quer reservar ?"
             placeholderTextColor="#999"
            
             autoCapitalize="words"
             autoCorrect={false}
             value={date}
             onChangeText={text => setDate(text)}
             ></TextInput>
              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                 <Text style={styles.buttonText}>Solicitar reserva</Text>

             </TouchableOpacity>
             <TouchableOpacity onPress={handleCancel} style={styles.cancelbutton}>
                 <Text style={styles.buttonText}>Cancelar</Text>

             </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    label:{
        fontWeight:'bold',
        color:'#444',
        marginBottom:8,
        marginTop:20
    },
    input:{
        borderWidth:1,
        borderColor:"#ddd",
        paddingHorizontal:20,
        fontSize:16,
        color:"#444",
        height:44,
        marginBottom:20,
        borderRadius:2,

    },
    button:{
        height:44,backgroundColor:'#f05a5b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
    },
    cancelbutton:{
        marginTop:10,
        height:44,backgroundColor:'#ccc',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
    },
    buttonText:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:16

    },
    container:{
        margin:30,
    }
})