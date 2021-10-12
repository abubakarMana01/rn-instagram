import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Colors } from "../config";
import { auth } from "../config/firebase";

const HomeCustomHeader = ({ messagePress }) => {
	const handleLogout = () => {
		auth.signOut();
	};

	return (
		<View style={styles.container}>
			<Image
				style={styles.icon}
				resizeMode="contain"
				source={require("../../assets/images/header-logo.png")}
			/>
			<View style={styles.headerIcons}>
				<TouchableOpacity style={styles.iconContainer} onPress={handleLogout}>
					<FontAwesome name="plus-square-o" size={26} color={Colors.light} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconContainer} onPress={messagePress}>
					<Image
						source={{
							uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
						}}
						style={{ width: 26, height: 26 }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default HomeCustomHeader;

const styles = StyleSheet.create({
	container: {
		height: 55,
		backgroundColor: Colors.dark,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 0,
		width: "100%",
		paddingHorizontal: 10,
	},
	headerIcons: {
		flexDirection: "row",
	},
	iconContainer: {
		marginHorizontal: 11,
	},
	icon: {
		width: 115,
		height: 50,
	},
});
