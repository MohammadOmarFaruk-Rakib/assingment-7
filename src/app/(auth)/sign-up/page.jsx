"use client";

import { signUp } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function RenderFunction() {
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries())
    const {data:redata,error} = await signUp.email({
      name:data.name,
      email:data.email,
      password:data.password,
      callbackURL:'/Home'
    },
  {
    onSuccess:()=>{
      window.location.href = "/"

    },
    onError:(e)=>{
      console.log("sign Up Eror ",e.error)
    }
  }

  )

  if (data.password !== data.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
  console.log(data)
  };

  return (
    <main className="min-h-screen bg-[#F1F6F1] px-4 py-8 text-[#26352C]">
      {/* Header */}
      <header className="mx-auto mb-6 max-w-md text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className="mt-1 text-sm text-[#7B857D]">
          বিনা খরচে সাইন আপ করে সব সুবিধা পান দেখুন।
        </p>
      </header>

      {/* Signup Card */}
      <Form
        className="mx-auto flex w-full max-w-[395px] flex-col gap-4
      rounded-2xl border border-[#DFE8DF] bg-[#FCFDFC]
      p-5 sm:p-6"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        {/* Name */}
        <TextField isRequired name="name" className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">নাম</Label>
          <Input
            className="h-[39px] w-full rounded-lg border border-[#DFE8DF]
          bg-transparent px-3 text-sm outline-none transition
          focus:border-[#07883F] focus:ring-1 focus:ring-[#07883F]"
            placeholder="যেমন: রহিম উদ্দিন"
          />
          <FieldError className="text-xs text-red-600" />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          className="flex flex-col gap-1.5"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="text-sm font-medium">ইমেইল</Label>
          <Input
            className="h-[39px] w-full rounded-lg border border-[#DFE8DF]
          bg-transparent px-3 text-sm outline-none transition
          focus:border-[#07883F] focus:ring-1 focus:ring-[#07883F]"
            placeholder="you@example.com"
          />
          <FieldError className="text-xs text-red-600" />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          className="flex flex-col gap-1.5"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label className="text-sm font-medium">পাসওয়ার্ড</Label>
          <Input
            className="h-[39px] w-full rounded-lg border border-[#DFE8DF]
          bg-transparent px-3 text-sm outline-none transition
          focus:border-[#07883F] focus:ring-1 focus:ring-[#07883F]"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />
          <FieldError className="text-xs text-red-600" />
        </TextField>

        {/* Confirm Password */}
        <TextField
          isRequired
          name="confirmPassword"
          type="password"
          className="flex flex-col gap-1.5"
        >
          <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
          <Input placeholder="আবার লিখুন" />
          <FieldError />
        </TextField>

        {/* Submit */}
        <Button
          type="submit"
          className="mt-0.5 h-10 w-full rounded-lg bg-[#07883F]
        text-sm font-semibold text-white shadow-[0_3px_0_#B8D8C3]
        transition hover:bg-[#067535] active:translate-y-px"
        >
          অ্যাকাউন্ট তৈরি করুন
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-3 py-0.5">
          <div className="h-px flex-1 bg-[#E1E8E1]" />
          <span className="text-xs text-[#68746B]">অথবা</span>
          <div className="h-px flex-1 bg-[#E1E8E1]" />
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="secondary"
            className="h-[39px] rounded-lg border border-[#DFE8DF]
          bg-transparent px-2 text-xs font-medium text-[#26352C]
          hover:bg-[#F1F6F1]"
          >
            <span className="mr-1.5 font-bold text-[#4285F4]">G</span>
            Google দিয়ে চালিয়ে যান
          </Button>

          <Button
            type="button"
            variant="secondary"
            className="h-[39px] rounded-lg border border-[#DFE8DF]
          bg-transparent px-2 text-xs font-medium text-[#26352C]
          hover:bg-[#F1F6F1]"
          >
            <span className="mr-1.5">●</span>
            GitHub দিয়ে চালিয়ে যান
          </Button>
        </div>

        {/* Sign In Link */}
        <p className="pt-0.5 text-center text-sm text-[#68746B]">
          অ্যাকাউন্ট আছে?{" "}
          <a
            href="/sign-in"
            className="font-medium text-[#07883F] hover:underline"
          >
            সাইন ইন করুন
          </a>
        </p>
      </Form>

      {/* Back Home */}
      <div className="mx-auto mt-6 max-w-md text-center">
        <a
          href="/"
          className="text-sm text-[#7B857D] transition hover:text-[#07883F]"
        >
          ← হোম পেজে ফিরে যান
        </a>
      </div>
    </main>
  );
}
