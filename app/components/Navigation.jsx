import Link from "next/link";
import styles from "./Navigation.module.css";

const links = [
	{
		label: "Home",
		route: "/",
	},
	{
		label: "About",
		route: "/about",
	},
	{
		label: "Projects",
		route: "/projects",
	},
	{
		label: "Stack",
		route: "/stack",
	},
	{
		label: "Contact",
		route: "/contact",
	},
];

export function Navigation() {
	return (
		<header className="flex justify-center mx-auto font-source text-sm">
			<nav className={`${styles.nav} `}>
				<ul className="flex mx-auto m-2 justify-center px-6 group">
					{links.map(({ label, route }) => (
						<li
							key={route}
							className="transition duration-500 mx-2 hover:blur-sibling group-hover:blur-[1.5px]  hover:!blur-none group-hover:opacity-25  hover:!opacity-100"
						>
							<Link href={route} className="">
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
