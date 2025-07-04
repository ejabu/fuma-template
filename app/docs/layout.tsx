import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { GalleryProvider } from "@/components/gallery/gallery-provider";
import GalleryModal from "@/components/gallery/gallery-modal";
import { cn } from "@/lib/utils";
import ArticleLayout from "@/components/layout/side-bar";

export const metadata = {
	title: {
		template: "%s | Docs",
		default: "Docs",
	},
	description: "The most comprehensive documentation.",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<GalleryProvider>
				<DocsLayout
					tree={source.pageTree}
					{...baseOptions}
					sidebar={{
						component: (
							<div
								className={cn(
									"[--fd-tocnav-height:36px] md:-ml-[268px] lg:-ml-[286px] xl:[--fd-toc-width:286px] xl:[--fd-tocnav-height:0px] ",
								)}
							>
								<ArticleLayout />
							</div>
						),
					}}
				>
					<div className="mt-4 md:ml-6 md:mt-8 lg:ml-8 lg:mt-4 xl:-mt-8">
						{children}
					</div>
				</DocsLayout>
				<GalleryModal />
			</GalleryProvider>
		</>
	);
}
