import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import HireMeModal from '../HireMeModal';
import right_banner from '../../images/charlitron-logo.avif';
import left_banner from '../../images/left_banner.avif';
import logoLight from '../../images/logo-light.svg';
import { motion } from 'framer-motion';
import Button from '../reusable/Button';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<div className='flex-col z-20 '
		
			style={{backgroundColor : 'black'}}
		>
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex bg-black sm:justify-between sm:items-center py-2">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					
					{/* Theme switcher small screen */}
					
					{/* Small screen hamburger menu */}
				
				</div>

				{/* Header links small screen */}
				
				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none z-20">
					<Link
						to="/projects"
						className="block text-left text- text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Portada
					</Link>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Quienes somos
					</Link>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Servicios
					</Link>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Inteligencia Artificial
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						Clientes
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Contact"
					>
						Contacto
					</Link>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Reserva online
					</Link>
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
						<span
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Hire Me Button"
						>
							<Button title="Iniciar sesión" />
						</span>
					</div>

				</div>
			</div>
			{/* Hire me modal */}
			<div>
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
				{showModal ? showHireMeModal : null}
			</div>
		</motion.nav>
		<div className='mx-auto flex justify-center -mt-12 px-20 x-[80%] align-middle'>
			<div className='flex'> 
				<img
					src={right_banner}
					className="w-36"
					alt="Dark Logo"
				/>
				<div className='flex'>
					<p className= 'flex  header-text text-4xl align-middle text-center items-center' style={{color : 'rgb(55, 226, 214)'}}>
					“Fusionamos inteligencia, emoción y presencia en cada estrategia.”
					</p>
				</div>
				<img 
					src={left_banner}
					className="w-36 -mr-16"
					alt="Dark Logo"
				/>
			</div>
		</div>	
		</div>
	);
};

export default AppHeader;
