import { source } from "@/lib/source";
import {
	DocsPage,
	DocsBody,
	DocsDescription,
	DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/lib/mdx-components";
import { MdxGalleryImage } from "@/components/mdx-gallery-image";
import DatabaseTable from "@/components/mdx/database-tables";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { cn } from "@/lib/utils";

export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();

	const MDXContent = page.data.body;

	return (
		<DocsPage toc={page.data.toc} full={page.data.full}>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDXContent
					components={getMDXComponents({
						DatabaseTable,
						Callout: ({ children, ...props }) => (
							<defaultMdxComponents.Callout
								{...props}
								className={cn(
									props,
									"bg-none rounded-none border-dashed border-border",
									props.type === "info" &&
										"border-l-blue-500/50",
									props.type === "warn" &&
										"border-l-amber-700/50",
									props.type === "error" &&
										"border-l-red-500/50",
								)}
							>
								{children}
							</defaultMdxComponents.Callout>
						),
						a: createRelativeLink(source, page),
						p: ({ children }) => <>{children}</>,
						img: (props) => <MdxGalleryImage {...props} />,
					})}
				/>
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();

	return {
		title: page.data.title,
		description: page.data.description,
	};
}
