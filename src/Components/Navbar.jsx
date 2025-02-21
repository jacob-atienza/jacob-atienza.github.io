import { useState } from 'react'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const navItems = ['about', 'projects', 'education', 'work', 'contact']

	return (
		<nav className='sm:px-16 px-3 w-full flex items-center py-5 fixed top-0 z-20 bg-transparent'>
			<div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
				<a className='flex items-center gap-2' href='/'>
					<p className='text-white text-[25px] font-bold cursor-pointer'>
						Jake&nbsp;
					</p>
				</a>

				{/* Desktop Navigation */}
				<ul className='list-none hidden sm:flex flex-row gap-10 ml-auto mr-6'>
					{navItems.map((item) => (
						<li
							key={item}
							className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'>
							<a href={`#${item}`}>
								{item.charAt(0).toUpperCase() + item.slice(1)}
							</a>
						</li>
					))}
				</ul>

				{/* Mobile Navigation Toggle */}
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={
							isOpen ? 'src/assets/menuclose.png' : 'src/assets/menuopen.svg'
						}
						alt='menu'
						className='w-[28px] h-[28px] object-contain cursor-pointer'
						onClick={() => setIsOpen(!isOpen)}
					/>

					{/* Mobile Menu */}
					<div
						className={`${
							isOpen ? 'flex' : 'hidden'
						} p-6 black-gradient absolute top-20 right-4 min-w-[140px] z-10 rounded-xl`}>
						<ul className='list-none flex flex-col gap-4'>
							{navItems.map((item) => (
								<li
									key={item}
									className='font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white'
									onClick={() => setIsOpen(false)}>
									<a href={`#${item}`}>
										{item.charAt(0).toUpperCase() + item.slice(1)}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
