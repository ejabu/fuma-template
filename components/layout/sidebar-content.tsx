import { LucideAArrowDown, LucideIcon, Youtube } from "lucide-react";
import { ReactNode, SVGProps } from "react";

interface Content {
	title: string;
	href?: string;
	Icon?: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
	isNew?: boolean;
	list: {
		title: string;
		href: string;
		Icon?: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
		group?: boolean;
		isNew?: boolean;
	}[];
}

export const contents: Content[] = [
	{
		title: "Get Started",
		Icon: Youtube,
		list: [
			{
				title: "Introduction",
				href: "/docs/introduction",
			},
			{
				title: "With Image",
				href: "/docs/with-image",
			},
			{
				title: "With Card",
				href: "/docs/with-card",
			},
			{
				title: "Draft",
				href: "/docs/draft",
			},
		],
	},
	{
		title: "Concepts",
		list: [
			{
				href: "/docs/concepts/api",
				title: "API",
			},
			{
				title: "CLI",
				href: "/docs/concepts/cli",
			},
			{
				title: "Client",
				href: "/docs/concepts/client",
			},
			{
				title: "Cookies",
				href: "/docs/concepts/cookies",
			},
			{
				title: "Database",
				href: "/docs/concepts/database",
			},
			{
				href: "/docs/concepts/email",
				title: "Email",
			},
			{
				href: "/docs/concepts/hooks",
				title: "Hooks",
			},
			{
				href: "/docs/concepts/plugins",
				title: "Plugins",
			},
			{
				title: "OAuth",
				href: "/docs/concepts/oauth",
			},
			{
				title: "Sessions",
				href: "/docs/concepts/session-management",
			},
			{
				title: "TypeScript",
				href: "/docs/concepts/typescript",
			},
			{
				title: "Users & Accounts",
				href: "/docs/concepts/users-accounts",
			},
		],
	},
	{
		title: "Authentication",
		list: [
			{
				title: "Email & Password",
				href: "/docs/authentication/email-password",
			},
			{
				title: "Social Sign-On",
				group: true,
				Icon: LucideAArrowDown,
				href: "/",
			},
			{
				title: "Apple",
				href: "/docs/authentication/apple",
			},
			{
				title: "Discord",
				href: "/docs/authentication/discord",
			},
			{
				title: "Facebook",
				href: "/docs/authentication/facebook",
			},
			{
				title: "GitHub",
				href: "/docs/authentication/github",
			},
			{
				title: "Google",
				href: "/docs/authentication/google",
			},
			{
				title: "Hugging Face",
				href: "/docs/authentication/huggingface",
			},
			{
				title: "Kick",
				href: "/docs/authentication/kick",
			},
			{
				title: "Microsoft",
				href: "/docs/authentication/microsoft",
			},
			{
				title: "Tiktok",
				href: "/docs/authentication/tiktok",
			},
			{
				title: "Twitch",
				href: "/docs/authentication/twitch",
			},
			{
				title: "Twitter (X)",
				href: "/docs/authentication/twitter",
			},
			{
				title: "Dropbox",
				href: "/docs/authentication/dropbox",
			},
			{
				title: "LinkedIn",
				href: "/docs/authentication/linkedin",
			},
			{
				title: "GitLab",
				href: "/docs/authentication/gitlab",
			},
			{
				title: "Reddit",
				href: "/docs/authentication/reddit",
			},
			{
				title: "Roblox",
				href: "/docs/authentication/roblox",
				isNew: true,
			},
			{
				title: "Spotify",
				href: "/docs/authentication/spotify",
			},
			{
				title: "VK",
				href: "/docs/authentication/vk",
			},
			{
				title: "Zoom",
				isNew: true,
				href: "/docs/authentication/zoom",
			},
			{
				title: "Others",
				href: "/docs/authentication/others",
			},
			{
				title: "Other Social Providers",
				href: "/docs/authentication/other-social-providers",
			},
		],
	},
	{
		title: "Databases",
		list: [
			{
				title: "MySQL",
				href: "/docs/adapters/mysql",
			},
			{
				title: "SQLite",
				href: "/docs/adapters/sqlite",
			},
			{
				title: "PostgreSQL",
				href: "/docs/adapters/postgresql",
			},
			{
				title: "MS SQL",
				href: "/docs/adapters/mssql",
			},
			{
				title: "Other Relational Databases",
				href: "/docs/adapters/other-relational-databases",
			},
			{
				group: true,
				title: "Adapters",
				href: "/docs/adapters/drizzle",
			},
			{
				title: "Drizzle",
				href: "/docs/adapters/drizzle",
			},
			{
				title: "Prisma",
				href: "/docs/adapters/prisma",
			},
			{
				title: "MongoDB",
				href: "/docs/adapters/mongo",
			},
			{
				group: true,
				title: "Others",
				href: "/docs/adapters/community-adapters",
			},
			{
				title: "Community Adapters",
				href: "/docs/adapters/community-adapters",
			},
		],
	},
	{
		title: "Plugins",

		list: [
			{
				title: "Authentication",
				group: true,
				href: "/docs/plugins/1st-party-plugins",
			},

			{
				title: "Two Factor",
				href: "/docs/plugins/2fa",
			},
			{
				title: "Username",
				href: "/docs/plugins/username",
			},
			{
				title: "Anonymous",
				href: "/docs/plugins/anonymous",
			},
			{
				title: "Phone Number",
				href: "/docs/plugins/phone-number",
			},
			{
				title: "Magic Link",
				href: "/docs/plugins/magic-link",
			},
			{
				title: "Email OTP",
				href: "/docs/plugins/email-otp",
			},
			{
				title: "Passkey",
				href: "/docs/plugins/passkey",
			},
			{
				title: "Generic OAuth",
				href: "/docs/plugins/generic-oauth",
			},
			{
				title: "One Tap",
				href: "/docs/plugins/one-tap",
			},

			{
				title: "Authorization",
				group: true,
				href: "/docs/plugins/1st-party-plugins",
			},
			{
				title: "Admin",
				href: "/docs/plugins/admin",
			},
			{
				title: "API Key",
				href: "/docs/plugins/api-key",
			},
			{
				title: "MCP",
				href: "/docs/plugins/mcp",
			},
			{
				title: "Organization",
				href: "/docs/plugins/organization",
			},
			{
				title: "Enterprise",
				group: true,
				href: "/docs/plugins/1st-party-plugins",
			},
			{
				title: "OIDC Provider",
				href: "/docs/plugins/oidc-provider",
			},
			{
				title: "SSO",
				href: "/docs/plugins/sso",
			},
			{
				title: "Utility",
				group: true,
				href: "/docs/plugins/1st-party-plugins",
			},
			{
				title: "Bearer",
				href: "/docs/plugins/bearer",
			},
			{
				title: "Captcha",
				href: "/docs/plugins/captcha",
			},
			{
				title: "Have I Been Pwned",
				href: "/docs/plugins/have-i-been-pwned",
				isNew: true,
			},
			{
				title: "Multi Session",
				href: "/docs/plugins/multi-session",
			},
			{
				title: "OAuth Proxy",
				href: "/docs/plugins/oauth-proxy",
			},
			{
				title: "One-Time Token",
				href: "/docs/plugins/one-time-token",
				isNew: true,
			},
			{
				title: "Open API",
				href: "/docs/plugins/open-api",
			},
			{
				title: "JWT",
				href: "/docs/plugins/jwt",
			},
			{
				title: "3rd party",
				group: true,
				href: "/docs/plugins/1st-party-plugins",
			},
			{
				title: "Stripe",
				href: "/docs/plugins/stripe",
			},
			{
				title: "Polar",
				href: "/docs/plugins/polar",
			},
			{
				title: "Dub",
				href: "/docs/plugins/dub",
				isNew: true,
			},
			{
				title: "Community Plugins",
				href: "/docs/plugins/community-plugins",
			},
		],
	},
	{
		title: "Guides",
		href: "/docs/guides",
		list: [
			{
				title: "Next Auth Migration Guide",
				href: "/docs/guides/next-auth-migration-guide",
			},
			{
				title: "Supabase Migration Guide",
				href: "/docs/guides/supabase-migration-guide",
			},
			{
				title: "Clerk Migration Guide",
				href: "/docs/guides/clerk-migration-guide",
			},
			{
				title: "Create Your First Plugin",
				href: "/docs/guides/your-first-plugin",
			},
			{
				title: "Create a Database Adapter",
				href: "/docs/guides/create-a-db-adapter",
			},
			{
				title: "Browser Extension Guide",
				href: "/docs/guides/browser-extension-guide",
			},
			{
				title: "Optimize for Performance",
				href: "/docs/guides/optimizing-for-performance",
			},
		],
	},
	{
		title: "Reference",
		list: [
			{
				title: "Options",
				href: "/docs/reference/options",
			},
			{
				title: "Contributing",
				href: "/docs/reference/contributing",
			},
			{
				title: "Resources",
				href: "/docs/reference/resources",
			},
			{
				title: "Security",
				href: "/docs/reference/security",
			},
			{
				title: "FAQ",
				href: "/docs/reference/faq",
			},
		],
	},
];
