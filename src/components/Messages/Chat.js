import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors, Styles } from "../../config";

const Chat = ({ username, imageUri, lastSeen }) => {
	return (
		<TouchableOpacity activeOpacity={0.5} style={styles.container}>
			<View style={styles.profileContainer}>
				<Image
					source={{
						uri: imageUri,
					}}
					style={styles.profilePicture}
				/>
				<View style={styles.userInfo}>
					<Text style={styles.username}>{username}</Text>
					<Text style={styles.lastSeen}>{lastSeen}</Text>
				</View>
			</View>
			<MaterialCommunityIcons
				name="camera-outline"
				color={Colors.light}
				size={25}
			/>
		</TouchableOpacity>
	);
};

export default Chat;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	profileContainer: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	profilePicture: {
		width: 45,
		height: 45,
		borderRadius: 22.5,
	},
	username: {
		fontWeight: Styles.medium,
		color: Colors.light,
	},
	userInfo: {
		marginLeft: 10,
	},
	lastSeen: {
		color: Colors.grey,
		marginTop: 3,
	},
});
