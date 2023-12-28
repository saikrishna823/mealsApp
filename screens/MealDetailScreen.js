import {View,Text,Image,StyleSheet,FlatList,ScrollView} from "react-native";
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealInfo from "../components/MealInfo";
import List from "../components/List";
import Subtitle from "../components/Subtitle";
import IconButton from "../components/IconButton";
import { FavouriteContext } from "../store/context/favourite-context";
function MealDetailScreen({route,navigation}) {
 const mealId=route.params.mealId;
 const selectedMeal=MEALS.find((meal)=>meal.id===mealId);
const favouriteMealCtx=useContext(FavouriteContext)
const isMealFavourite=favouriteMealCtx.ids.includes(mealId);
 function changeFavouriteHandler(){
   if(isMealFavourite){
    favouriteMealCtx.removeFavourite(mealId);
   }
   else{
    favouriteMealCtx.addFavourite(mealId)
   }
 }
 useLayoutEffect(()=>{
  const mealTitle=MEALS.find((meal)=>meal.id===mealId).title;
  navigation.setOptions({
      title:mealTitle,
      headerRight:()=> <IconButton icon={isMealFavourite?"star":"star-outline"} color="white"  onPress={changeFavouriteHandler}/>
  })
},[mealId,navigation,changeFavouriteHandler])
  return (
   <ScrollView style={styles.rootContainer}>
      <View style={styles.mealContainer}>
        <Image  source={{uri:selectedMeal.imageUrl}} style={styles.imageStyle}/>
        <Text style={styles.mealTitle}>{selectedMeal.title}</Text>
        <MealInfo 
          affordability={selectedMeal.affordability}
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
        />
      </View>
      <View>
         <Subtitle>Ingredients</Subtitle>
           <List data={selectedMeal.ingredients}/>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps}/>
      </View>
   </ScrollView>
  )
}

export default MealDetailScreen

const styles=StyleSheet.create({
  rootContainer:{
    flex:1,
    marginHorizontal:10,
    marginBottom:33
  },
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
  marginVertical:5,
   fontSize:18,
   fontWeight:"bold",
   textAlign:"center"
}

})