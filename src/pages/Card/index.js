import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import imgMac from '../../../asset/image/apple-macbook.jpg'

const Card = () =>{
    return(
  <View style={styles.container}>
        <View style={styles.row}>
            <Image source={imgMac} style={{width:'100%',height:'50%',borderRadius:8}}/>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:25}}>New Macbook Pro 2020</Text>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,color:"#F2994A"}}>Rp.21,000,000</Text>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,color:"#34495e"}}>Jakarta Barat</Text>
            <View style={{backgroundColor:"#2ecc71",marginTop:20,paddingVertical:10,borderRadius:25}}>
              <Text style={{fontSize:15,fontWeight:"bold",textAlign:"center"}}>Beli Sekarang</Text>
            </View>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      text:{
        color: "#34495e",
        fontSize:30,
        fontWeight:'bold',
        marginLeft:20,
        marginTop:20,
      },
      container: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap:'wrap'  
    },
    row:{ 
         padding:20,
         marginTop:20,
         backgroundColor:'#F1F1F1',
         width:'80%',
         height:380,
         borderRadius:8
    }
  })  

  export default Card;