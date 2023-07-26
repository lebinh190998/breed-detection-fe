import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "VisionPaws",
	description: "Is your pet a dog or a cat?",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>
				<div className="main">
					<div className="gradient" />
				</div>
				<main className="app">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
