import React from "react";
import loginAnimation from "../../src/Images/loginAnimation.gif";
import { Checkbox, FormControlLabel, Box, Skeleton } from "@mui/material";
import { apiPost } from "../utils/apiClient";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const values = Object.fromEntries(formData.entries());

  try {
    const response = await apiPost("/login", values);
    const { token, user_role } = response.data;

    // Save to localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("userRole", user_role);

    // Toast notification
    toast.success(response.data.message || "Login successful!", {
      position: "top-center",
    });

    // Redirect after delay
    setTimeout(() => {
      navigate("/adminPost");
    }, 1000);
  } catch (error) {
    console.log(error);
    const message =
      error.response?.data?.message || "Login failed. Invalid credentials.";
    toast.error(message, {
      position: "top-center",
    });
  }
};


  const togglePassword = () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <>
      <style>
        {`
        .loginpage-main-container {
          margin: 0;
          font-family: "Arial", sans-serif;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 83vh;
          margin: 40px 0 40px 0;
          z-index: -1;
        }

        .loginpage-login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .loginpage-card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 30px 40px 40px 40px;
          width: 90%;
          max-width: 360px;
        }

        .loginpage-card h1 {
          margin-bottom: 20px;
          font-size: 24px;
          color: #333;
          font-weight: bold;
        }

        .loginpage-input-group {
          position: relative;
          margin-bottom: 20px;
        }

        .loginpage-input-group input {
          width: 100%;
          padding: 10px 15px;
          font-size: 16px;
          border: none;
          border-bottom: 2px solid #ddd;
          outline: none;
          transition: border-color 0.3s;
        }

        .loginpage-input-group input:focus {
          border-bottom: 2px solid #4786e6;
        }

        .loginpage-password-group {
          position: relative;
        }

        .loginpage-eye-icon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 18px;
          color: #888;
        }

        .loginpage-button {
          background: linear-gradient(to right, #4facfe, #2f5ca1);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 12px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
          width: 100%;
          font-weight: bold;
          text-transform: uppercase;
        }

        .loginpage-button:hover {
          background: linear-gradient(to right, #8360c3, #4facfe);
        }

        .loginpage-signup-text {
          margin-top: 15px;
          font-size: 14px;
          color: #666;
          text-align: center;
        }

        .loginpage-signup-text a {
          color: #4facfe;
          text-decoration: none;
          font-weight: bold;
        }

        .loginpage-signup-text a:hover {
          text-decoration: underline;
        }

        .loginpage-profile-img {
          width: 23%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
      </style>

      <div className="loginpage-main-container">
        <div className="loginpage-login-container">
          <div className="loginpage-card">
            <h1 className="d-flex justify-content-center align-items-center">
              Welcome Back
            </h1>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Skeleton variant="circular" width={120} height={120} />
              <img
                src={loginAnimation}
                alt="Sign Up"
                loading="lazy"
                onLoad={(e) => {
                  e.target.previousSibling.style.display = "none";
                }}
              />
            </Box>
            <form onSubmit={handleSubmit}>
              <div className="loginpage-input-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="loginpage-input-group loginpage-password-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <span className="loginpage-eye-icon" onClick={togglePassword}>
                  🙈
                </span>
              </div>
              <FormControlLabel
                control={<Checkbox name="rememberMe" color="primary" />}
                label="Remember Me"
              />
              <button type="submit" className="loginpage-button">
                LOGIN
              </button>
            </form>
            <p className="loginpage-signup-text">
              <span className="d-flex justify-content-center align-items-center">
                Start your journey – Log in and take the next step! 🚀✨
              </span>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default React.memo(LoginPage);
