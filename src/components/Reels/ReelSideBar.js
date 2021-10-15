import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "../../config";

export default function ReelSideBar() {
	const [isLiked, setIsLiked] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.optionContainer}>
				<View style={styles.iconContainer}>
					<TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
						{isLiked ? (
							<MaterialCommunityIcons
								name="heart"
								size={32}
								color={Colors.red}
							/>
						) : (
							<MaterialCommunityIcons
								name="heart-outline"
								size={32}
								color={Colors.light}
							/>
						)}
					</TouchableOpacity>
				</View>
				<Text style={styles.optionStatCount}>167k</Text>
			</View>

			<View style={styles.optionContainer}>
				<View style={styles.iconContainer}>
					<Image
						style={styles.icon}
						source={require("../../../assets/images/Icons/comment-outline.png")}
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
