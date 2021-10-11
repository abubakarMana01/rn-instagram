import React from "react";
import {
	StyleSheet,
	Image,
	View,
	Dimensions,
	TextInput,
	TouchableOpacity,
	Text,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AuthButton from "../../components/Auth/AuthButton";
import { Colors, Styles } from "../../config";
import ErrorMessage from "../../components/Auth/ErrorMessage";

export default function SignUpScreen({ navigation }) {
	const validationSchema = Yup.object().shape({
		email: Yup.string().required().min(3).email().trim().label("Email"),
		username: Yup.string().required().min(3).max(255).trim().label("Username"),
		password: Yup.string().required().min(6).max(255).label("Password"),
	});

	const handleSubmit = values => {
		console.log(values);
	};

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={{
						uri: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
					}}
				/>
			</View>

			<Formik
				initialValues={{ email: "", username: "", password: "" }}
				onSubmit={values => handleSubmit(values)}
				validationSchema={validationSchema}
			>
				{({ errors, handleChange, handleSubmit, values }) => (
					<View style={styles.formContainer}>
						<View style={styles.textInputContainer}>
							<TextInput
								placeholderTextColor="#ffffff80"
								style={styles.textInput}
								placeholder="Email"
								keyboardType="default"
								autoCapitalize="none"
								value={values.email}
								onChangeText={handleChange("email")}
							/>
						</View>
						{errors.email && <ErrorMessage error={errors.email} />}

						<View style={styles.textInputContainer}>
							<TextInput
								placeholderTextColor="#ffffff80"
								style={styles.textInput}
								placeholder="Username"
								keyboardType="default"
								autoCapitalize="none"
								value={values.username}
								onChangeText={handleChange("username")}
							/>
						</View>
						{errors.username && <ErrorMessage error={errors.username} />}

						<View style={styles.textInputContainer}>
							<TextInput
								placeholderTextColor="#ffffff80"
								style={styles.textInput}
								placeholder="Password"
								secureTextEntry
								autoCapitalize="none"
								value={values.passwprd}
								onChangeText={handleChange("passwprd")}
							/>
						</View>
						{errors.password && <ErrorMessage error={errors.password} />}

						<View style={styles.buttonContainer}>
							<AuthButton title="Sign Up" onPress={handleSubmit} />
						</View>
					</View>
				)}
			</Formik>

			<TouchableOpacity
				style={styles.authOption}
				onPress={() => navigation.navigate("Login")}
			>
				<Text style={styles.authOptionText}>
					Already have an account?{" "}
					<Text style={styles.authOptionLink}>Login</Text>
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		height: Dimensions.get("window").height / 3.5,
		justifyContent: "center",
		alignItems: "center",
	},
	textInputContainer: {
		borderColor: Colors.grey,
		borderWidth: 1,
		height: 40,
		justifyContent: "center",
		marginVertical: 5,
		borderRadius: 5,
	},
	textInput: {
		paddingHorizontal: 10,
		color: Colors.light,
	},
	buttonContainer: {
		marginVertical: 50,
	},
	authOption: {
		alignSelf: "center",
	},
	authOptionText: {
		textAlign: "center",
		fontWeight: Styles.medium,
		color: Colors.light,
	},
	authOptionLink: {
		fontWeight: Styles.bold,
		color: Colors.blue,
	},
});