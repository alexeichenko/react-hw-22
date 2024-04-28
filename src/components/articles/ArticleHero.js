import '../articles/_ArticleHero.scss';
import { useState } from 'react';
import FetchDataById from '../hooks/FetchDataById';
import Slider from '../common/Slider';
import arrowIcon from '../../img/icon-arrow.svg';

const ArticleHero = () => {

	const [articleID, setArticleID] = useState(1)
	const { loading, article } = FetchDataById(articleID)

	const previousButtonHandler = () => {
		articleID !== 1 && setArticleID(prev => prev - 1)
	}
	const nextButtonHandler = () => {
		setArticleID(prev => prev + 1)
	}

	return (

		<article className="article-hero">
			{loading ? <p className="article-hero__loading">Loading...</p> : (
				<>
					<div className="article-hero__body flow container">
						<h1 className="article-hero__title">{article.title}</h1>
						<p className="article-hero__text">{article.body}</p>
						<a href='/' className="article-hero__link">Shop now <img src={arrowIcon} alt='shop link' /></a>
					</div>
					<Slider
						sliderPreviousButtonHandler={previousButtonHandler}
						sliderNextButtonHandler={nextButtonHandler}
					/>
				</>
			)}
		</article>

	)

};

export default ArticleHero;