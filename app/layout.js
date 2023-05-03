import "./globals.css";
import { Inter } from "next/font/google";
import { Navigation } from "./components/Navigation.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Jose Colmenares",
	description: "Desarrollado por Jose Colmenares",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Jose Colmenares</title>
			</head>
			<body className={`${inter.className}relative  flex justify-center`}>
				<div className="fixed w-full top-4 z-10">
					<Navigation className="mx-auto" />
				</div>
				<div className="relative z-0">{children}</div>
			</body>
		</html>
	);
}
