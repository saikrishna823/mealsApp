import {View,Pressable,StyleSheet,Image,Text} from "react-native"
import MealInfo from "./MealInfo";
function MealItem({title,imageUrl,affordability,duration,complexity,onPress}) {
  return (
    <View style={styles.mealContainer}>
        <Pressable   android_ripple={{color:"#ccc"}} onPress={onPress}>
        <View >
         <Image source={{uri:imageUrl}} style={styles.imageStyle}/>
         <Text style={styles.mealTitle}>{title}</Text>
         </View>
          <MealInfo
          affordability={affordability}
          duration={duration}
          complexity={complexity}
          />
        </Pressable>
    </View>
  )
}

export default MealItem;

const styles=StyleSheet.create({
    mealContainer:{
       marginVertical:10,
       borderRadius:10,
       backgroundColor:"white",
       elevation:4,
       overflow:"hidden"
    },
    imageStyle:{
      width:"100%",
      height:200,
      borderRadius:8
  },
  mealTitle:{
      fontSize:18,
      fontWeight:"bold",
      padding:10,
      textAlign:"center"
  },
 
})