import { View,Text,FlatList} from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"


export default function CategoriesScreen({navigation}) {
    function renderCategory(category){
        function pressHandler(){
            navigation.navigate("MealsOverview",{
               categoryId:category.item.id
            })
        }

        return <CategoryGridTile title={category.item.title} color={category.item.color} onPress={pressHandler}/>
       }

  return (
    <View>
   <FlatList data={CATEGORIES} renderItem={renderCategory} keyExtractor={(category)=>category.id} numColumns="2"/>
    </View>
  )
}
