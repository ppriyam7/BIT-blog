import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function Signin() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target && e.target.id)
      setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (!formData.email || !formData.password)
      return dispatch(signInFailure("Please fill out all the fields"));
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) return dispatch(signInFailure(data.message));
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
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
              BIT
            </span>
            Blog
          </Link>
          <p className="py-4">
            Hi! Welcome to the blog! Kindly sign-in with your email and
            password.
          </p>
        </div>
        {/*for right:*/}
        <div className="py-1 flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="redToYellow"
              type="submit"
              disabled={loading}
              outline
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-1 text-sm mt-4">
            <span>Don't have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign-up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
