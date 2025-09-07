/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";
import signupIllustration from "../assets/signup-illustration.jpg";
import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion"; // ✅ Added for animations

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();

  const validateForm = (email: string, password: string) => {
    const newErrors: any = {};

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    if (!validateForm(email, password)) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AuthNavbar />
      <div className="flex flex-col-reverse md:flex-row items-stretch justify-between flex-1 max-w-7xl mx-auto w-full px-6 py-12 gap-8">
        {/* Form Section */}
        <motion.div
          className="w-full md:w-2/5 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1E1E1E] mb-8 text-center md:text-left"
            style={{ fontFamily: "Poppins" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Log In
          </motion.h1>

          <form
            className="w-full max-w-md flex flex-col gap-4"
            onSubmit={handleLogin}
          >
            {/* Email */}
            <motion.div
              className="relative"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
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

            {/* Password */}
            <motion.div
              className="relative"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
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

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4" />
              <label
                htmlFor="remember"
                className="text-[#1E1E1E] text-[14px] sm:text-[16px]"
                style={{ fontFamily: "Poppins" }}
              >
                Remember Me
              </label>
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              className="w-full h-[55px] sm:h-[62px] rounded-[34px] bg-[#1E3A8A] shadow-sm sm:shadow-md flex items-center justify-center text-white text-[20px] sm:text-[24px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Log In
            </motion.button>
          </form>

          {/* Social Login */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <p className="text-center text-[14px] sm:text-[16px] text-gray-500">
              Or continue with
            </p>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <motion.button
              className="flex items-center justify-center w-full sm:w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaApple size={20} />
            </motion.button>
            <motion.button
              className="flex items-center justify-center w-full sm:w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebookF size={20} className="text-blue-600" />
            </motion.button>
            <motion.button
              className="flex items-center justify-center w-full sm:w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGoogle size={20} className="text-red-500" />
            </motion.button>
          </div>

          <p className="mt-6 text-center md:text-left text-[14px] sm:text-[16px] flex justify-center gap-1">
            Don't have an account?
            <Link
              to="/signup"
              className="font-bold text-[#1E3A8A] hover:underline"
            >
              Create One
            </Link>
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="w-full md:w-3/5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src={signupIllustration}
            alt="Login Illustration"
            className="w-full md:h-[700px] rounded-[34px] object-cover shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
}
