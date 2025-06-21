"use client";
import { Row, Col, Input } from "antd";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#F8F8F9] border-t border-gray-300 py-6 footer">
            {/* Top Section */}
            <div className=" border-b border-gray-300">
                <Row className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between flex-wrap">
                    <Col xs={24} sm={12} md={6} className="mb-4 md:mb-0 text-center md:text-left flex items-center">
                        <div className="flex items-center">
                            {/* <i className="fas fa-shield-alt mr-2 text-2xl"></i> */}
                            <img src="/images/footer/img1.png" alt="" className="mr-2" />
                            <div className="flex justify-center flex-col">
                                <span className="font-bold">SECURE</span>
                                <p className="text-sm !m-0">HIGHLY SECURE SHOPPING</p>
                            </div>
                        </div>

                    </Col>
                    <Col xs={24} sm={12} md={6} className="mb-4 md:mb-0 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start">
                            <i className="fas fa-truck mr-2"></i>
                            <span className="font-bold">DELIVERY</span>
                        </div>
                        <p className="text-sm">FLEXIBLE DELIVERY BEST PRICES</p>
                    </Col>
                    <Col xs={24} sm={12} md={6} className="mb-4 md:mb-0 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start">
                            <i className="fas fa-globe mr-2"></i>
                            <span className="font-bold">DISTRIBUTOR</span>
                        </div>
                        <p className="text-sm">WIDE OFFICIAL DISTRIBUTOR</p>
                    </Col>
                    <Col xs={24} sm={12} md={6} className="mb-4 md:mb-0 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start">
                            <i className="fas fa-headset mr-2"></i>
                            <span className="font-bold">SUPPORT</span>
                        </div>
                        <p className="text-sm">GREAT SUPPORT TEAM</p>
                    </Col>
                </Row>
            </div>

            {/* Main Footer Section */}
            <Row className="max-w-[1440px] mx-auto px-4 py-6">
                <Col xs={24} md={6} className="mb-6 md:mb-0">
                    <h3 className="text-lg font-bold mb-4">OUR COMPANY</h3>
                    <ul className="space-y-2">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/trade">Trade Program</Link></li>
                        <li><Link href="/inspiration">Inspiration</Link></li>
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                    </ul>
                </Col>
                <Col xs={24} md={6} className="mb-6 md:mb-0">
                    <h3 className="text-lg font-bold mb-4">HELP</h3>
                    <ul className="space-y-2">
                        <li><Link href="/customer-service">Customer Service</Link></li>
                        <li><Link href="/faqs">FAQs</Link></li>
                        <li><Link href="/return-policy">Return Policy</Link></li>
                        <li><Link href="/warranty">Warranty Policy</Link></li>
                        <li><Link href="/shipping">Shipping Information</Link></li>
                    </ul>
                </Col>
                <Col xs={24} md={6} className="mb-6 md:mb-0">
                    <h3 className="text-lg font-bold mb-4">RESOURCES</h3>
                    <ul className="space-y-2">
                        <li><Link href="/ideas-advice" className="">Ideas and Advice</Link></li>
                        <li><Link href="/catalogue">Catalogue</Link></li>
                        <li><Link href="/manage-account">Manage Account</Link></li>
                        <li><Link href="/accessibility">Accessibility</Link></li>
                        <li><Link href="/ideas-inspiration">Ideas and Inspiration</Link></li>
                    </ul>
                </Col>
                <Col xs={24} md={6} className="mb-6 md:mb-0">
                    <h3 className="text-lg font-bold mb-4">NEWSLETTER</h3>
                    <div className="space-y-4">
                        <div className="flex">
                            <Input placeholder="Enter your email address" className="w-2/3 rounded-lg !rounded-r-none" />
                            <button className="w-1/3 bg-black !text-white py-2 rounded-r-lg">SUBSCRIBE</button>
                        </div>
                        <p>Call: +971 55 576 2130</p>
                        <p>Join our Whatsapp Broadcast List</p>
                        <div className="flex space-x-4">
                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                            <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                            <Link href="#"><i className="fab fa-tiktok"></i></Link>
                            <Link href="#"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Bottom Section */}
            <div className="border-t border-gray-300 pt-2">
                <div className="text-center mt-6 max-w-[1440px] mx-auto flex justify-between items-center flex-col md:flex-row">
                    <p>© 2025 LED WORLD. All Rights Reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2 ">
                        <img src="/images/footer/img5.jpg" alt="PayPal" className="h-6" />
                        <img src="/images/footer/img6.jpg" alt="Visa" className="h-6" />
                        <img src="/images/footer/img7.jpg" alt="MasterCard" className="h-6" />
                        <img src="/images/footer/img8.jpg" alt="Discover" className="h-6" />
                        <img src="/images/footer/img9.jpg" alt="Discover" className="h-6" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;