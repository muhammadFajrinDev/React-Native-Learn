import React, { Component } from 'react';
import { View,ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import Card from './pages/Card';
import Flexbox from './pages/Flexbox';

const App = () =>{
  return (
    <View style={{height:"100%",backgroundColor:"#2d3436"}}>
      <ScrollView>
      {/* <SampleComponent/>  */}
      {/* <Card/>
      <Card/>
      <Card/> */}
      <Flexbox/>
      </ScrollView>
    </View>
  ) 
}


export default App;