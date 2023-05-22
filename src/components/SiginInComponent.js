import React, { useState } from 'react';

 const SiginInComponent =() => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameBlur = () => {
      if (username.trim() === '') {
          setUsernameError('Username or email address is required');
      } else {
          setUsernameError('');
      }
  };

  const handlePasswordBlur = () => {
      if (password.trim() === '') {
          setPasswordError('Password is required');
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

            <div className="items-center rounded w-80 max-w-xs border h-30 mx-auto shadow-lg" style={{ boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} >
                <form className="bg-white rounded-lg shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <p className="">
                        <span >* </span>indicates required field
                    </p>
                    <div className="mb-4 pt-7">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                            style={{ border: usernameError ? '1px solid red' : '', color: usernameError ? '#024b30' : '' }}
                            id="username"
                            type="text"
                            placeholder="Username or email address"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onBlur={handleUsernameBlur}
                        />
                        {usernameError && <p className="text-red-500 text-xs italic" style={{ color: 'red' }}>{usernameError}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
                        {passwordError && <p className="text-red-500 text-xs italic" style={{ color: 'red' }}>{passwordError}</p>}
                    </div>
                    <div className="md:flex md:items-center mb-6 pt-7">
                        <div className="md:w-1/3"></div>
                        <label className="md:w-2/3 block text-gray-500 font-bold ">
                            <input className="mr-2 leading-tight h-6 w-6 mt-4" type="checkbox" />
                            <span className="text-sm mb-1">Keep me signed in.<span style={{ color: ' #006400' }}>Details</span></span>
                        </label>
                    </div>
                    <div className="flex flex-col pt-7">
                        <a className="font-bold text-sm pt-7" style={{ color: '#024b30' }} href="#">
                            Forgot your username?
                        </a>
                        <a className="font-bold text-sm pt-7" style={{ color: '#024b30' }} href="#">
                            Forgot your password?
                        </a>
                    </div>
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

            <div className="sb-contentColumn sb-global-gutters mx-auto sb-contentColumn--medium text-center pb-4 md:pb-9 sb-animator-fade-appear-done my-10 sb-animator-fade-enter-done">
                <div className="sb-contentColumn__inner">
                    <div className="sb-card bg-colorGreenLightSecondary px-2 md:px-8 py-5">
                        <div className="sb-card__content">
                            <h2 className="sb-heading text-xxs mb-2 text-bold text-upper color-greenAccent" style={{ color: ' #006400' }} tabIndex="-1">
                                Join Starbucks® Rewards
                            </h2>
                            <p className="mb-3 color-textBlack mx-auto" style={{maxWidth: '20rem'}}>
                                Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone,
                                and more.
                            </p>
                            <button className="sb-button sb-button--default border-green-600" type="button" data-e2e="joinNowButton" style={{ minWidth: '35px', minHeight: '35px', borderColor: '#228B22',color:'#228B22'  }}>
                                Join now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SiginInComponent;