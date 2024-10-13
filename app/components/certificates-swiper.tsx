"use client";
import type {FunctionComponent} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Pagination} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import JavaScript from "certificates/images/javascript-advanced.png";
import HTML from "certificates/images/html.png";
import CSS from "certificates/images/css.png";
import Rust from "certificates/images/rust.png";
import Flutter from "certificates/images/flutter.png";
import ReactRedux from "certificates/images/react-redux.png";

const CertificatesSwiper: FunctionComponent = () => (
	<>
		<Swiper
			modules={[Autoplay, Pagination, A11y]}
			a11y={{enabled: true}}
			autoplay={{delay: 5000}}
			pagination={{clickable: true, el: ".swiper-dots"}}
			spaceBetween={25}
			slidesPerView={1}
			breakpoints={{
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
			}}
		>
			<SwiperSlide className="document">
				<Image src={JavaScript} alt="JavaScript Certificate" loading="lazy" fill placeholder="blur" />
			</SwiperSlide>
			<SwiperSlide className="document">
				<Image src={HTML} alt="HTML Certificate" loading="lazy" fill placeholder="blur" />
			</SwiperSlide>
			<SwiperSlide className="document">
				<Image src={CSS} alt="CSS Certificate" loading="lazy" fill placeholder="blur" />
			</SwiperSlide>
			<SwiperSlide className="document">
				<Image src={Rust} alt="Rust Certificate" loading="lazy" fill placeholder="blur" />
			</SwiperSlide>
			<SwiperSlide className="document">
				<Image src={Flutter} alt="Flutter Certificate" loading="lazy" fill placeholder="blur" />
			</SwiperSlide>
			<SwiperSlide className="document">
				<Image src={ReactRedux} alt="React Certificate" loading="lazy" fill placeholder="blur" />
			</SwiperSlide>
			<SwiperSlide className="document d-flex align-items-center justify-content-center">
				<div>
					<h2 className="mb-2">This is how I learn</h2>
					<Link className="button" href="/certificates">
						See all certificates
					</Link>
				</div>
			</SwiperSlide>
		</Swiper>
		<div className="swiper-dots" />
	</>
);

export default CertificatesSwiper;
