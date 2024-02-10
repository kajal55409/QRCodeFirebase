import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  Box,
  Button,
  Modal,
  FormControl,
  Input,
  Center,
  VStack,
} from "native-base";

import theme from "../../../Utilities/colors/";

import { auth } from "../../../../firebase";
const Signup = () => {
  const navigation = useNavigation();
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ flex: 1, padding: 24 }}>
          <View
            style={{
              justifyContent: "center",
              height: "10%",
              alignSelf: "center",
              width: "140%",
            }}
          >
            <View
              style={{ justifyContent: "space-evenly", flexDirection: "row" }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text
                  style={[
                    styles.headingText,
                    { fontSize: "15", color: "grey", padding: 6 },
                  ]}
                >
                  Back{" "}
                </Text>
              </TouchableOpacity>
              <Text style={styles.headingText}>Sign Up</Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={[styles.buttonText, { padding: 5 }]}>Login</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ marginTop: "10%" }}>
            <View style={[styles.Inputview, {}]}>
              <TextInput
                placeholder="Name"
                value={Name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View style={[styles.Inputview, { marginTop: "5%" }]}>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View
              style={[
                styles.Inputview,
                { flexDirection: "row", marginTop: "5%" },
              ]}
            >
              <TextInput
                placeholder="Password "
                value={password}
                onChangeText={(text) => setPassword(text)}
              />

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  marginLeft: "65%",
                  color: "#5DABB0",
                }}
              >
                Show
              </Text>
            </View>

            <View
              style={[
                styles.Inputview,
                { flexDirection: "row", marginTop: "5%" },
              ]}
            >
              <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => setconfirmPassword(text)}
              />

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  marginLeft: "48%",
                  color: "#5DABB0",
                }}
              >
                Show
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: "10%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={[styles.Inputview, { width: "30%", borderRadius: 100 }]}
            >
              <Text style={styles.buttonText}> Driver</Text>
            </View>

            <View
              style={[styles.Inputview, { width: "30%", borderRadius: 100 }]}
            >
              <Text style={styles.buttonText}> Relator</Text>
            </View>

            <View
              style={[styles.Inputview, { width: "30%", borderRadius: 100 }]}
            >
              <Text style={styles.buttonText}> Admin</Text>
            </View>
          </View>

          {/* <Center> */}
          <Pressable
            style={styles.button}
            // onPress={() => {
            //   setModalVisible(!modalVisible);
            // }}
            onPress={handleSignUp}
            // onPress={() => navigation.navigate("User_Permission")}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "600",
                color: "white",
              }}
            >
              Sign Up
            </Text>
          </Pressable>
          {/* </Center> */}
          <Center>
            <Modal
              isOpen={modalVisible}
              onClose={() => setModalVisible(false)}
              avoidKeyboard
              justifyContent="flex-end"
              bottom="4"
              size="lg"
            >
              <Modal.Content>
                <Modal.CloseButton />
                {/* <Modal.Header style={{alignSelf:'center',fontWeight:'500',fontSize:20}}>User Permission </Modal.Header> */}
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 20,
                    marginVertical: "5%",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  User Permission
                </Text>
                <Modal.Body>
                  <View style={{ alignSelf: "center" }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        color: "#666666",
                      }}
                    >
                      User geolocation permission opt-in
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                        color: "#666666",
                        marginVertical: "5%",
                      }}
                    >
                      By pressing submit, you consent to geolocation permissions
                      while using the app
                    </Text>
                  </View>
                </Modal.Body>
                <View style={{ marginVertical: "8%" }}>
                  <Button
                    flex="1"
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  >
                    Accept Permissions
                  </Button>
                </View>
              </Modal.Content>
            </Modal>
          </Center>
          {/* <VStack space={8} alignItems="center">
        <Button w="104" onPress={() => {
        setModalVisible(!modalVisible);
      }}>
          Open Modal
        </Button>
        <Text textAlign="center">
          Open modal and focus on the input element to see the effect.
        </Text>
      </VStack> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  Inputview: {
    backgroundColor: "#E8E8E8",
    height: 50,
    padding: 15,
    borderRadius: 8,
  },

  button: {
    backgroundColor: "#5DABB0",
    height: 50,
    padding: 15,
    borderRadius: 25,
    marginTop: "20%",
  },

  headingText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#5DABB0",
    textAlign: "center",
  },
});
