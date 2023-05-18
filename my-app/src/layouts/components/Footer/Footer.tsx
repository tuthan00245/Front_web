import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

type Props = {};

const menuFooter = [
    {
        titleFooter: 'Về chúng tôi',
        list: [
            {
                title: 'Giới thiệu HEBEC',
                link: '/site/about-us',
            },
            {
                title: 'Điều khoản sử dụng',
                link: '/site/terms',
            },
            {
                title: 'Các vấn đề thường gặp',
                link: '/site/faq',
            },
            {
                title: 'Chính sách bảo mật',
                link: '/site/security',
            },
            {
                title: 'Chính sách đổi - trả - hoàn tiền',
                link: '/site/term-exchange',
            },
            {
                title: 'Phương thức thanh toán',
                link: '/site/payment-method',
            },
            {
                title: 'Phương thức vận chuyển',
                link: '/site/delivery',
            },
        ],
    },
    {
        titleFooter: 'Tiện ích',
        list: [
            {
                title: 'Tin tức',
                link: '/tin-tuc',
            },
            {
                title: 'Sản phẩm yêu thích',
                link: '/shop/wishlist',
            },
            {
                title: 'Đơn hàng',
                link: '/account/orders',
            },
        ],
    },
    {
        titleFooter: 'Liên kết',
        list: [
            {
                title: 'Theo dõi chúng tôi trên',
                link: '',
            },
        ],
    },
];

const contacts = [
    {
        icon: (
            <svg width={22} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
        ),
        text: 'Số 200 Toà nhà BUIVIEN building Phạm Ngũ Lão, TP HCM - Việt Nam',
    },
    {
        icon: (
            <svg width={22} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
        ),
        text: 'https://hebec.vn/',
    },
    {
        icon: (
            <svg width={22} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM176 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
        ),
        text: '0123.456.789',
    },
];

const Footer = (props: Props) => {
    return (
        <div className="footer__wrapper">
            <div className="container">
                <div className="footer__widgets">
                    <div className="footer__contacts">
                        <div className="contacts--img">
                            <img src="https://img.freepik.com/free-vector/detailed-design-bike-logo-template_23-2148837397.jpg?size=626&ext=jpg" style={{width: '100%',height: '100%'}}alt="" />
                        </div>
                        <div className="footer-contacts__title">
                            CÔNG TY CỔ PHẦN XE VÀ THIẾT BỊ XE TẠI SÀI GÒN
                        </div>
                        <ul className="footer-contacts__list">
                            {contacts.map((item, i) => (
                                <li key={i}>
                                    <div className="list--item">{item.icon}</div>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {menuFooter.map((menu, i) => (
                        <div className="block" key={i}>
                            <div className="title">{menu.titleFooter}</div>
                            <ul className="footer__widgets--list">
                                {menu.list.map((item, i) => (
                                    <li key={i}>
                                        <Link to={item.link}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* <div className="footer__bottom">
                    <div className="footer__copyright">
                        Designed by
                        <Link to={'https://bmd.com.vn/'}> BMD Solutions </Link>— Copyright
                        <Link to={'https://hebec.vn/'}> Hebec </Link>
                        <span>Version 1.0.19</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;
