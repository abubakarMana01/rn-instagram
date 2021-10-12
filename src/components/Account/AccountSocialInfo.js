import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Styles } from "../../config";

export default function AccountSocialInfo() {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}></View>
			<View style={styles.profileStatsContainer}>
				<View style={styles.profileStats}>
					<View style={styles.statContainer}>
						<Text style={styles.statNumber}>1</Text>
						<Text style={styles.statName}>Posts</Text>
					</View>
					<View style={styles.statContainer}>
						<Text style={styles.statNumber}>938</Text>
						<Text style={styles.statName}>Followers</Text>
					</View>
					<View style={styles.statContainer}>
						<Text style={styles.statNumber}>884</Text>
						<Text style={styles.statName}>Following</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: 15,
		paddingBottom: 5,
	},
	imageContainer: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: Colors.grey,
	},
	profileStatsContainer: {
		flex: 1,
		alignItems: "center",
		marginLeft: 20,
	},
	profileStats: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "90%",
	},
	statNumber: {
		textAlign: "center",
		fontSize: 18,
		fontWeight: Styles.bold,
		color: Colors.light,
	},
	statName: {
		textAlign: "center",
		fontSize: 14,
		fontWeight: Styles.medium,
		color: Colors.light,
	},
});
