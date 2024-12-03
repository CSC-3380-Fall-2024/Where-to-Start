import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setError(null); // reset error state
      setIsLoading(true); // set load state 
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoading(false); // save registration info 
      navigate("/login"); // reroute to login page
    } catch (err: any) {
      setIsLoading(false); 
      setError(err.message || "An error occurred during registration.");
    }
  };

  return (
    <div style={styles.container as React.CSSProperties}>
      <div style={styles.box as React.CSSProperties}>
        <h2 style={styles.title as React.CSSProperties}>Register</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <div style={styles.inputGroup as React.CSSProperties}>
            <label htmlFor="email" style={styles.label as React.CSSProperties}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input as React.CSSProperties}
            />
          </div>
          <div style={styles.inputGroup as React.CSSProperties}>
            <label
              htmlFor="password"
              style={styles.label as React.CSSProperties}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input as React.CSSProperties}
            />
          </div>
          <div style={styles.inputGroup as React.CSSProperties}>
            <label
              htmlFor="confirmPassword"
              style={styles.label as React.CSSProperties}
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input as React.CSSProperties}
            />
          </div>
          {error && <p style={styles.error as React.CSSProperties}>{error}</p>}
          <button
            type="submit"
            style={
              isLoading
                ? (styles.buttonLoading as React.CSSProperties)
                : (styles.button as React.CSSProperties)
            }
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  box: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center" as "center", // explicit cast to fix error to make styling more clean 
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6c63ff",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  buttonLoading: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#cccccc",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "not-allowed",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
    textAlign: "center" as "center", // same as added on line 127 to fix repetitive errors
  },
};

export default Register;
