import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProfilePicture from "../ProfilePicture";
import { Colors, Styles } from "../../config";

const PostHeader = ({ post }) => {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<ProfilePicture imageUri={post.user.imageUrl} width={40} height={40} />
				<Text style={styles.username}>{post.user.username}</Text>
			</View>
			<MaterialCommunityIcons
				name="dots-vertical"
				size={24}
				color={Colors.light}
			/>
		</View>
	);
};

export default PostHeader;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	profile: {
		width: "100%",
		height: 50,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	username: {
		fontWeight: Styles.bold,
		fontSize: 16,
		marginLeft: 7,
		color: Colors.light,
	},
});
