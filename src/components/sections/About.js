import '../sections/_About.scss';
import darkDesign from '../../img/image-about-dark.jpg';
import lightDesign from '../../img/image-about-light.jpg';
import ArticleAbout from '../articles/ArticleAbout';

const About = () => {

	return (
		<section className="about">
			<picture className="about__design">
				<img src={darkDesign} alt="article design dark" />
			</picture>
			<ArticleAbout />
			<picture className="about__design">
				<img src={lightDesign} alt="article design light" />
			</picture>
		</section>
	)

};

export default About;