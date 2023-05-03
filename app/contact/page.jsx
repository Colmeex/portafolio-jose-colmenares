"use client";
import { useRef } from "react";
// import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Footer } from "../components/Footer";

export default function About() {
	// const router = useRouter();
	const form = useRef();
	// const sendEmail = (e) => {
	// 	e.preventDefault();

	// 	emailjs
	// 		.sendForm(
	// 			"service_7ggco5n",
	// 			"template_4hrpan9",
	// 			form.current,
	// 			"YrQgu6bnvglEWeAME"
	// 		)
	// 		.then((result) => {
	// 			console.log(result.text);
	// 			Swal.fire("Su mensaje ha sido enviado!", " ", "success");
	// 			form.current.reset();
	// 		})
	// 		.catch((error) => {
	// 			console.log(error.text);
	// 		});
	// };
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_7ggco5n",
				"template_4hrpan9",
				e.target,
				"YrQgu6bnvglEWeAME"
			)
			.then(
				(result) => {
					console.log(result.text);
					Swal.fire("Su mensaje ha sido enviado!", " ", "success");
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
					Swal.fire("Hubo un error intente de nuevo", " ", "error");
				}
			);
	};
	return (
		<div className="flex flex-col mt-[2rem] items-center min-h-screen">
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				className="flex justify-center"
			>
				<h1 className="text-3xl  mt-[1.2rem]  text-center">Contact me</h1>
			</motion.div>
			<div className="flex flex-col justify-center mt-3 md:mx-auto  md:mt-[-rem] cursor-pointer hover:border-amber-300 font-sans text-center">
				<motion.h2
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.6, duration: 1.5 }}
					className="w-[22rem]"
				>
					Contact me and let's build something together!{" "}
				</motion.h2>
				<motion.form
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.8, duration: 1.5 }}
					ref={form}
					onSubmit={sendEmail}
					className=" flex flex-col my-4 text-left"
				>
					<label className="my-2">Name</label>
					<input
						type="text"
						name="user_name"
						placeholder="John Doe"
						className="text-slate-300 bg-transparent border-b-2 border-slate-400 focus:outline-none focus:border-violet-500 transition-all duration-300 active:outline-none"
					/>
					<label className="my-2">Email</label>
					<input
						type="email"
						name="user_email"
						placeholder="example@gmail.com"
						className="text-slate-300 bg-transparent border-b-2 border-slate-400 focus:outline-none focus:border-violet-500 transition-all duration-300 active:outline-none"
					/>
					<label className="my-2">Message</label>
					<textarea
						name="message"
						placeholder="hi! i need a website..."
						className="text-slate-300 bg-transparent border-b-2 border-slate-400 focus:outline-none focus:border-violet-500 transition-all duration-300 active:outline-none"
					/>
					<input
						type="submit"
						value="Send"
						className="btn my-4 cursor-pointer border-transparent hover:border-amber-300 opacity-60 hover:opacity-100 transition-all duration-300
						w-24"
					/>
				</motion.form>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.8, duration: 1.5 }}
				>
					<h2 className="text-left mb-4 font-bold cursor-default">
						You can also contact me at:
					</h2>
					<div className="flex mt-[rem]">
						<Link href="https://github.com/Colmeex" passHref>
							<span target="_blank" rel="noopener noreferrer">
								<AiFillGithub className="mx-2  text-4xl" />
							</span>
						</Link>
						<Link href="https://www.linkedin.com/in/colmeex/" passHref>
							<span target="_blank" rel="noopener noreferrer">
								<AiFillLinkedin className="mx-2  text-4xl" />
							</span>
						</Link>
						<Link href="mailto:colmeex@gmail.com" passHref>
							<span target="_blank" rel="noopener noreferrer">
								<AiFillMail className="mx-2  text-4xl" />
							</span>
						</Link>
					</div>
				</motion.div>
			</div>
			<Footer />
		</div>
	);
}
