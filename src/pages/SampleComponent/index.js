import React, { Component } from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const CombineComponent = () =>{
    return (
        <View>
            <View style={{height:50, width:50, margin:20 , backgroundColor:"#2ecc71"}}/>
            <Text style={{color:"black",padding:5}}>Muhammad Fajrin Fahlevi</Text>
            <Text style={{color:"black",padding:5}}>Vivi Lufitha Sabarini</Text> 
            <Photo  />
            <TextInput style={{borderWidth:1,margin:10}}/>
            <Boxgreen/>
            <Profile/>
        </View>
    )
  }
  
  const Photo = () =>{
    return (
      <Image source={{uri:"https://placeimg.com/100/120/tech"}} style={{margin:30,width:100,height:100}}/>
    )
  }
  
  class Boxgreen extends Component {
     render(){
       return <Text style={{padding:20}}>Ini Class Component</Text>
     }
  }
  
  class Profile extends Component {
    render(){
      return  (
        <View>
          <Image source={{uri:"https://placeimg.com/100/120/animal"}} style={{margin:30,width:100,height:100,borderRadius:50}}/>
          <Text style={{color:"black",fontSize:30}}>Ini Hewan</Text>
        </View>
      )
    }
  }

  export default CombineComponent;