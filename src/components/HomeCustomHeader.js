import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const HomeCustomHeader = ({ messagePress }) => {
	return (
		<View
			style={{
				backgroundColor: "#fff",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				height: 55,
				borderBottomColor: "#eee",
				borderBottomWidth: 1,
				width: "100%",
				paddingHorizontal: 10,
			}}
		>
			<Image
				style={{
					width: 150,
					height: 50,
				}}
				resizeMode="contain"
				source={require("../../assets/images/logo.png")}
			/>
			<View style={styles.headerIcons}>
				<TouchableOpacity style={styles.iconContainer}>
					<Feather name="plus-square" size={25} color="black" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconContainer} onPress={messagePress}>
					<MaterialCommunityIcons
						name="facebook-messenger"
						size={25}
						color="black"
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default HomeCustomHeader;

const styles = StyleSheet.create({
	headerIcons: { flexDirection: "row" },
	iconContainer: { marginHorizontal: 7 },
});
