import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Index () {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    p: {
        fontSize: 16, //units is points
        fontWeight: "bold"
    }
})