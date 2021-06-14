import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProfilePicture from "../ProfilePicture";

const PostHeader = ({ post }) => {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<ProfilePicture imageUri={post.user.imageUri} width={40} height={40} />
				<Text style={styles.username}>{post.user.username}</Text>
			</View>
			<MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
		</View>
	);
};

export default PostHeader;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		padding: 10,
	},
	profile: {
		width: "100%",
		height: 50,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	username: {
		fontWeight: "700",
		fontSize: 14,
		marginLeft: 5,
	},
});
