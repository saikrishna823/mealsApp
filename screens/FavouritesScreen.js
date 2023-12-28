import {View,Text,StyleSheet} from "react-native";
import { useContext } from "react";
import { FavouriteContext } from "../store/context/favourite-context";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
function FavouritesScreen() {
    const favouriteMealsCtx=useContext(FavouriteContext);
    const favouriteMeals=MEALS.filter((meal)=>favouriteMealsCtx.ids.includes(meal.id));
  return (
    favouriteMeals.length>0? <MealsList items={favouriteMeals}/>:<View style={styles.favouriteStyle}>
        <Text style={styles.text}>No Favourites Yet</Text>
    </View>
  )
}

export default FavouritesScreen

const styles=StyleSheet.create({
    favouriteStyle:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
       fontSize:25,
       fontWeight:"bold",
       color:"#e417d9"
    }
})