import React, { Component } from "react";
import { Image, Text, View , StyleSheet, ScrollView} from "react-native";

class Flexbox extends Component{
    render(){
        return(
            <View>
                <View style={{backgroundColor:"#34495e",borderBottomWidth:1,borderColor:"#ecf0f1"}}>
                    <View style={{marginHorizontal:20, marginVertical:20, flexDirection:"row",alignItems:"center",}}>
                        <Image 
                        style={{width:70,height:70,borderRadius:50,borderWidth:2,borderColor:"#d63031"}}
                        source={{uri:"https://yt3.ggpht.com/ytc/AAUvwngXxFkDl0DSdASi_Q3qARjO6WH4vYpE7ljaGrsApw=s88-c-k-c0x00ffffff-no-rj"}}/>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:24,fontWeight:"bold",color:"white"}}>Rumaysho TV</Text>
                            <Text style={{fontSize:20,fontWeight:"bold",color:"white",marginTop:3}}>223 rb subscriber</Text>
                        </View>
                        <View style={{backgroundColor:"#ecf0f1",width:80,height:30, marginLeft:30,borderRadius:2}}>
                            <Text style={{textAlign:"center",marginTop:6}}>SUBSCRIBE</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",marginHorizontal:"5%"}}>
                        <Text style={styles.text}>BERANDA</Text>
                        <Text style={styles.text}>VIDEO</Text>
                        <Text style={styles.text}>PLAYLIST</Text>
                        <Text style={styles.text}>KOMUNITAS</Text>
                        <Text style={styles.text}>CHANNEL</Text>
                </View>
                <View style={{height:250,backgroundColor:"#2d3436"}}>
                    <Image style={{height:"90%",width:"100%"}} source={{uri:"https://i.ytimg.com/vi/bK9UP3YTL6Y/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtiWW_y0C7cCIAlK2eMOdkNOF5Og"}}/>
                    <View style={{backgroundColor:"#2c2c54",alignItems:"center",padding:5,position:"absolute",top:175,left:320,right:10}}>
                        <Text style={{fontSize:20,fontWeight:"bold",color:"white",textAlign:"center",backgroundColor:"black"}}>20:18</Text>
                    </View>
                </View>
                <View style={{marginHorizontal:10,marginTop:-14, flexDirection:"row",alignItems:"center",}}>
                        <Image 
                        style={{width:40,height:40,borderRadius:50,borderWidth:2,borderColor:"#d63031"}}
                        source={{uri:"https://yt3.ggpht.com/ytc/AAUvwngXxFkDl0DSdASi_Q3qARjO6WH4vYpE7ljaGrsApw=s88-c-k-c0x00ffffff-no-rj"}}/>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:14,fontWeight:"bold",color:"white"}}>Motion Graphic : Mendapatkan Dunia Dengan Ibadah - Rumaysho TV</Text>
                            <Text style={{fontSize:10,fontWeight:"bold",color:"white",marginTop:3}}>Rumaysho TV - 9,1 rb x ditonton - 5 hari yang lalu</Text>
                        </View>
                        <View style={{backgroundColor:"#ecf0f1",width:80,height:30, marginLeft:30,borderRadius:2}}>
                            <Text style={{textAlign:"center",marginTop:6}}>SUBSCRIBE</Text>
                        </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
      color: "#dfe6e9",
      fontSize:15,
      fontWeight:'bold',
      paddingVertical:15,
    }
})  

export default Flexbox;