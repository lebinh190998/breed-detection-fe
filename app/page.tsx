import Nav from "@components/Nav";
import ImageUpload from "@components/ImageUpload";

type Props = {};

const Home = (props: Props) => {
	return (
		<section className="w-full flex-center flex-col">
			<Nav />
			<h1 className="head_text text-center">
				VisionPaws
				<br className="max-md:hidden" />
				<span className="orange_gradient text-center">Is your pet a dog or a cat?</span>
			</h1>
      <ImageUpload />
		</section>
	);
};

export default Home;
