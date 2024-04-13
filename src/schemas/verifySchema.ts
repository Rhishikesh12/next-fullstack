import { z } from "zod";

export const VerifySchema = z.object({
	verifyCode: z.string().min(6, "Length must be atleast 6 digits"),
});
