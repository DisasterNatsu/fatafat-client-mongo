"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { Axios } from "@/utils/AxiosConfig";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be over 6 characters" }),
  confirmPassword: z
    .string({ required_error: "Confirm Password is required" })
    .min(6, { message: "Confirm Password must be over 6 characters" })
    .refine((data: any) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }),
});

const Register = () => {
  // show password and and confirmPassword

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  // define router

  const router = useRouter();

  // define form from useForm hook and zod validation

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const req = await Axios.post("/auth/user/register", data);

      const res = await req.data;

      console.log(res);
    } catch (error: any) {
      if (error.response.status === 405) {
        toast({
          title: "Redirecting to Login Page",
          description: error.response.data.message,
          variant: "default",
        });

        setTimeout(() => {
          router.push("/log-in");
        }, 2000);
      } else {
        console.log(error);

        return toast({
          title: "Something went wrong",
          description: error.response.data.message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <title>Kolkata FF | Register</title>
      <meta property="og:url" content="https://kolkataff.space/register" />
      <meta name="description" content="Kolkata FF registration page" />
      <link rel="canonical" href="https://kolkataff.space/register" />
      <h1 className="text-2xl font-bold my-5">
        Welcome to one stop fatafat solutions
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-5xl w-full"
        >
          <div className="max-w-sm mx-auto flex flex-col gap-2">
            {/* email */}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="eg. jhon@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* password */}

            <div className="relative">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        {...field}
                        placeholder="Enter your password here"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div
                className="absolute top-[55%] right-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEye className="w-6 h-auto" />
                ) : (
                  <FaRegEyeSlash className="w-6 h-auto" />
                )}
              </div>
            </div>

            {/* confirm password */}

            <div className="relative">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="select-none">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        {...field}
                        placeholder="Re:enter your password here"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div
                className="absolute top-[55%] right-2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaRegEye className="w-6 h-auto" />
                ) : (
                  <FaRegEyeSlash className="w-6 h-auto" />
                )}
              </div>
            </div>

            <Button type="submit" className="mt-2 select-none">
              Submit
            </Button>
          </div>
        </form>
      </Form>
      <p className="mt-4">
        Already have an account?{" "}
        <Link
          href={"/log-in"}
          className="font-semibold text-green-700 hover:text-green-500"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
