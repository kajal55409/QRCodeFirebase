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
    Pressable,
  } from 'react-native';
  import React from 'react';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import {useNavigation} from '@react-navigation/native';


  const Thank_You = () => {
   
    const navigation = useNavigation();
  
  
  
  
    return (
      <SafeAreaView style={{backgroundColor:'#5DABB0',flex:1}}>
     
  
       
        
  
<View style={styles.cardview}>
<View style={{alignSelf:'center'}}>

<Text style={{fontWeight:'600',fontSize:30,marginVertical:'8%',textAlign:'center'}}> Thank You!</Text>
            {/* <Text style={{fontSize:16,fontWeight:'700',color:'#666666',alignSelf:'center'}}>
            User geolocation permission opt-in
            </Text> */}
            <Text style={{fontSize:16,fontWeight:'500',color:'#666666',textAlign:'center',marginHorizontal:'7%'}}>
            Your user application has been sent in for review, if accepted, you will be emailed with your login information. Thank you!
            </Text>

            </View>

            <Pressable style={styles.button} onPress={()=>navigation.navigate('Forgot_Password')} >
  <Text style={{textAlign:'center',fontSize:16,fontWeight:'600',color:'white'}}>Home</Text>
  </Pressable>



</View>
  
      
      </SafeAreaView>
    );
  };
  
  export default Thank_You;

  const styles = StyleSheet.create({
    cardview:{
      height:'50%',
      width:'90%',
      borderRadius:10,
      backgroundColor:'white',
      alignSelf:'center',
      marginTop:'49%'
    },
    button:{
      backgroundColor:'#5DABB0',height:50,padding:15,borderRadius:25,marginTop:'15%',width:'90%',alignSelf:'center'
    }
  });