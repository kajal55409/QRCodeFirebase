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
    Pressable
  } from 'react-native';
  import React from 'react';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import {useNavigation} from '@react-navigation/native';


  const Forgot_Password = () => {
   
    const navigation = useNavigation();
  
  
  
  
    return (
      <SafeAreaView style={{backgroundColor:'white',flex:1}}>
     
  
       
        
     <View style={{justifyContent:'center',height:'10%',alignSelf:'center',width:'120%'}}>
  <View style={{justifyContent:'space-evenly',flexDirection:'row',}}>
  <TouchableOpacity

   onPress={() => navigation.goBack()}
   >
  <Text style={[styles.headingText,{fontSize:'15',color:'grey',padding:7}]} >Back </Text>
</TouchableOpacity>
  <Text style={styles.headingText}>Forgot Password</Text>
  <Pressable onPress={()=>navigation.navigate('Login')} >
  <Text style={[styles.buttonText,{padding:5}]}>Login</Text>
  </Pressable>
  </View>
  </View>
  

  <View style={{marginTop:'10%'}}>
  <View style={[styles.Inputview,{}]}>
  <TextInput 
  placeholder='Enter Email'/>
  </View>
  </View>

  <TouchableOpacity

  
>
<Text style={[styles.headingText,{fontSize:'13',color:'grey',padding:7,marginVertical:'4%'}]} >Enter your Email and we will send you a reset link </Text>
</TouchableOpacity>

  <Pressable style={styles.button}>
  <Text style={{textAlign:'center',fontSize:16,fontWeight:'600',color:'white'}}>Submit</Text>
  </Pressable>

 
      
      </SafeAreaView>
    );
  };
  
  export default Forgot_Password;

  const styles = StyleSheet.create({

    Inputview:{
        backgroundColor:'#E8E8E8',height:50,padding:15,borderRadius:8,width:'95%',alignSelf:'center'
      },
      
      button:{
        backgroundColor:'#5DABB0',height:50,padding:15,borderRadius:25,marginTop:'10%',width:'95%',alignSelf:'center'
      },
    
      headingText:{
    
        textAlign:'center',fontSize:25,fontWeight:'600',
      
      },
      buttonText:{
        fontSize:16,fontWeight:'600',color:'#5DABB0',textAlign:'center'
    
      },
  });