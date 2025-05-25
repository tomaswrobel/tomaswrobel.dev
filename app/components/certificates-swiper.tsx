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
import CSharp from "certificates/images/csharp.png";

const certifikátsSwiper: FunctionComponent = () => (
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
				<Image
					draggable={false}
					src={JavaScript}
					alt="JavaScript certifikát"
					loading="lazy"
					fill
					placeholder="blur"
				/>
			</SwiperSlide>
			<SwiperSlide className="document">
				<Image draggable={false} src={HTML} alt="HTML certifikát" loading="lazy" fill placeholder="blur" />
			</SwiperSlide>
			<SwiperSlide className="document">
				<Image draggable={false} src={CSS} alt="CSS certifikát" loading="lazy" fill placeholder="blur" />
			</SwiperSlide>
			<SwiperSlide className="document">
				<Image draggable={false} src={Rust} alt="Rust certifikát" loading="lazy" fill placeholder="blur" />
			</SwiperSlide>
			<SwiperSlide className="document">
				<Image
					draggable={false}
					src={Flutter}
					alt="Flutter certifikát"
					loading="lazy"
					fill
					placeholder="blur"
				/>
			</SwiperSlide>
			<SwiperSlide className="document">
				<Image
					draggable={false}
					src={ReactRedux}
					alt="React certifikát"
					loading="lazy"
					fill
					placeholder="blur"
				/>
			</SwiperSlide>
			<SwiperSlide className="document">
				<Image
					draggable={false}
					src={CSharp}
					alt="C# certifikát"
					loading="lazy"
					fill
					placeholder="blur"
					style={{opacity: 0.25}}
				/>
				<div className="text-center position-relative z-1 border-primary border border-5 d-flex align-items-center justify-content-center h-100">
					<Link className="btn" href="/certificates">
						Všechny certifikáty
					</Link>
				</div>
			</SwiperSlide>
		</Swiper>
		<div className="swiper-dots" />
	</>
);

export default certifikátsSwiper;
