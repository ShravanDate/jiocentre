import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation, Autoplay} from 'swiper/dist/js/swiper.esm'

class Homepage extends React.Component {
  render() {
 	const params = {
 		
		modules: [Pagination, Navigation, Autoplay],	    
		spaceBetween: 0,		
		effect: 'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
		  		return '<span class="' + className + '">0' + (index + 1) + '</span>';
			},
		},
		navigation:0,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		loop: true,
	}

	console.log(params)
    return (
    	<article className="kma">
      <Swiper {...params}>
            <div className="swiper-slide" style={KMA01}>
          <div className="caption">
            <h2>Convention Centre</h2>
            <p>Welcome to JioWorld Center, a national historic
              Shop, dine and explore the best of the all at.</p>
            <a href="javascript:;" target="" className="button">EXPLORE</a> </div>
        </div>
        <div className="swiper-slide" style={KMA02}>
          <div className="caption">
            <h2>Convention Centre</h2>
            <p>Welcome to JioWorld Center, a national historic
              Shop, dine and explore the best of the all at.</p>
            <a href="javascript:;" target="" className="button">EXPLORE</a> </div>
        </div>
        <div className="swiper-slide" style={KMA03}>
          <div className="caption">
            <h2>Convention Centre</h2>
            <p>Welcome to JioWorld Center, a national historic
              Shop, dine and explore the best of the all at.</p>
            <a href="javascript:;" target="" className="button">EXPLORE</a> </div>
        </div>
        <div className="swiper-slide" style={KMA04}>
          <div className="caption">
            <h2>Convention Centre</h2>
            <p>Welcome to JioWorld Center, a national historic
              Shop, dine and explore the best of the all at.</p>
            <a href="javascript:;" target="" className="button">EXPLORE</a> </div>
        </div>

          </Swiper>

          </article>
    )
  }
}

const KMA01 = {
	backgroundImage:'url(/assets/images/kma00.jpg)'
}
const KMA02 = {
	backgroundImage:'url(/assets/images/kma01.jpg)'
}
const KMA03 = {
	backgroundImage:'url(/assets/images/kma02.jpg)'
}
const KMA04 = {
	backgroundImage:'url(/assets/images/kma03.jpg)'
}
 
export default Homepage;
