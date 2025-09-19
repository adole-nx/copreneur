import Feather from '@expo/vector-icons/Feather';
import { useFonts } from "expo-font";
import { Link } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native-web";
import { forDevelopers } from "../assets/local-data/benefits";
import { colors } from "../theme/colors";

SplashScreen.preventAutoHideAsync();

export default function Index() {
    const [loaded, error] = useFonts({
        "Polea": require("../assets/fonts/Polea.otf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return (
        <View className="px-4 pb-4 pt-8">
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={false} />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Text style={styles.brandText}>Copreneur</Text>

                {/* for developers */}
                <View style={{ backgroundColor: colors.brown100 }} className="flex flex-col gap-y-3 rounded-lg p-3">
                    <Text className="font-bold text-3xl">For Developers</Text>
                    <View className="flex flex-col gap-y-3">
                        {forDevelopers.map((item) => (
                            <View key={item.id} style={{ backgroundColor: colors.brown400 }} className="h-12 flex
                            flex-row items-center gap-4 rounded-lg px-2">
                                <Feather name="check-square" size={24} color="white" />
                                <Text className="text-lg font-semibold text-white">{item.text}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* get started */}
                <View className="min-h-24 flex flex-col gap-y-4 bg-brown-800 rounded-lg my-12">
                    <Text className="font-bold text-3xl">Get Started</Text>
                    <Text className="flex flex-row justify-between items-center gap-x-3">Whether you are an entrepreneur or developer,
                        start connecting to move your projrcts forward.</Text>

                    <View className="flex flex-row items-center gap-x-3">
                        <Link href="/signin" style={{ backgroundColor: colors.brown400 }} className="bg-black rounded-lg p-6">
                            <Text className="text-white text-xs">I have an account</Text>
                        </Link>

                        <Link href="/signup" style={{ backgroundColor: colors.brown200 }} className="rounded-lg p-6">
                            <Text className="text-white text-xs">I am new here</Text>
                        </Link>

                    </View>
                </View>

                {/* for entrepreneurs */}
                <View style={{ backgroundColor: colors.brown100 }} className="flex flex-col gap-y-3 rounded-lg p-3">
                    <Text className="font-bold text-3xl">For Developers</Text>
                    <View className="flex flex-col gap-y-3">
                        {forDevelopers.map((item) => (
                            <View key={item.id} style={{ backgroundColor: colors.brown400 }} className="h-12 flex
                            flex-row items-center gap-4 rounded-lg px-2">
                                <Feather name="check-square" size={24} color="white" />
                                <Text className="text-lg font-semibold text-white">{item.text}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    brandText: {
        fontFamily: "Polea",
        fontSize: 48,
        marginBottom: 16,
        color: colors.brown400

    }
});
