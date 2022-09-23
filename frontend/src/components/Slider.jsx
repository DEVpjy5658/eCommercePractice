import axios from 'axios'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/slider.css'
import React, {useState, useEffect} from 'react'
//import { sliderItems } from '../data'

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {

    if(direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)  // 2 is the last image
    }
    else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)  // 0 is the first image 
    }

  }

  const [slider, setSlider] = useState([]) //default is empty database or json, no sliders

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/slider');
      setSlider(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className='s-container'>
        <div className="wrapper" slideIndex={slideIndex} style={{transform: `translateX(${slideIndex * - 100}vw)`}}>
          {slider.map((item) => (
            <div className="slide" key={item._id}>
              <div className="img-container">
                <img src={item.image} className='s-img' alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="s-arrow left" onClick={() => handleClick("left")}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </div>
        <div className="s-arrow right" onClick={() => handleClick("right")}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
    </div>
  )
}

export default Slider