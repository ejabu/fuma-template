import Link from "next/link";
import { NavbarMobile, NavbarMobileBtn } from "./nav-mobile";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
export const Navbar = () => {
	return (
		<div className="flex flex-col sticky top-0 bg-background backdrop-blur-md z-30">
			<nav className="md:grid grid-cols-12 md:border-b top-0 flex items-center justify-between">
				<Link
					href="/"
					className="md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-2 shrink-0 transition-colors md:w-[268px] lg:w-[286px]"
				>
					<div className="flex flex-col gap-2 w-full">
						<p className="">DOCS.</p>
					</div>
				</Link>
				<div className="md:col-span-10 flex items-center justify-end relative">
					<ul className="md:flex items-center divide-x w-max hidden shrink-0">
						{navMenu.map((menu, i) => (
							<NavLink key={menu.name} href={menu.path}>
								{menu.name}
							</NavLink>
						))}
					</ul>
					<ThemeToggle />
					<NavbarMobileBtn />
				</div>
			</nav>
			<NavbarMobile />
		</div>
	);
};

export const navMenu: {
	name: string;
	path: string;
	child?: {
		name: string;
		path: string;
	}[];
}[] = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Docs",
		path: "/docs",
	},
];
