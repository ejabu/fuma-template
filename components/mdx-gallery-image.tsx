"use client";

import Image from "next/image";
import { useGallery } from "./gallery/gallery-provider";

interface MdxGalleryImageProps {
	src: {
		src: string;
		width: number;
		height: number;
	};
	alt?: string;
	width?: number;
	height?: number;
}

export function MdxGalleryImage(props: MdxGalleryImageProps) {
	const { openCarousel } = useGallery();
	const { src, alt = "", width = 800, height = 600 } = props;
	const handleClick = () => {
		const allImages = Array.from(document.querySelectorAll("img")).map(
			(img) =>
				img
					.getAttribute("src")
					?.split("&")[0]
					.replaceAll("/_next/image?url=", "") || "",
		);
		const allAltTexts = Array.from(document.querySelectorAll("img")).map(
			(img) => {
				const alt = img.getAttribute("alt") || "";
				const src = img.getAttribute("src") || "";
				return {
					alt: alt ?? "-",
					src,
				};
			},
		);
		const imageSrc = src.src.replaceAll("/", "%2F");
		const index = allImages.indexOf(imageSrc);
		openCarousel(index >= 0 ? index : 0, allImages, allAltTexts);
	};
	return (
		<button
			type="button"
			onClick={handleClick}
			className="group focus:outline-none"
		>
			<Image
				src={src}
				alt={alt}
				draggable={false}
				width={width}
				height={height}
				className="transition-transform cursor-pointer duration-300 ease-in-out group-hover:scale-105 rounded-lg shadow"
			/>
			<span className="text-black -mt-2 pb-8 block">{alt}</span>
		</button>
	);
}
