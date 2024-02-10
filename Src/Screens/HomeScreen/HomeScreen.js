import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
  ActivityIndicator,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#5DABB0",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={[
            styles.headingText,
            { fontSize: "15", color: "white", padding: 6 },
          ]}
        >
          Back{" "}
        </Text>
      </TouchableOpacity>
      <View style={{ padding: 10 }}>
        <Text> This is my account {auth.currentUser?.email}</Text>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          width: "30%",
          height: "5%",
          borderRadius: 9,
        }}
        onPress={handleSignOut}
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
