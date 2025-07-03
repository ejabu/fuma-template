import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { GalleryProvider } from "@/components/gallery/gallery-provider";
import GalleryModal from "@/components/gallery/gallery-modal";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<GalleryProvider>
				<DocsLayout tree={source.pageTree} {...baseOptions}>
					<div className="lg:mt-16">{children}</div>
				</DocsLayout>
				<GalleryModal />
			</GalleryProvider>
		</>
	);
}
