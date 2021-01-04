import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setContent } from '../../action/controlAction';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Content = (props) => {
    const data = useSelector(state => state.content);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(props.match.params.id)
        props.data.forEach(element => {
            if (element.id == props.match.params.id) {
               dispatch(setContent(element));
            }
        });
    }, [])
    return (
        // <div>
        //     {props.match.params.id}
        // </div>
        <div className="content">
            <div className="content__title">
                <h1 className="title">{data.name}</h1>
                <p className={data.open_status === 1 ? "open" : "close"}>{data.open_status == 1 ? "開放中" : "目前未開放"}</p>
                <p className="pay">{data.ticket ? "收費入場" : "免費入場"}</p>
                <p className="remind">{data.remind}</p>
            </div>
            <div className="content__info">
                <div className="img">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        loop
                        pagination={{ clickable: true }}
                    >
                        {data.images.map((img, idx) => {
                            return <SwiperSlide key={idx}><div style={{
                                backgroundImage: `url(${img.src})`
                            }}></div></SwiperSlide>
                        })}
                    </Swiper>
                </div>
                <div className="intro">
                    <h2>景點介紹</h2>
                    <p>{data.introduction}</p>
                </div>
            </div>
            <hr />
            <div className="content__contact">
                <p className="address">{data.address ? `地址: ${data.address}` : ''}</p>
                <p className="tel">{data.tel ? `電話: ${data.tel}` : ''}</p>
                <p className="email">{data.email ? `信箱: ` : ''}{data.email ? <a href={`mailto:${data.email}`}>{data.email}</a> : ''}</p>
                <p className="website" >{data.url ? '官網: ' : ''}{data.url ? <a href={data.url} target="_blank" rel="noreferrer">{data.url}</a> : ''}</p>
                <p className="facebook">{data.facebook ? '粉絲團: ' : ''}{data.facebook ? <a href={data.facebook} target="_blank" rel="noreferrer">{data.facebook}</a> : ''}</p>
                <iframe className="map"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBvU4r2BlGKQ7u_9tMENi-c6Q5-imnTagw&q=${data.name}&zoom=14&center=${data.nlat},${data.elong}`} allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}

export default Content;