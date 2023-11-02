import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Data/colors/Colors';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';

const RegisterScreen = () => {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState()
    const [cnfpassword, setCnfpassword] = useState()

    const SaveData = async () => {
        console.warn(username);

        console.warn(name);

        console.warn(email);

        console.warn(number);

        console.warn(password);
        console.warn(cnfpassword);

        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(username,name,email,number,password,cnfpassword)
        }
        )

    }






    return (
        <View>

            <View style={styles.nav}>

            </View>
            <View style={styles.logocontainer} >
                <Image source={require('../Data/images/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.main}>
                <TextInput placeholder='Username' style={styles.inputbox}
                    value={username}
                    onChangeText={(text) => setUsername(text)}

                />

                <TextInput placeholder='Full Name' style={styles.inputbox}
                    value={name}
                    onChangeText={(text) => setName(text)}


                />
                <TextInput placeholder='Email' style={styles.inputbox}
                    value={email}
                    onChangeText={(text) => setEmail(text)}


                />
                <TextInput placeholder='Contact Number' style={styles.inputbox}

                    value={number}
                    onChangeText={(text) => setNumber(text)}

                />
                <TextInput placeholder='Password' style={styles.inputbox}
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}

                />
                <TextInput placeholder=' Confirm Password' style={styles.inputbox}
                    secureTextEntry
                    value={cnfpassword}
                    onChangeText={(text) => setCnfpassword(text)}

                />





                <TouchableOpacity

                    onPress={SaveData}

                >
                    <Text style={styles.login} >SignUp</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.account}>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginScreen')}
                    >
                        <Text style={styles.create} >Login</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity 
                onPress={()=> navigation.navigate('Home')}>
                <View style={styles.home}>
                    <Text style={{fontSize:25}}>Home</Text>
                </View>
                </TouchableOpacity>
              


            </View>


        </View>
    )

}

export default RegisterScreen

const styles = StyleSheet.create({
    home:{
      alignItems:'center',
      textAlign:'center',
     padding:10,
     margin:30,
      borderWidth:2,
      fontSize:20
    },

    main: {
        width: 393,
        height: 520,
        backgroundColor: Colors.green,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    },
    nav: {
        backgroundColor: Colors.keshri,
        height: 120,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },

    logocontainer: {
        height: 100,
        width: 200,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    logo: {
        height: '100%',
        width: '100%',

    },
    inputbox: {
        height: 40,
        width: 320,
        borderBottomWidth: 2,
        borderRadius: 8,
        margin: 5,
        fontSize: 18,
        fontWeight: '400',
        alignSelf: 'center',
        borderColor: Colors.white


    },
    login: {
        height: 40,
        width: 130,

        borderRadius: 10,
        margin: 12,
        fontSize: 25,
        fontWeight: '400',
        alignSelf: 'center',
        textAlign: 'center',
        color: Colors.white,

        backgroundColor: Colors.keshri

    },
    account: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.keshri,
        marginLeft: 20,
    },
    create: {
        fontSize: 20,
        fontWeight: '400',
        color: Colors.blue,
        marginLeft: 7,
        borderBottomWidth: 1,
        width: 60,
        color: Colors.blue,

    },
    passconatiner: {
        flexDirection: 'row',
        marginLeft: 45,
        marginTop: -10
    },
    passkey: {
        fontSize: 18,
        color: Colors.black,
        marginTop: 3.5
    },
    passtext: {
        fontSize: 16,
        color: Colors.red,
        marginLeft: 5,
        fontWeight: '400'
    },


})


