import React from "react";
import "./Auth.scss";

const Login = () => {
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
                            <h2>Log In</h2>
                        </section>

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

                        <div className="input__container-cta">
                            <div className="checkbox">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                />
                                <label htmlFor="remember"> Remember me </label>
                            </div>
                            <a href="#" className="forgot">
                                Forgot your password?
                            </a>
                        </div>

                        <button className="btn login__btn" type="submit">
                            Log In
                        </button>

                        <div className="login__container">
                            <p>
                                Not a Member?
                                <a href="./signup.html">
                                    <strong>Sign Up</strong>
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

export default Login;
