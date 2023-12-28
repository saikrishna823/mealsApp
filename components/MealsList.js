import {View,StyleSheet,FlatList} from "react-native"
import MealItem from '../components/MealItem';
import { useNavigation } from "@react-navigation/native";
function MealsList({items}) {
   const navigation=useNavigation();
    function renderMeals(mealData){
        function pressHandler(){
            navigation.navigate("MealDetailScreen",{
               mealId:mealData.item.id
            })
        }
    
        return <MealItem 
        title={mealData.item.title} 
        imageUrl={mealData.item.imageUrl} 
        affordability={mealData.item.affordability}
        duration={mealData.item.duration}
        complexity={mealData.item.complexity}

        onPress={pressHandler}
        />
    }
  return (
    <View style={styles.container}>
       <FlatList data={items} keyExtractor={(item)=>item.id} renderItem={renderMeals}/>
    </View>
  )
}

export default MealsList

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})