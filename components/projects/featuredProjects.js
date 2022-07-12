import classes from './featuredProjects.module.scss';
import { useEffect, useState, useRef } from 'react';
import FeaturedProjectItem from './featuredProjectItem';
import Link from 'next/link';

// Animations
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
// import required modules
import { EffectCards, Pagination } from 'swiper';

const FeaturedProjects = (props) => {
  const { featuredProjects } = props;

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.projects} id='projects'>
      <div className={classes.container}>
        <h2 data-aos='slide-right'>Featured projects</h2>

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          pagination={{
            dynamicBullets: true,
          }}
          className='mySwiper'>
          {featuredProjects.map((project) => (
            <SwiperSlide key={project._id}>
              <FeaturedProjectItem project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div data-aos='fade-up' className={classes.buttonWrapper}>
          <Link href='/projects/'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='btn btn-outlined'>
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProjects;
