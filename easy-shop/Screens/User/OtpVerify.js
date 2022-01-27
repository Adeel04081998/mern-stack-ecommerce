import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
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



const OtpVerify = (props) => {


  let initState = {
    'refsArr': ["", "", "", "", ""],
    'otpCode': []

  }
  const [state, setState] = useState(initState);


  useEffect(() => {


    AsyncStorage.getItem("otpCode")
      .then((res) => {
        // console.log("otp res useeffect=>>", res);
        const a = [...res];
        console.log("a=>>>>>>", a)


        setState((pre) => (
          {
            ...pre,
            otpCode: a
          }
        ))

      })
      .catch((error) => console.log(error));

    // let user = {
    //   phone: phone,
    // }; 
    // axios
    //   .post(`${baseURL}otp/verify`, user)
    //   .then((res) => {

    //   //  setState((pre)({
    //   //    ...pre,
    //   //    otpCode :res.data
    //   //  }))

    //   })
    //   .catch((error) => {
    //   console.log("error=>>> verify",error);
    //   });



    return () => {

    }
  }, [])

  return (




    <FormContainer title={'Verify Otp'}
      style={{
        marginTop: 30,
        // marginBottom: 400,
        // width: width,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}
    >
      <View style={{ flex: 1, top: 20 }}>
        <View style={{ flexDirection: 'row', }}>



          {
            console.log("state=>>", state),
            (state.refsArr || []).map((val, i) => {
              if (i < 4) return <Input
                value={state.otpCode}

                name={"password"}
                id={"password"}
                // secureTextEntry={true}
                // value={phone}
                onChangeText={(text) => setPhoneNumber(text)}
                style={{

                  borderWidth: 2,
                  borderColor: '#9efd38',
                  borderRadius: 5,
                  paddingVertical: 0,
                  height: 50,
                  width: 70,
                  marginRight: 10,
                  fontSize: 12,
                  textAlign: 'center',
                  color: '#000'
                }}
              />



            })
          }

        </View>



        <View style={{ justifyContent: "center", alignSelf: "center", marginTop: 20 }}>

          <EasyButton large primary onPress={

            () => props.navigation.navigate("Verify Otp")
          }>
            <Text style={{ color: "black" }}>Verify</Text>
          </EasyButton>

        </View>


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

export default OtpVerify;
