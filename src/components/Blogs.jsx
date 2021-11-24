import styled from "styled-components";
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Blogs() {
    return (
        <Container data-component="blogs" id="blogs">

            <Title>
                <div></div>
                <h3>Daily Posts</h3>
                <div></div>
            </Title>

            <SwiperContainer>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 32
                        },
                        1366: {
                            slidesPerView: 4,
                            spaceBetween: 32
                        }
                    }}
                >
                    <SwiperSlide>
                        <SlideItem>
                            <img src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" loading="lazy" />
                            <div>
                                <span>By John Doe</span>
                                <div></div>
                                <span>15th May, 2022</span>
                            </div>
                            <h5>Fitness Is About Reaching Your Limits</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nobis.</p>
                            <button>Read More</button>
                        </SlideItem>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideItem>
                            <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" loading="lazy" />
                            <div>
                                <span>By John Doe</span>
                                <div></div>
                                <span>15th May, 2022</span>
                            </div>
                            <h5>Fitness Is About Reaching Your Limits</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nobis.</p>
                            <button>Read More</button>
                        </SlideItem>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideItem>
                            <img src="https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" loading="lazy" />
                            <div>
                                <span>By John Doe</span>
                                <div></div>
                                <span>15th May, 2022</span>
                            </div>
                            <h5>Fitness Is About Reaching Your Limits</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nobis.</p>
                            <button>Read More</button>
                        </SlideItem>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideItem>
                            <img src="https://images.pexels.com/photos/2475878/pexels-photo-2475878.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" loading="lazy" />
                            <div>
                                <span>By John Doe</span>
                                <div></div>
                                <span>15th May, 2022</span>
                            </div>
                            <h5>Fitness Is About Reaching Your Limits</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nobis.</p>
                            <button>Read More</button>
                        </SlideItem>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideItem>
                            <img src="https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" loading="lazy" />
                            <div>
                                <span>By John Doe</span>
                                <div></div>
                                <span>15th May, 2022</span>
                            </div>
                            <h5>Fitness Is About Reaching Your Limits</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nobis.</p>
                            <button>Read More</button>
                        </SlideItem>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SlideItem>
                            <img src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" loading="lazy" />
                            <div>
                                <span>By John Doe</span>
                                <div></div>
                                <span>15th May, 2022</span>
                            </div>
                            <h5>Fitness Is About Reaching Your Limits</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nobis.</p>
                            <button>Read More</button>
                        </SlideItem>
                    </SwiperSlide>
                </Swiper>
            </SwiperContainer>

        </Container>
    );
}

const Container = styled.section`
    margin-top: 8rem;
    padding: 0 1rem;
`;

const Title = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;

    div:nth-child(1) {
        width: 25%;
        border: 0.5px solid var(--light-white);
    }

    h3 {
        color: var(--red);
        border: 1px solid var(--light-white);
        border-radius: 0.25rem;
        width: max-content;
        padding: 0.5rem 1rem;
    }

    div:nth-child(3) {
        width: 25%;
        border: 0.5px solid var(--light-white);
    }
`;

const SwiperContainer = styled.div`
    width: 100%;
`;

const SlideItem = styled.div`
    padding-bottom: 3rem;

    img {
        width: 100%;
        aspect-ratio: 3 / 2;
        margin-bottom: 1rem;
        object-fit: cover;
    }

    >div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;

        span {
            font-size: 1rem;
            color: var(--red);
        }

        div {
            height: 0.75rem;
            border: 0.5px solid var(--white);
        }
    }

    h5 {
        font-size: 1.5rem;
        color: var(--white);
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        color: var(--light-white);
        margin-bottom: 1rem;
    }

    button {
        cursor: pointer;
        background: var(--red);
        color: var(--white);
        width: max-content;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        letter-spacing: 0.1rem;
        font-size: 1rem;
    }
`;