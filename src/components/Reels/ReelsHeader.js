import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Styles } from "../../config";

export default function ReelsHeader() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Reels</Text>
			<MaterialCommunityIcons
				name="camera-outline"
				color={Colors.light}
				size={30}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 15,
		paddingRight: 20,
	},
	text: {
		fontSize: 24,
		color: Colors.light,
		fontWeight: Styles.bold,
	},
});
