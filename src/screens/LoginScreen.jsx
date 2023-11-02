import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../Data/colors/Colors';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [learnmore, setLearnmore] = useState(false);
  const [learnclose, setLearnclose] = useState(true);
  const [aipcheck, setApicheck] = useState(true);
  //  FOR API DATA
  const [apidata, setApidata] = useState([]);

  const LearnMore = () => {
    setLearnmore(true);
  };
  const LearnClose = () => {
    setLearnmore(false);
  };
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [usererror, setUsererror] = useState(false);
  const [passerror, setPasserror] = useState(false);

  const LoginApiData = async () => {
    if (!username) {
      setUsererror(true);
    } else {
      setUsererror(false);
    }

    if (!password) {
      setPasserror(true);
    } else {
      setPasserror(false);
    }

    //=====================API CALLING ======================

    // const url = 'http://10.0.2.2:3000/users';
    // let result = await fetch(url);
    // result = await result.json();
    // setApidata(result);
  };
  useEffect(() => {
    LoginApiData();
  }, []);

  return (
    <View>
      <View style={styles.nav}></View>
      <View style={styles.logocontainer}>
        <Image
          source={require('../Data/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.main}>
        <TextInput
          placeholder="Username"
          style={styles.inputbox}
          value={username}
          onChangeText={text => setUsername(text)}
        />

        {/* {
                    apidata.length ?
                        apidata.map((item) =>
                            <View>
                                {
                                    item.username === username ? <View> <Text style={styles.paserror} >Not a true valid username</Text></View> : <Text>not valid</Text>
                                }
                            </View>)
                        : null


                } */}

        {usererror ? (
          <Text style={styles.paserror}>Not a valid username</Text>
        ) : null}

        <TextInput
          placeholder="Password"
          style={styles.inputbox}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        {passerror ? (
          <Text style={styles.paserror}>Not a valid password</Text>
        ) : null}

        {/* ***************************API MAP HERE**************** */}
        {/* {
                    apidata.length ?
                        apidata.map((item) =>
                            <View>
                                {
                                    item.username === username ? <View><Text>User valid</Text></View> : <Text>Username are incorrect</Text>
                                }
                            </View>)
                        : null


                } */}

        <TouchableOpacity>
          <View style={styles.passconatiner}>
            <Ionicons name="key-outline" style={styles.passkey} />
            <Text style={styles.passtext}>Forgate password</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.account}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.create}>Create</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.widthcontainer}>
          <View style={styles.orwidth}></View>
          <Text style={styles.ortext}>Or</Text>
          <View style={styles.orwidth}></View>
        </View>

        <View style={styles.loginwidthcontainer}>
          <TouchableOpacity>
            <View style={styles.google}>
              <Image
                source={require('../Data/images/google.png')}
                style={styles.googlelogo}
              />
              <Text style={styles.loginwidthtext}>
                Login with
                <Text style={{color: 'red'}}> G</Text>
                <Text style={{color: 'green'}}>o</Text>
                <Text style={{color: 'gold'}}>o</Text>
                <Text style={{color: 'red'}}>g</Text>
                <Text style={{color: 'blue'}}>l</Text>
                <Text style={{color: 'green'}}>e</Text>
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.google}>
              <Ionicons name="logo-facebook" style={styles.facebooklogo} />
              <Text style={styles.loginwidthtext}>
                Login with
                <Text style={{color: 'blue'}}> Facebook</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.learnmorecontainer}>
          <TouchableOpacity onPress={LearnMore}>
            <Text style={styles.learnmore}>Learn more? </Text>
          </TouchableOpacity>
          <Text style={styles.about}>about Teach INDIA </Text>
        </View>
      </View>
      {learnmore ? (
        <ScrollView style={styles.learnmoretextcontainer}>
          <Text style={styles.learnmoretext}>
            {' '}
            Welcome to Learn INDIA i hope you are well this app is specialy for
            Home tution app all parents are looking for home tution teacher and
            teacher's are also looking for students so teacher's can teach
            students and earn own pockate money so i am designing this app i
            hope will love it. The Teach For India Fellowship is a teaching
            programme that connects far-reaching social change with invaluable
            personal development. A teacher’s influence on their students’ lives
            is undeniable. Youths are the future of the nation, who are
            responsible for carrying out vital duties across several domains and
            serving society this way or another. What influences them to do
            something great in life? Besides parents, whose credit is it when
            the youth today grow up to be beautiful human beings tomorrow? It is
            the teacher! Teachers are builders of a better tomorrow. They shape
            the youths today and help them achieve something great in life. What
            does it take to be a good teacher? What are the essential qualities
            he possesses that are enough to influence the students? What impact
            is he/she capable of putting on a thank you all
          </Text>
          <TouchableOpacity onPress={LearnClose}>
            <View style={styles.closeokcontainer}>
              <Text style={styles.learnok}>Ok</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      ) : null}
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  main: {
    width: 393,
    height: 520,
    backgroundColor: Colors.green,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  nav: {
    backgroundColor: Colors.keshri,
    height: 120,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },

  logocontainer: {
    height: 100,
    width: 200,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
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
    margin: 12,
    fontSize: 20,
    fontWeight: '400',
    alignSelf: 'center',
    borderColor: 'white',
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
    backgroundColor: Colors.keshri,
  },
  account: {
    fontSize: 20,
    fontWeight: '300',
    color: Colors.red,
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
    borderColor: Colors.blue,
  },
  passconatiner: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: -15,
  },
  passkey: {
    fontSize: 18,
    color: Colors.black,
    marginTop: 3.5,
  },
  passtext: {
    fontSize: 16,
    color: Colors.red,
    marginLeft: 5,
    fontWeight: '400',
  },
  widthcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  orwidth: {
    borderBottomWidth: 1,
    width: 170,
    margin: 5,
    borderColor: Colors.keshri,
  },
  ortext: {
    fontSize: 17,
    color: Colors.blue,
  },
  loginwidthcontainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    margin: 20,
  },
  google: {
    borderWidth: 0.5,
    width: 300,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    margin: 7,
  },
  loginwidthtext: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.black,
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  googlelogo: {
    height: 22,
    width: 22,
    marginLeft: 40,
  },
  facebooklogo: {
    fontSize: 26,
    color: Colors.blue,
    marginLeft: 38,
  },
  learnmorecontainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  learnmore: {
    fontSize: 16,
    color: Colors.blue,
    fontWeight: '400',
  },
  about: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  paserror: {
    fontSize: 16,
    fontWeight: '400',
    color: 'red',
    marginLeft: 220,
    marginTop: -12,
  },
  learnmoretextcontainer: {
    marginTop: -250,
    borderWidth: 2,
    borderColor: Colors.keshri,
    backgroundColor: 'white',
    margin: 5,
    height: 243,
  },
  learnmoretext: {
    fontSize: 17,
    color: 'black',
    margin: 8,
  },

  closeokcontainer: {
    borderWidth: 2,
    borderColor: Colors.green,
    backgroundColor: Colors.keshri,
    height: 30,
    width: 40,
    alignSelf: 'flex-end',

    margin: 10,
    marginTop: -15,
  },

  learnok: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
