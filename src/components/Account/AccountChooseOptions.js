import React from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Colors, Styles } from "../../config";

export default function AccountChooseOptions() {
	return (
		<View style={styles.container}>
			<View style={styles.options}>
				<TouchableOpacity activeOpacity={0.8} style={styles.optionContainer}>
					<Text style={styles.optionText}>Edit Profile</Text>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.8} style={styles.optionContainer}>
					<Text style={styles.optionText}>Ad Tools</Text>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.8} style={styles.optionContainer}>
					<Text style={styles.optionText}>Insights</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	options: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	optionContainer: {
		height: 33,
		width: (Dimensions.get("window").width - 53) / 3,
		borderColor: Colors.darkGrey,
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
	optionText: {
		fontWeight: Styles.bold,
		color: Colors.light,
	},
});
