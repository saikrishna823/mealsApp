import {View,Text,StyleSheet} from "react-native"

function MealInfo({affordability,duration,complexity}) {
  return (   
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>     
     </View>
  )
}

export default MealInfo

const styles=StyleSheet.create({

    details:{
        marginBottom:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    detailItem:{
         fontSize:12
    }
})