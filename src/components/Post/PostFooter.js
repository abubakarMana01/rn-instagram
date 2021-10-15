import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Image,
} from "react-native";
import {
	FontAwesome,
	Ionicons,
	MaterialCommunityIcons,
	SimpleLineIcons,
} from "@expo/vector-icons";

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
								<MaterialCommunityIcons
									name="heart"
									size={30}
									color="#e73838"
								/>
							) : (
								<MaterialCommunityIcons
									name="heart-outline"
									size={30}
									color={Colors.light}
								/>
							)}
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.icon}>
						<Image
							style={styles.iconImage}
							source={require("../../../assets/images/Icons/comment-outline.png")}
						/>
					</View>
					<View style={styles.icon}>
						<SimpleLineIcons
							name="paper-plane"
							size={24}
							color={Colors.light}
						/>
					</View>
				</View>

				<View style={styles.bookmarkIcon}>
					<TouchableWithoutFeedback onPress={handleBookmark}>
						{isBookmarked ? (
							<MaterialCommunityIcons
								name="bookmark"
								size={28}
								color={Colors.light}
							/>
						) : (
							<MaterialCommunityIcons
								name="bookmark-outline"
								size={28}
								color={Colors.light}
							/>
						)}
					</TouchableWithoutFeedback>
				</View>
			</View>

			<Text style={styles.likes}>{likesCount} likes</Text>
			<Text style={styles.caption}>
				<Text style={styles.username}>{post.user.username || post.user} </Text>
				{post.caption}
			</Text>
			<Text style={styles.timePosted}>
				{post.postedAt || post.createdAt.toDate().toDateString()}
			</Text>
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
		marginRight: 15,
		width: 30,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	iconImage: {
		width: "100%",
		height: "100%",
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
