import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const PostFooter = ({ post }) => {
	const [isLiked, setIsLiked] = useState(false);
	const [likesCount, setLikesCount] = useState(post.likes);

	const handleLike = () => {
		setIsLiked(!isLiked);
		setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
	};

	return (
		<View style={styles.container}>
			<View style={styles.iconsContainer}>
				<View style={styles.icon}>
					<TouchableWithoutFeedback onPress={handleLike}>
						{isLiked ? (
							<Ionicons name="heart" size={35} color="#e73838" />
						) : (
							<Ionicons name="heart-outline" size={35} color="#545454" />
						)}
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.icon}>
					<FontAwesome name="comment-o" size={30} color="#545454" />
				</View>
				<View style={styles.icon}>
					<Ionicons name="ios-paper-plane-outline" size={30} color="#545454" />
				</View>
			</View>
			<Text style={styles.likes}>{likesCount} likes</Text>
			<Text style={styles.caption}>
				<Text style={styles.username}>{post.user.username} </Text>
				{post.caption}
			</Text>
			<Text style={styles.timePosted}>{post.postedAt}</Text>
		</View>
	);
};

export default PostFooter;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	iconsContainer: {
		flexDirection: "row",
		alignItems: "flex-start",
	},
	icon: {
		marginRight: 15,
	},
	likes: {
		fontWeight: "bold",
		marginVertical: 5,
	},
	username: {
		fontWeight: "bold",
	},
	caption: {
		fontWeight: "400",
	},
	timePosted: {
		color: "#00000075",
		fontSize: 12,
		marginTop: 5,
	},
});
