import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import {Ionicons} from "@expo/vector-icons";
import FavouriteContextProvider from './store/context/favourite-context';
const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();

function DrawerNavigator(){
  return  <Drawer.Navigator
    screenOptions={
      {
        headerStyle:{
          backgroundColor:"#ef0b90",
    },
    headerTintColor:"white",
    headerTitleAlign:"center",
    sceneContainerStyle:{
      backgroundColor:"#e9c3ec"
    },
    
    drawerActiveBackgroundColor:""
      }
    }
    
  >
  <Drawer.Screen 
  name="Categories" 
  component={CategoriesScreen} 
  options={{
    title:"All  Categories",
    drawerIcon:({color,size})=><Ionicons  name='list' color={color} size={size}/>
}}
  />
  <Drawer.Screen 
  name="Favourites" 
  component={FavouritesScreen} 
  options={{
    drawerIcon:({color,size})=><Ionicons  name="star" color={color} size={size}/>
  }}
 />
</Drawer.Navigator>
}
export default function App() {
  return (
   <>
     <StatusBar style='light'/>
     <FavouriteContextProvider >
      <NavigationContainer >
        <Stack.Navigator screenOptions={
          {
            headerStyle:{
              backgroundColor:"#ef0b90",
        },
        headerTintColor:"white",
        headerTitleAlign:"center",
        contentStyle:{
          backgroundColor:"#e9c3ec"
        }
          }
        }>
         
          <Stack.Screen  name="DrawerScreen" component={DrawerNavigator}
             options={{
              headerShown:false
             }}
          />

          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
          <Stack.Screen name="MealDetailScreen" component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </FavouriteContextProvider>
   </>
  
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
