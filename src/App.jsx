import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import products from './assets/products.json';
import './stylesheet.css';
import 'swiper/css';
import 'swiper/css/bundle';

function App() {
  const [items, setItems] = useState(() => {
    const items = localStorage.getItem('items');
    return items ? JSON.parse(items) : [];
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const setHeart = (element) => {
    const addNewHeart = items.filter((el) => el === element);
    if (addNewHeart.length === 0) {
      setItems([...items, element]);
    }
    const filteredHearts = items.filter((el) => el !== element);
    if (addNewHeart.length > 0) {
      setItems(filteredHearts);
    }
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {products.map(
        ({ id, original_price, discounted_price, image, link, name }) => (
          <SwiperSlide key={id}>
            <div className='item'>
              <div className='image-wrapper'>
                <img className='image' src={image} />
                <div className='heart'>
                  <svg
                    onClick={() => setHeart(id)}
                    viewBox='0 0 17 17'
                    className='sc-bdfBwQ fmMilp'
                    style={
                      items?.filter((el) => el === id).length
                        ? {
                            fill: '#ff3a68',
                            stroke: 'transparent',
                            strokeWidth: 1 + 'px',
                            marginBottom: 1 + 'rem',
                          }
                        : {
                            fill: 'transparent',
                            stroke: 'black',
                            strokeWidth: 1 + 'px',
                            marginBottom: 1 + 'rem',
                          }
                    }
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.5,2.3C12.9-2.2,24,5.7,8.5,16C-7,5.7,4.1-2.2,8.5,2.3z'
                    />
                  </svg>
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
