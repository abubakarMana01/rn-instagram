import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Colors, Styles } from "../../config";

export default function ReelFooterContent({ reel }) {
	return (
		<View style={styles.container}>
			<View style={styles.user}>
				<View style={styles.profileImgContainer}>
					<Image
						source={{ uri: reel.user.imageUri }}
						style={styles.profileImg}
					/>
				</View>
				<Text numberOfLines={1} style={styles.username}>
					__reels_of_messi
				</Text>
			</View>

			<Text numberOfLines={1} style={styles.caption}>
				1million likes😘@leomessi
			</Text>
			<Text numberOfLines={1} style={styles.music}>
				Dj Yo! {"&"} AX'EL{")"} [Remix]
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	user: {
		flexDirection: "row",
		alignItems: "center",
	},
	profileImgContainer: {
		width: 32,
		height: 32,
	},
	profileImg: {
		width: "100%",
		height: "100%",
		borderRadius: 16,
	},
	username: {
		color: Colors.light,
		fontWeight: Styles.bold,
		marginLeft: 10,
		fontSize: 15,
	},
	caption: {
		color: Colors.light,
		marginVertical: 3,
	},
	music: {
		color: Colors.light,
	},
});
