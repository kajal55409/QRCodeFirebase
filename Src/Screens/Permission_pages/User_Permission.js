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


  const User_Permission = () => {
   
    const navigation = useNavigation();
  
  
  
  
    return (
      <SafeAreaView style={{backgroundColor:'#5DABB0',flex:1}}>
     
  
       
        
  
<View style={styles.cardview}>
<View style={{alignSelf:'center'}}>

<Text style={{fontWeight:'600',fontSize:30,marginVertical:'5%',textAlign:'center'}}> User Permission</Text>
            <Text style={{fontSize:16,fontWeight:'700',color:'#666666',alignSelf:'center'}}>
            User geolocation permission opt-in
            </Text>
            <Text style={{fontSize:16,fontWeight:'500',color:'#666666',marginVertical:'5%',textAlign:'center',marginHorizontal:'7%'}}>
            By pressing submit, you consent to geolocation permissions while using the app
            </Text>

            </View>

            <Pressable style={styles.button} onPress={()=>navigation.navigate('Thank_You')} >
  <Text style={{textAlign:'center',fontSize:16,fontWeight:'600',color:'white'}}>Accept Permissions</Text>
  </Pressable>


  <TouchableOpacity

onPress={() => navigation.goBack()}
>
<Text style={[styles.headingText,{fontSize:'15',color:'grey',padding:16,textAlign:'center',color:"#5DABB0",fontWeight:'700'}]} >Go Back </Text>
</TouchableOpacity>
</View>
  
      
      </SafeAreaView>
    );
  };
  
  export default User_Permission;

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
      backgroundColor:'#5DABB0',height:50,padding:15,borderRadius:25,marginTop:'28%',width:'90%',alignSelf:'center'
    }
  });