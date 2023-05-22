
import React, { useState } from 'react';

const LoginIn = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [lastnameError, setLastnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUsernameBlur = () => {
        if (username.trim() === '') {
            setUsernameError('Username or email address is required');
        } else {
            setUsernameError('');
        }
    };

    const handleLastnameBlur = () => {
        if (lastname.trim() === '') {
            setLastnameError('Last name is required');
        } else {
            setLastnameError('');
        }
    };

    const handleEmailBlur = () => {
        if (email.trim() === '') {
            setEmailError('Email address is required');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordBlur = () => {
        if (password.trim() === '') {
            setPasswordError('x Password is required ');

        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission or further validation if needed
    };

    return (
        <div>


            <div className="sb-contentColumn sb-global-gutters mx-auto sb-contentColumn--medium py4 my-10">
                <div className="sb-contentColumn__inner">
                    <h1 className="sb-heading text-3xl font-bold text-center mb2" tabIndex="-1">
                        Sign in or create an account
                    </h1>
                </div>
            </div>

            <div className="items-center rounded w-80 max-w-xs border h-40 mx-auto shadow-lg " style={{ boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <form className="bg-white rounded-lg shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <p className="text-xs">
                        <span>* </span>indicates required field
                    </p>

                    <div className="mb-4 pt-7">
                        <p className="font-bold">Personal Information</p>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                            First Name
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                            style={{ border: usernameError ? '1px solid red' : '', color: usernameError ? '#024b30' : '' }}
                            id="firstname"
                            type="text"
                            placeholder="First Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onBlur={handleUsernameBlur}
                        />
                        {usernameError && (
                            <p className="text-red-500 text-xs italic" style={{ color: 'red' }}>
                                {usernameError}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                            Last Name
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                            style={{ border: lastnameError ? '1px solid red' : '', color: lastnameError ? '#024b30' : '' }}
                            id="lastname"
                            type="text"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            onBlur={handleLastnameBlur}
                        />
                        {lastnameError && (
                            <p className="text-red-500 text-xs italic" style={{ color: 'red' }}>
                                {lastnameError}
                            </p>
                        )}
                    </div>

                    <div className="pt-7">
                        <p className="font-bold">Account Security</p>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                style={{ border: emailError ? '1px solid red' : '', color: emailError ? '#024b30' : '' }}
                                id="email"
                                type="text"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={handleEmailBlur}
                            />
                            {emailError && (
                                <p className="text-red-500 text-xs italic" style={{ color: 'red' }}>
                                    {emailError}
                                </p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                style={{ border: passwordError ? '1px solid red' : '', color: passwordError ? '#024b30' : '' }}
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={handlePasswordBlur}
                            />
                            {passwordError && (
                                <p className="text-red-500 text-xs italic" style={{ color: 'red' }}>
                                    {passwordError}
                                </p>
                            )}
                            <p className='text-xs	' style={{ width: '17rem', marginLeft: '1rem' }}>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</p>

                        </div>
                    </div>
                    <p className='text-xs font-bold pt-7' style={{ color: 'green' }}>Already have a Starbucks gift card?</p>
                    <p className='text-xs font-medium pt-7' style={{ color: 'gray' }}>COLLECT MORE STARS & EARN REWARDS</p>
                    <p className='text-xs  pt-7'> Email is a great way to know about offers and <br></br> what’s new from Starbucks.</p>


            

                    <div className="md:flex md:items-center pt-9">
                        <div className="md:w-2/3">
                            <button
                                className="w-8 ml-20 shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
                                style={{ backgroundColor: '#024b30' }}
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="sb-contentColumn sb-global-gutters mx-auto sb-contentColumn--medium text-center pb-4 md:pb-9 sb-animator-fade-appear-done my-20 sb-animator-fade-enter-done">

            </div>
        </div>
    );
};


export default LoginIn;
