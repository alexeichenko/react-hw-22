import '../common/_Slider.scss';
import prev from '../../img/icon-angle-left.svg';
import next from '../../img/icon-angle-right.svg';

const Slider = ({sliderPreviousButtonHandler, sliderNextButtonHandler}) => {

	return (
	
		<div className="slider">
			<button className="slider__button" onClick={sliderPreviousButtonHandler}><img src={prev} alt="show previous element" /></button>
			<button className="slider__button" onClick={sliderNextButtonHandler}><img src={next} alt="show next element" /></button>
		</div>
	
	)

};

export default Slider;