import { View,Text, Pressable,StyleSheet} from "react-native";

function CategoryGridTile({color,title,onPress}) {
 
  return (
    <View style={[styles.gridItem,{backgroundColor:color}]}>
        <Pressable style={{flex:1}} android_ripple={{color:"#ccc"}} onPress={onPress}>
            <View style={styles.innerGridItem}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        borderRadius:8,
        height:150,
        elevation:4,
        overflow:"hidden"
    },
    innerGridItem:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:16
    },
    title:{
        fontSize:18,
        fontWeight:"bold"
    }
})