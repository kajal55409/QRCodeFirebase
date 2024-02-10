import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Authentication/Login/Login";
import Signup from "../Screens/Authentication/Signup/Signup";
import User_Permission from "../Screens/Permission_pages/User_Permission";
import Forgot_Password from "../Screens/Authentication/Forgot_Password/Forgot_Password";
import Thank_You from "../Screens/Permission_pages/Thank_You";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import React, { lazy, Suspense } from "react";
// import Camera from "../Screens/QR_Code/Camera";
// import Signup from '../Screens/Signup/Signup';

const Camera = lazy(() => import("../Screens/QR_Code/Camera"));
const Stack = createNativeStackNavigator();

const Screen_navigation = () => {
  return (
    <Suspense fallback={<Text>Loading........ </Text>}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Forgot_Password" component={Forgot_Password} />
          <Stack.Screen name="User_Permission" component={User_Permission} />
          <Stack.Screen name="Thank_You" component={Thank_You} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default Screen_navigation;

const styles = StyleSheet.create({});
