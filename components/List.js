import {View,Text,StyleSheet} from "react-native"

function List({data}) {
  return (
          data.map((dataPoint)=>  <View style={styles.listStyle} key={dataPoint}><Text style={styles.text}>{dataPoint}</Text></View>)  
     
  )
}

export default List

const styles=StyleSheet.create({
    listStyle:{
        backgroundColor:"#ecd7ec",
        borderRadius:8,
        marginVertical:5,
        marginHorizontal:10,
        padding:10
    },
    text:{
        color:"#f904f1",
        textAlign:"center",
        fontSize:15
    }
})