import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import Heart from 'react-heart';
import products from './assets/products.json';
import './stylesheet.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

function App() {
  const [active, setActive] = useState(false);

  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      modules={[EffectFade, Navigation]}
    >
      {products.map(
        ({ id, original_price, discounted_price, image, link, name }) => (
          <SwiperSlide key={id}>
            <div className='item'>
              <div className='image-wrapper'>
                <img className='image' src={image} />
                <div className='heart'>
                  <Heart
                    isActive={active}
                    onClick={() => setActive(!active)}
                    activeColor='#ff3a68'
                  />
                </div>
              </div>

              <div className='details-wrapper'>
                <div className='name-wrapper'>
                  <a className='name' href={link}>
                    {name}
                  </a>
                </div>

                <div className='price-wrapper'>
                  <span className='original-price'>{original_price}€</span>
                  <span className='discounted-price'>{discounted_price}€</span>
                </div>

                <div className='action-wrapper'>
                  <button className='action'>Add to cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}

export default App;
