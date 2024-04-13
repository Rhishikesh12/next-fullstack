import { z } from "zod";

// TODO: We can write separate values and directly pass it inside object
export const usernameValidation = z
	.string()
	.min(5, "Username should be atleast 3 characters!")
	.max(10, "Username should be maximum 10 characters!");

export const signUpSchema = z.object({
	usename: usernameValidation,
	email: z.string().email({ message: "Invalid Email Address!" }),
	password: z
		.string()
		.min(6, { message: "password must be atleast 6 characters" }),
});
