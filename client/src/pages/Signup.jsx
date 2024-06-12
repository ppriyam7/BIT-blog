import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex py-3 px-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*for left:*/}
        <div className="flex-1">
          <Link to="/" className="py-3  font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-lg text-white">
              {/*// eslint-disable-next-line react/no-unescaped-entities */}
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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@provider.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
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
