import {ImageResponse} from "next/og";
import {readFile} from "fs/promises";

// Image metadata
export const size = {
	width: 64,
	height: 64,
};
export const contentType = "image/png";

// Image generation
export default async function Icon() {
	return new ImageResponse(
		( 
			<div
				style={{
					color: "white",
					background: "#2fbf71",
					borderRadius: "50%",
					display: "flex",
					fontSize: 40,
					...size,
				}}
			>
				<span
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					W
				</span>
			</div>
		),
		{
			...size,
			fonts: [
				{
					data: await readFile("app/fonts/LeckerliOne-Regular.ttf"),
					name: "Leckerli One",
				},
			],
		}
	);
}
