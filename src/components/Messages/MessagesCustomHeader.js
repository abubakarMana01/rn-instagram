import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import { Colors, Styles } from "../../config";

const MessagesCustomHeader = ({ messagePress, handleBackNavigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.headerLeft}>
				<TouchableOpacity onPress={handleBackNavigation}>
					<AntDesign name="arrowleft" size={25} color={Colors.light} />
				</TouchableOpacity>
				<Text numberOfLines={1} style={styles.username}>
					abubakr_mana_
				</Text>
				<MaterialCommunityIcons
					name="chevron-down"
					color={Colors.light}
					size={25}
				/>
			</View>

			<View style={styles.headerIcons}>
				<TouchableOpacity style={styles.iconContainer}>
					<Feather name="video" size={25} color={Colors.light} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconContainer} onPress={messagePress}>
					<MaterialCommunityIcons
						name="pencil-box-multiple"
						size={25}
						color={Colors.light}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MessagesCustomHeader;

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
		alignItems: "center",
		maxWidth: "60%",
	},
	headerIcons: {
		flexDirection: "row",
	},
	iconContainer: {
		marginRight: 15,
	},
	username: {
		fontWeight: Styles.bold,
		marginLeft: 25,
		fontSize: 22,
		color: Colors.light,
	},
});
