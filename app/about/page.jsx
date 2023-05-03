"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Perfil from "../images/Perfil/perfil.jpg";
import { Footer } from "../components/Footer";

export default function About() {
	return (
		<div className="flex flex-col mt-[2rem] items-center min-h-screen px-[4rem]">
			<motion.div
				className="flex justify-center"
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<h1 className="text-3xl  mt-[1.2rem]  text-center">About me</h1>
			</motion.div>
			<div className="flex flex-col md:flex md:flex-row">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1.5 }}
					className="mt-2"
				>
					<Image
						src={Perfil}
						alt="Imagen perfil"
						className="w-[40rem] h-[20rem] cursor-pointer transition duration-400 object-cover rounded-lg bg-slate-500 shadow shadow-blue-500/40 "
						onClick={() => router.push("/about")}
					/>
				</motion.div>

				<div className="ml-0 md:ml-8 ">
					<motion.p
						className="font-source text-[11pt] justify-center text-slate-300 whitespace-pre-line mt-2"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2, duration: 1.5 }}
					>
						Hello! I am <a className="text-teal-300">José Colmenares</a>, though
						you can also call me <a className="text-teal-400">Mau</a> my second
						name. I am a web developer passionate about design and technology.
						These passions drive me to keep growing and pushing myself with
						every project I undertake, while maintaining a professional
						approach.
					</motion.p>
					<motion.p
						className="font-source text-[11pt] justify-center text-slate-300 whitespace-pre-line mt-3"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2.5, duration: 1.5 }}
					>
						I am a
						<a className="text-teal-300"> self-taught and detail-oriented</a>,
						individual, which allows me to be constantly learning and improving
						the value I bring to each project. In my free time, I enjoy video
						games, sports, travel, and movies.
					</motion.p>
					<motion.p
						className="font-source text-[11pt] justify-center text-slate-300 whitespace-pre-line mt-3"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 3, duration: 1.5 }}
					>
						Feel free to explore my portfolio, which I have put a lot of
						attention and effort into, and constantly strive to improve. If you
						have any suggestions or would like to get in touch, please don't
						hesitate to do so! I would be happy to hear from you.
					</motion.p>
					<motion.p
						className="font-source text-[11pt] justify-center text-teal-300 whitespace-pre-line mt-3"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 3.5, duration: 1.5 }}
					>
						Thank you for taking the time to get to know a little more about me.
					</motion.p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
