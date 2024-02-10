import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("HomeScreen");
      }
    });
    return unsubscribe;
  });

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
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
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: "600",
              marginTop: "50%",
            }}
          >
            Log In
          </Text>

          <View style={{ marginTop: "20%" }}>
            <View style={[styles.Inputview, { bottom: "20%" }]}>
              <TextInput
                placeholder="Email "
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View
              style={[
                styles.Inputview,
                { flexDirection: "row", justifyContent: "space-between" },
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
                  // marginLeft: "65%",
                  color: "#5DABB0",
                }}
              >
                Show
              </Text>
            </View>
          </View>

          <Pressable
            //  onPress={() => navigation.navigate("Forgot_Password")}
            // onPress={() => navigation.navigate("HomeScreen")}
            onPress={() => navigation.navigate("Camera")}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#5DABB0",
                textAlign: "right",
                marginTop: "4%",
              }}
            >
              Forgot your password?
            </Text>
          </Pressable>

          <Pressable onPress={handleLogin} style={styles.button}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "600",
                color: "white",
              }}
            >
              Log In
            </Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#5DABB0",
                textAlign: "center",
                marginTop: "4%",
              }}
            >
              Don't have account ? SIGN UP
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
    marginTop: "15%",
  },
});
