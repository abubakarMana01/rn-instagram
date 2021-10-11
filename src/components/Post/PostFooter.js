import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { Colors, Styles } from "../../config";
const PostFooter = ({ post }) => {
	const [isLiked, setIsLiked] = useState(false);
	const [likesCount, setLikesCount] = useState(post.likes);
	const [isBookmarked, setIsBookmarked] = useState(false);

	const handleLike = () => {
		setIsLiked(!isLiked);
		setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
	};

	const handleBookmark = () => {
		setIsBookmarked(!isBookmarked);
	};

	return (
		<View style={styles.container}>
			<View style={styles.iconsContainer}>
				<View style={styles.iconsLeft}>
					<View style={styles.icon}>
						<TouchableWithoutFeedback onPress={handleLike}>
							{isLiked ? (
								<Ionicons name="heart" size={30} color="#e73838" />
							) : (
								<Ionicons name="heart-outline" size={30} color={Colors.light} />
							)}
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.icon}>
						<FontAwesome name="comment-o" size={25} color={Colors.light} />
					</View>
					<View style={styles.icon}>
						<Ionicons
							name="ios-paper-plane-outline"
							size={25}
							color={Colors.light}
						/>
					</View>
				</View>

				<View style={styles.bookmarkIcon}>
					<TouchableWithoutFeedback onPress={handleBookmark}>
						{isBookmarked ? (
							<Ionicons name="bookmark" size={25} color={Colors.light} />
						) : (
							<Ionicons
								name="bookmark-outline"
								size={25}
								color={Colors.light}
							/>
						)}
					</TouchableWithoutFeedback>
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
	},
	iconsLeft: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	icon: {
		marginRight: 13,
		width: 30,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	bookmarkIcon: {
		width: 30,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	likes: {
		fontWeight: Styles.bold,
		marginVertical: 5,
		color: Colors.light,
	},
	username: {
		fontWeight: Styles.bold,
	},
	caption: {
		fontWeight: Styles.normal,
		color: Colors.light,
	},
	timePosted: {
		color: Colors.grey,
		fontSize: 11,
		marginTop: 5,
		fontWeight: Styles.normal,
	},
});
