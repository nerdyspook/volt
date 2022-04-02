import React from "react";
import "./Auth.scss";

const Signup = () => {
    return (
        <main className="auth_container main">
            <div className="split-screen">
                <div className="left">
                    <section className="copy">
                        <h1>Style in every step</h1>
                        <p>
                            Refreshed in an eye-catching colorway that
                            compliments every outfit.
                        </p>
                    </section>
                </div>
                <div className="right">
                    <form action="">
                        <section className="copy">
                            <h2>Sign Up</h2>
                        </section>

                        <div className="input__container name">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Type here"
                                id="name"
                            />
                        </div>

                        <div className="input__container email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Type here"
                                id="email"
                            />
                        </div>

                        <div className="input__container password">
                            <label htmlFor="password">Password</label>
                            <input
                                placeholder="Must be atleast 8 characters"
                                type="password"
                                name="password"
                                id="password"
                            />
                        </div>

                        <div className="signup__container-cta">
                            <input
                                type="checkbox"
                                name="updates"
                                id="updates"
                            />
                            <label htmlFor="updates">
                                Sign up for email updates
                            </label>
                        </div>

                        <button className="btn signup__btn" type="submit">
                            Sign Up
                        </button>

                        <div className="login__container">
                            <p>
                                Already have an Account?
                                <a href="./login.html">
                                    <strong>Log In</strong>
                                </a>
                            </p>
                        </div>

                        <section className="copy legal">
                            <p>
                                <span className="small">
                                    By continuing, you agree to accept our
                                    <br />
                                    <a href="#">Privacy Policy</a> &amp;
                                    <a href="#">Terms of Service</a>.
                                </span>
                            </p>
                        </section>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Signup;
