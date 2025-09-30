import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function PostSnippet({ postData }) {
    return (
        <View>
            {/* author info and time */}

            <Text>{postData.data.text}</Text>

            {/* interactions */}
            <View className="flex flex-row justify-end items-center gap-6">
                <TouchableOpacity>
                    <FontAwesome name="heart" size={24} color="black" />
                </TouchableOpacity>
                <Pressable>
                    <FontAwesome name="comments-o" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    )
}