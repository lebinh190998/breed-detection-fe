import Nav from "@components/Nav";

type Props = {};

const Home = (props: Props) => {
	return (
		<section className="w-full flex-center flex-col">
			<Nav />
			<h1 className="head_text text-center">
				VisionPaws
				<br className="max-md:hidden" />
				<span className="orange_gradient text-center">AI Pet Breed Detector</span>
			</h1>
		</section>
	);
};

export default Home;
