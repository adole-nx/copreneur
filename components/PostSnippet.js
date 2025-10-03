import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from '../theme/colors';
import { TimePast } from '../utilis/time-past';

export default function PostSnippet({ postData }) {
    const [commentInput, setCommentInput] = useState("");
    const [showCommentBox, setShowCommentBox] = useState("");
    return (
        <View className="flex gap-2">
            {/* author info and time */}
            <View className="flex flex-row justify-between items-center">
                {/* left: author bio */}
                <Link href="/user-profile">
                    <View className="flex flex-row items-center">
                        <View style={styles.profileCircle}>
                            <Text>{postData.author.firstName[0]}</Text>
                        </View>
                        <Text className="font-bold">{`${postData.author.firstName} ${postData.author.lastName}`}</Text>
                    </View>
                </Link>

                {/* right: time past since post was made */}
                <Text className="text-neutral-700">{TimePast(postData.data.createdAt)}</Text>

            </View>

            <Text className="font-semibold text-md text-neutral-700">{postData.data.text}</Text>

            {/* interactions */}
            <View className="flex flex-row justify-end items-center gap-6">
                <TouchableOpacity>
                    <FontAwesome name="heart" size={24} color="black" />
                </TouchableOpacity>
                <Pressable onPress={() => setShowCommentBox(!showCommentBox)}>
                    <FontAwesome name="comments-o" size={24} color="black" />
                </Pressable>
            </View>

            {/* comment box */}
            {showCommentBox &&
            <View className="">
                <TextInput
                    keyboardType="default"
                    style={styles.input}
                    multiline={true}
                    value={commentInput} // assign the current value of the textinput
                    onChangeText={(text) => setCommentInput(text)}
                />

            </View>}

            {/* recent comment */}
        </View>
    )
}

const styles = StyleSheet.create({
    profileCircle: {
        display: "flex",
        height: 48,
        width: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.brown300
    },
    input: {
        borderWidth: 1,
        borderColor: colors.brown300,
        borderRadius: 4,
        fontSize: 16,
        paddingHorizontal: 6,
    },
});