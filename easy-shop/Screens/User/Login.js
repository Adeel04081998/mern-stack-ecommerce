import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Error";
import EasyButton from "../../Shared/StyledComponents/EasyButton";

// Context
import AuthGlobal from "../../Context/store/AuthGlobal";
import { loginUser } from "../../Context/actions/Auth.actions";
import i18n from 'i18n-js'
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";
import AsyncStorage from "@react-native-community/async-storage"


const Login = (props) => {
  const context = useContext(AuthGlobal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhoneNumber] = useState(null);

  const [error, setError] = useState("");

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      props.navigation.navigate("User Profile");
    }
  }, [context.stateUser.isAuthenticated]);

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === "" || password === "") {
      setError(i18n.t("Please fill in your credentials"));
    } else {
      loginUser(user, context.dispatch);
    }
  };
  const sendOtp = () => {
    if ( phone === "" ) {
      setError("Please fill in the form correctly");
    }
    let user = {
      phone: phone,
    }; 
    axios
      .post(`${baseURL}otp/send`, user)
      .then((res) => {
      
        const {otp}= res.data
      let set = AsyncStorage.setItem("otpCode",otp)
      console.log("set===>", set);
       
      })
      .catch((error) => {
      console.log("error=>>> otp",error);
      });
  };

//   useEffect(() => {
// console.log("useEffect");
//     let user = {
//       phone: phone,
//     }; 
//     axios
//       .post(`${baseURL}otp/verify`, user)
//       .then((res) => {
//         console.log("res=>>>> verify", res.data);
//         // alert(res)
       
//       })
//       .catch((error) => {
//       console.log("error=>>> verify",error);
//       });

  

//     return () => {
    
//     }
// }, [])

  return (
    <FormContainer title={i18n.t('Login')}>
    
      <Input
        placeholder={'Enter MobileNumber'}
        name={"password"}
        id={"password"}
        // secureTextEntry={true}
        value={phone}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <View style={styles.buttonGroup}>
        {error ? <Error message={error} /> : null}
        <EasyButton large primary onPress={() => sendOtp()}>
          <Text style={{ color: "black" }}>Login</Text>
        </EasyButton>
        <EasyButton large primary onPress={

() => props.navigation.navigate("Verify Otp")
        }>
          <Text style={{ color: "black" }}>Go to verify</Text>
        </EasyButton>
        
      </View>
      



    </FormContainer>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    alignItems: "center",
  },
  middleText: {
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default Login;
