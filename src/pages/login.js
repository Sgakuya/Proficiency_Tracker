// The code in this file was repurposed from Practical 7, written by Professor Christopher Andrews

import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
// import { useUser } from "../contexts/UserContext";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Login({
  newUser,
  setNewUser,
  instructor,
  setInstructor,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  middleburyId,
  setMiddleburyId,
}) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrationInputs = (
    <div>
      <div>
        <p>First Name</p>
        <input
          type="text"
          size="45"
          value={firstName}
          placeholder="first name"
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>

      <div>
        <p>Last Name</p>
        <input
          type="text"
          size="45"
          value={lastName}
          placeholder="last name"
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>

      <div>
        <p>Middlebury ID</p>
        <input
          type="text"
          size="45"
          value={middleburyId}
          placeholder="middlebury ID"
          onChange={(event) => setMiddleburyId(event.target.value)}
        />
      </div>
    </div>
  );

  const handleLogin = async () => {
    const auth = getAuth();
    if (newUser) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // addUser();
        if (instructor) {
          router.push("/professor");
        } else {
          router.push("/goals");
        }
      } catch (error) {
        if (error.message.includes("invalid-email")) {
          setErrorMessage(
            `${email} is not recognized as a valid email address`
          );
        }
        if (error.message.includes("weak-password")) {
          setErrorMessage("Password should be at least 6 characters");
        }
        if (error.message.includes("email-already-in-use")) {
          setErrorMessage(`${email} is already in use`);
        }
      }
      // If existing:
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        if (instructor) {
          router.push("/professor");
        } else {
          router.push("/goals");
        }
      } catch (error) {
        if (error.message.includes("invalid-email")) {
          setErrorMessage(
            `${email} is not recognized as a valid email address`
          );
        } else {
          setErrorMessage("Email address or password is incorrect");
        }
      }
    }
  };

  // Changes whether the submit button is disabled
  const submitDisabled =
    (!newUser && (email === "" || password === "")) ||
    (newUser &&
      (email === "" ||
        password === "" ||
        firstName === "" ||
        lastName === "" ||
        middleburyId === ""));

  return (
    <div>
      <Head>
        <title>Proficiency Tracker: Login</title>
      </Head>

      <div>
        <h1> Proficiency Tracker</h1>
        {/* If error message, display it over top */}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <div>
          <p>Email</p>
          <input
            type="text"
            size="45"
            value={email}
            placeholder="email address"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <p>Password</p>
          <input
            type="password"
            size="45"
            value={password}
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {/* If user is new, display the registration inputs */}
        {newUser && registrationInputs}

        <p>
          <input
            type="checkbox"
            data-testid="newUserCheckbox"
            value={newUser}
            onChange={() => setNewUser(!newUser)}
          />{" "}
          New user?
        </p>

        <p>
          <input
            type="checkbox"
            data-testid="InstructorCheckbox"
            value={instructor}
            onChange={() => setInstructor(!instructor)}
          />{" "}
          Instructor?
        </p>

        <div>
          <input
            type="button"
            disabled={submitDisabled}
            onClick={() => handleLogin()}
            value={newUser ? "Register" : "Log in"}
          />

          <input
            type="button"
            onClick={() => router.push("/")}
            value={"Cancel"}
          />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  newUser: PropTypes.bool.isRequired,
  setNewUser: PropTypes.func.isRequired,
  instructor: PropTypes.bool.isRequired,
  setInstructor: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  setFirstName: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  setLastName: PropTypes.func.isRequired,
  middleburyId: PropTypes.string.isRequired,
  setMiddleburyId: PropTypes.func.isRequired,
};
