import React from "react";
import { NativeBaseProvider, Box,Text } from "native-base";
import Screen_navigation from "./Src/Route/Screen_navigation";

export default function App() {
  return (
    <NativeBaseProvider >

  {/* return <Text italic>
      <Text bold>Taj Mahal</Text> is in Agra.
    </Text>; */}

{/*     
<Text style={{color:'red',padding:50}}> hello there   kajak</Text> */}
<Screen_navigation />
    </NativeBaseProvider>
  );
}