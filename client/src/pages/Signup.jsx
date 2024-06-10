import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex py-3 px-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*for left:*/}
        <div className="flex-1">
          <Link to="/" className="py-3  font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-lg text-white">
              BIT's
            </span>
            Blog
          </Link>
          <p className="py-4">
            Hi! Welcome to the blog! Kindly sign-up with your username, email
            and password.
          </p>
        </div>
        {/*for right:*/}
        <div className="py-1 flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="text"
                placeholder="name@provider.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="redToYellow" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-1 text-sm mt-4">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign-in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
