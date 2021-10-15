import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../config";

export default function PostsCustomHeader({ navigation, headerTitle }) {
	return (
		<View style={styles.headerContainer}>
			<TouchableOpacity
				activeOpacity={0.8}
				style={styles.backIconContainer}
				onPress={navigation.goBack}
			>
				<MaterialCommunityIcons
					name="chevron-left"
					size={35}
					color={Colors.light}
				/>
			</TouchableOpacity>
			<Text style={styles.headerText}>{headerTitle}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		height: 55,
		backgroundColor: Colors.dark,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 0,
		width: "100%",
		paddingHorizontal: 10,
	},
	backIconContainer: {
		position: "absolute",
		left: 0,
	},
	headerText: {
		fontSize: 20,
		fontWeight: Platform.OS === "ios" ? "600" : "700",
		color: Colors.light,
	},
});
