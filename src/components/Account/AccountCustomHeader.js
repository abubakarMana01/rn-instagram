import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
	Feather,
	FontAwesome,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Colors, Styles } from "../../config";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function AccountCustomHeader() {
	const { currentUser } = useAuthContext();

	return (
		<View style={styles.container}>
			<View style={styles.headerLeft}>
				<Text numberOfLines={1} style={styles.username}>
					{currentUser.displayName}
				</Text>
				<View style={styles.chevronLeftContainer}>
					<MaterialCommunityIcons
						name="chevron-down"
						color={Colors.light}
						size={22}
					/>
				</View>
			</View>

			<View style={styles.headerIcons}>
				<TouchableOpacity style={styles.iconContainer}>
					<FontAwesome name="plus-square-o" size={27} color={Colors.light} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconContainer}>
					<Feather name="menu" size={27} color={Colors.light} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		height: 55,
		width: "100%",
		paddingHorizontal: 10,
	},
	headerLeft: {
		flexDirection: "row",
		alignItems: "flex-end",
		maxWidth: "65%",
		height: 25,
	},
	username: {
		fontWeight: Styles.bold,
		fontSize: 22,
		color: Colors.light,
	},
	headerIcons: {
		flexDirection: "row",
	},
	iconContainer: {
		marginLeft: 20,
	},
});
