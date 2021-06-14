import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Story = ({
	imageUri,
	width = 70,
	height = 70,
	borderVisible = true,
	showPlus = false,
}) => {
	return (
		<>
			{borderVisible && (
				<LinearGradient
					colors={["#bc2a8d", "#e95950", "#fccc63"]}
					style={[
						styles.container,
						{
							width,
							height,
							borderRadius: width / 2,
							borderColor: borderVisible ? "purple" : "#fff",
						},
					]}
				>
					<View style={[styles.storyImage, { borderRadius: width / 2 }]}>
						<Image
							style={[styles.storyImage, { borderRadius: width / 2 }]}
							source={{ uri: imageUri }}
						/>
					</View>
				</LinearGradient>
			)}

			{!borderVisible && (
				<View
					style={[
						styles.storyImage,
						{ borderRadius: width / 2, width, height },
					]}
				>
					<Image
						style={[styles.storyImage, { borderRadius: width / 2 }]}
						source={{ uri: imageUri }}
					/>
					{showPlus && (
						<View style={styles.plusIcon}>
							<MaterialCommunityIcons name="plus" size={15} color="#fff" />
						</View>
					)}
				</View>
			)}
		</>
	);
};

export default Story;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		padding: 1.5,
	},
	storyImage: {
		width: "100%",
		height: "100%",
		padding: 3,
		margin: 0,
		backgroundColor: "#fff",
	},
	plusIcon: {
		position: "absolute",
		right: 0,
		bottom: 0,
		backgroundColor: "dodgerblue",
		borderRadius: 50,
		borderWidth: 3,
		borderColor: "#fff",
	},
});
