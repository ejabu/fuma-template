import { RootProvider } from "fumadocs-ui/provider";
import "fumadocs-ui/style.css";
import "style/globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/nav-bar";
import { NavbarProvider } from "@/components/layout/nav-mobile";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title: {
		template: "%s | Docs",
		default: "Docs",
	},
	description: "The most comprehensive documentation.",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon/favicon.ico" sizes="any" />
			</head>
			<body className={`bg-background font-sans relative `}>
				<RootProvider>
					<NavbarProvider>
						<Navbar />
						{children}
					</NavbarProvider>
				</RootProvider>
			</body>
		</html>
	);
}
