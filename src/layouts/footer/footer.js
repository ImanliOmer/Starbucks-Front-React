import React from 'react';

function Footer() {
	return (
		<>
			<hr></hr>
			<footer className="p-10 pl-4 dark:bg-gray-800 dark:text-gray-100 pt-7 max-w-4x1">
				<div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8">
					<div className="flex flex-col space-y-4">
						<h2 className="font-medium">Getting started</h2>
						<div className="flex mt-8 flex-col space-y-2 text-sm dark:text-gray-400">
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Installation
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Release Notes
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Upgrade Guide
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Optimizing for Production
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Browser Support
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								IntelliSense
							</a>
						</div>
					</div>
					<div className="flex flex-col space-y-4">
						<h2 className="font-medium">Core Concepts</h2>
						<div className="flex mt-8 flex-col space-y-2 text-sm dark:text-gray-400">
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Utility-First
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Responsive Design
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Hover, Focus, & Other States
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Dark Mode
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Adding Base Styles
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Extracting Components
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Adding New Utilities
							</a>
						</div>
					</div>
					<div className="flex flex-col space-y-4">
						<h2 className="font-medium">Customization</h2>
						<div className="flex mt-8 flex-col space-y-2 text-sm dark:text-gray-400">
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Configuration
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Theme Configuration
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Breakpoints
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Customizing Colors
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Customizing Spacing
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Configuring Variants
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Plugins
							</a>
						</div>
					</div>
					<div className="flex flex-col space-y-4">
						<h2 className="font-medium">Community</h2>
						<div className="flex mt-8 flex-col space-y-2 text-sm dark:text-gray-400">
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								GitHub
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Discord
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								Twitter
							</a>
							<a className="py-2 text-gray-400" rel="noopener noreferrer" href="#">
								YouTube
							</a>
						</div>
					</div>
				</div>

				<ul className="flex flex-wrap items-center mt-3 lg:mb-1 lg:flex-row">
					<li className="mr-3 lg:mr-0">
						<a className="block py-2 lg:py-0 lg:pr-3 text-sm lg:text-base text-gray-700 hover:text-gray-900" href="https://www.starbucks.com/terms/privacy-policy/">
							Privacy Notice |
						</a>
					</li>
					<li className="mr-3 lg:mr-0 pl-2">
						<a className="block py-2 lg:py-0 lg:px-3 text-sm lg:text-base text-gray-700 hover:text-gray-900" href="https://www.starbucks.com/terms/starbucks-terms-of-use/">
							Terms of Use |
						</a>
					</li>
					<li className="mr-3 lg:mr-0 pl-2">
						<a className="block py-2 lg:py-0 lg:px-3 text-sm lg:text-base text-gray-700 hover:text-gray-900" href="https://www.starbucks.com/personal-information" id="personal-information">
							Do Not Share My Personal Information |
						</a>
					</li>
					<li className="mr-3 lg:mr-0 pl-2">
						<a className="block py-2 lg:py-0 lg:px-3 text-sm lg:text-base text-gray-700 hover:text-gray-900" href="https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf">
							CA Supply Chain Act |
						</a>
					</li>
					<li className="mr-3 lg:mr-0 pl-2">
						<button className="block py-2 lg:py-0 lg:px-3 text-sm lg:text-base text-gray-700 hover:text-gray-900">Cookie Preferences</button>
					</li>
				</ul>
				<p className="color-textBlackSoft py-3 text-xxs">
					© 2023 Starbucks Coffee Company. All rights reserved.
				</p>

			</footer>
		</>
	);
}

export default Footer;
