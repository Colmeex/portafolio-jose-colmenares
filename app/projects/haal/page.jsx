"use client";
import Image from "next/image";
import Home from "../../images/haal/Home.png";
import Login from "../../images/haal/Login.png";
import Adminn from "../../images/haal/Admin.png";
import Link from "next/link";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import { motion } from "framer-motion";
import { Footer } from "../../components/Footer";

export default function Haal() {
	return (
		<div className="flex flex-col mt-[2rem] items-center min-h-screen font-sans">
			<div className="flex flex-col justify-center">
				<motion.h1
					className="text-3xl  mt-[1.2rem] justify-center text-center"
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					Haal
				</motion.h1>
				<motion.h2
					className="flex justify-center mt-4 text-xl font-medium"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 2 }}
				>
					Technologies Used
				</motion.h2>
				<motion.div
					className="flex flex-wrap justify-center md:flex mt-2 md:flex-wrap opacity-70"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 2 }}
				>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						Javascript
					</span>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						React
					</span>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						Redux
					</span>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						SQl
					</span>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						Sequelize
					</span>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						Tailwdind
					</span>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						Firebase
					</span>
				</motion.div>
			</div>
			<motion.div
				className=""
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.8, duration: 2 }}
			>
				<h2 className="flex justify-center mt-4 text-xl font-medium">
					Description
				</h2>
				<p className="mt-2 text-slate-300 ">
					Haal is an e-commerce project dedicated to the sale of Adidas
					clothing. The site features third-party authentication, which allows
					users to log in as buyers or administrators. As a buyer, users can
					make purchases and explore different products, while as an
					administrator, they have access to a control panel where they can add,
					modify, or delete products, manage orders, and control inventory
				</p>
				<p className="mt-4 text-slate-300 ">
					Hall is a complete and functional platform for sports fashion lovers
					looking for high-quality products and a safe and reliable shopping
					experience.
				</p>
			</motion.div>
			<motion.div
				className="mt-4 flex flex-col md:grid md:grid-cols-2 md:gap-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2.5, duration: 2 }}
			>
				<Image
					src={Login}
					alt="Imagen perfil"
					className="w-full h-[13rem] transition duration-400 object-cover rounded-lg bg-slate-500 shadow shadow-blue-500/40 mt-4 "
				/>

				<Image
					src={Home}
					alt="Imagen perfil"
					className="w-full h-[13rem] transition duration-400 object-cover rounded-lg bg-slate-500 shadow shadow-blue-500/40 mt-4"
				/>

				<Image
					src={Adminn}
					alt="Imagen perfil"
					className="w-full h-[13rem] transition duration-400 object-cover rounded-lg bg-slate-500 shadow shadow-blue-500/40 mt-4"
				/>
			</motion.div>
			<div className="flex flex-col md:flex md:flex-row mt-2">
				<Link href="https://final-project-inqc.vercel.app/home" passHref>
					<span
						target="_blank"
						rel="noopener noreferrer"
						className=" flex justify-center"
					>
						<motion.div
							className="flex items-center btn w-[12rem] mt-4 justify-center py-[0.5rem]  hover:border-amber-300 opacity-60 hover:opacity-100 transition-all duration-300 text-base mx-2"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 3.0, duration: 2 }}
						>
							<AiOutlineGlobal className="text-4xl mr-2" />
							<span className=" px-6 py-1 rounded">View Website</span>
						</motion.div>
					</span>
				</Link>
				<Link href="https://github.com/Colmeex/Haal" passHref>
					<span
						target="_blank"
						rel="noopener noreferrer"
						className=" flex justify-center"
					>
						<motion.div
							className="flex items-center btn w-[12rem] mt-4 mb-16 justify-center py-[0.5rem]  hover:border-amber-300 opacity-60 hover:opacity-100 transition-all duration-300 text-base mx-2"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 3.0, duration: 2 }}
						>
							<AiFillGithub className="text-4xl mr-2" />
							<span className=" px-2 py-1 rounded">View Repository</span>
						</motion.div>
					</span>
				</Link>
			</div>
			<Footer />
		</div>
	);
}
