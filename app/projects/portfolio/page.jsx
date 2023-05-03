"use client";
import Image from "next/image";
import Home from "../..//images/portfolio/Home.png";
import Projects from "../../images/portfolio/Projects.png";
import Stack from "../../images/portfolio/Stack.png";
import Contact from "../../images/portfolio/Contact.png";
import Info from "../../images/travel/InfoPais.png";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Footer } from "../../components/Footer";

export default function Portfolio() {
	return (
		<div className="flex flex-col mt-[2rem] items-center min-h-screen font-sans">
			<div className="flex flex-col justify-center">
				<motion.h1
					className="text-3xl  mt-[1.2rem] justify-center text-center"
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					Portfolio Jose Colmenares
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
					className="flex flex-wrap justify-center md:flex mt-2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 2 }}
				>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						Javascript
					</span>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						Next.js
					</span>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						Tailwind CSS
					</span>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						Framer Motion
					</span>
					<span class=" ml-2  h-5 rounded-full bg-white bg-opacity-30 px-[0.85em] py-[0.25em] text-center align-baseline text-[0.80em] font-bold leading-none text-neutral-50  flex items-center justify-center mt-2">
						Email.js
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
					This is my personal portfolio, which I will be constantly working on.
					Here I showcase the skills I've learned and new knowledge.
				</p>
			</motion.div>
			<motion.div
				className="mt-4 flex flex-col md:grid md:grid-cols-2 md:gap-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2.5, duration: 2 }}
			>
				<Image
					src={Home}
					alt="Imagen perfil"
					className="w-full h-[13rem] transition duration-400 object-cover rounded-lg bg-slate-500 shadow shadow-amber-200 mt-4 "
				/>

				<Image
					src={Projects}
					alt="Imagen perfil"
					className="w-full h-[13rem] transition duration-400 object-cover rounded-lg bg-slate-500 shadow shadow-amber-200 mt-4"
				/>

				<Image
					src={Stack}
					alt="Imagen perfil"
					className="w-full h-[13rem] transition duration-400 object-cover rounded-lg bg-slate-500 shadow shadow-amber-200 mt-4"
				/>

				<Image
					src={Contact}
					alt="Imagen perfil"
					className="w-full h-[13rem] transition duration-400 object-cover rounded-lg bg-slate-500 shadow shadow-amber-200 mt-4"
				/>
			</motion.div>
			<Link href="https://github.com/Colmeex/TravelApp" passHref>
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
						<span className=" px-2 py-1 rounded">See repository</span>
					</motion.div>
				</span>
			</Link>
			<Footer />
		</div>
	);
}
