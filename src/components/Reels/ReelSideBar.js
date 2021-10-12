import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../config";

export default function ReelSideBar() {
	return (
		<View style={styles.container}>
			<View style={styles.optionContainer}>
				<View style={styles.iconContainer}>
					<MaterialCommunityIcons
						name="heart-outline"
						size={32}
						color={Colors.light}
					/>
				</View>
				<Text style={styles.optionStatCount}>167k</Text>
			</View>

			<View style={styles.optionContainer}>
				<View style={styles.iconContainer}>
					<Image
						style={styles.icon}
						source={{
							uri: "https://img.icons8.com/material-outlined/60/ffffff/speech.png",
						}}
					/>
				</View>
				<Text style={styles.optionStatCount}>167k</Text>
			</View>

			<View style={styles.optionContainer}>
				<View style={styles.iconContainer}>
					<Ionicons
						name="ios-paper-plane-outline"
						size={27}
						color={Colors.light}
					/>
				</View>
			</View>
			<View style={styles.optionContainer}>
				<View style={styles.iconContainer}>
					<MaterialCommunityIcons
						name="dots-vertical"
						size={30}
						color={Colors.light}
					/>
				</View>
			</View>
			<View style={styles.optionContainer}>
				<View style={styles.iconContainer}>
					<Image
						style={{
							width: 30,
							height: 30,
							borderColor: Colors.light,
							borderWidth: 3,
							borderRadius: 5,
						}}
						source={{
							uri: "https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
						}}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	optionContainer: {
		marginTop: 24,
	},
	optionStatCount: {
		color: Colors.light,
		fontSize: 14,
	},
	iconContainer: {
		width: 32,
		height: 32,
	},
	icon: {
		width: "100%",
		height: "100%",
	},
});
