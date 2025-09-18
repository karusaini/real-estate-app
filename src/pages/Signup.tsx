/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";
import signupIllustration from "../assets/signup-illustration.jpg";
import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();

  const validateForm = (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    const newErrors: any = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const confirmPassword = (
      form.elements.namedItem("confirmPassword") as HTMLInputElement
    ).value;

    if (!validateForm(name, email, password, confirmPassword)) return;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      navigate("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AuthNavbar />

      <div className="flex flex-col-reverse md:flex-row items-stretch justify-between flex-1 max-w-7xl mx-auto w-full px-6 py-12 gap-8 ">
        <motion.div
          className="w-full md:w-2/5 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1E1E1E] mb-8 text-center md:text-left flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Create new account
          </motion.h1>

          <form
            className="w-full max-w-md flex flex-col gap-4"
            onSubmit={handleSignup}
          >
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-[16px] sm:text-[18px] font-medium text-[#000000] mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Your Full Name"
                className={`w-full h-[50px] sm:h-[59px] px-4 rounded-[12px] border ${
                  errors.name ? "border-red-500" : "border-[#1E3A8A]"
                } bg-[#FDFDFD] shadow-sm placeholder:text-[#7A7A7A] placeholder:text-[14px] sm:placeholder:text-[16px]`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </motion.div>

            <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
              <label className="block text-[16px] sm:text-[18px] font-medium text-[#000000] mb-2">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className={`w-full h-[59px] px-4 pr-12 rounded-[12px] border ${
                  errors.email ? "border-red-500" : "border-[#1E3A8A]"
                } bg-[#FDFDFD] shadow-md placeholder:text-[#7A7A7A] placeholder:text-[16px]`}
              />
              <MdEmail className="absolute right-4 top-16 -translate-y-1/2 text-gray-400 w-6 h-6" />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>

            <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
              <label className="block text-[16px] sm:text-[18px] font-medium text-[#000000] mb-2">
                Password
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className={`w-full h-[59px] px-4 pr-12 rounded-[12px] border ${
                  errors.password ? "border-red-500" : "border-[#1E3A8A]"
                } bg-[#FDFDFD] shadow-md placeholder:text-[#7A7A7A] placeholder:text-[16px]`}
              />
              <AiFillEye
                className="absolute right-4 top-16 -translate-y-1/2 text-gray-400 w-6 h-6 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </motion.div>

            <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
              <label className="block text-[16px] sm:text-[18px] font-medium text-[#000000] mb-2">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Your Password"
                className={`w-full h-[59px] px-4 pr-12 rounded-[12px] border ${
                  errors.confirmPassword ? "border-red-500" : "border-[#1E3A8A]"
                } bg-[#FDFDFD] shadow-md placeholder:text-[#7A7A7A] placeholder:text-[16px]`}
              />
              <AiFillEye
                className="absolute right-4 top-16 -translate-y-1/2 text-gray-400 w-6 h-6 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              className="w-full h-[55px] sm:h-[62px] rounded-[34px] bg-[#1E3A8A] shadow-sm sm:shadow-md flex items-center justify-center text-white text-[20px] sm:text-[24px] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Create Account
            </motion.button>
          </form>

          <p className="mt-6 text-[14px] sm:text-[16px] text-center md:text-left flex justify-center gap-1">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-[#1E3A8A] hover:underline"
            >
              Log In
            </Link>
          </p>
        </motion.div>

        <motion.div
          className="w-full md:w-3/5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={signupIllustration}
            alt="Signup Illustration"
            className="w-full md:h-[700px] rounded-[34px] object-cover shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
}
