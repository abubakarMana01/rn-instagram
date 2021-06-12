import React from "react";
import { StyleSheet } from "react-native";

import PostImage from "./PostImage";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const index = ({ post }) => {
	return (
		<>
			<PostHeader post={post} />
			<PostImage post={post} />
			<PostFooter post={post} />
		</>
	);
};

export default index;

const styles = StyleSheet.create({});
