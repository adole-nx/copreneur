import { StyleSheet, Text, View } from "react-native";


export default function Index () {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "brown"
        }}>
            <View style={{
                flex: 2,
                backgroundColor: "white"
            }}>
                <Text>Copreneur</Text>
                <Text>Where developer meet entrepreneurs</Text>
            </View>

            <View style={{
                flex: 2,
                backgroundColor: "yellow"
            }}>
                <Text style={styles.p}>I am an entrepreneur</Text>
            </View>

            <View style={{
                flex: 2,
                backgroundColor: "oldlace"
            }}>
                <Text style={styles.p}>I am a developer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    p: {
        fontSize: 16, //units is points
        fontWeight: "bold"
    }
})