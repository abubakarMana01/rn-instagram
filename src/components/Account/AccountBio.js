import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Styles } from "../../config";

export default function AccountBio() {
	return (
		<View style={styles.profileInfo}>
			<Text style={styles.displayName}>Abubakar Y Mana</Text>
			<Text numberOfLines={3} style={styles.bio}>
				Football💯, Cityzen/Cule⚽, Neymar Jr.🔥
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	profileInfo: {
		paddingHorizontal: 20,
	},
	displayName: {
		fontWeight: Styles.bold,
		color: Colors.light,
	},
	bio: {
		fontWeight: Styles.normal,
		width: "90%",
		color: Colors.light,
	},
});
