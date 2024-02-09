const { z } = require("zod");

const signupSchema = z.object({
    username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message :"Name must be atleast 3 characters"})
    .max(255,{message:"Name must not be more than 255 characters"}),
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({message:"Invalid Email Address"})
    .min(6, { message :"Email must be atleast 6 characters"})
    .max(100,{message:"Email must not be more than 100 characters"}),
    phone: z
    .string({ required_error: "Phone Number is required" })
    .trim()
    .min(10, { message :"Phone must be atleast 10 characters"})
    .max(20,{message:"Phone must not be more than 20 characters"}),
    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(10, { message :"Password must be atleast 10 characters"})
    .max(255,{message:"Password must not be more than 255 characters"}),
});

module.exports = signupSchema;