import React from 'react';
import{ 
    Flex,
    Box,
    Text,
    Heading,
    Image,
    Button,
  } from '@chakra-ui/react';
import './Hero.css';
const Hero = () => {
    return (
        <div className="wrap">
            <header>
                <div>
                    <h2>Count +</h2>
                </div>
                <nav>
                    <a href="/">How it works</a>
                    <a href="/">Contact Us</a>
                    <a href="/">About</a>
                    <button>Sign In</button>

                </nav>
            </header>
            <section className="hero">
                <div className="hero-text">
                    <h1>Easy to use business finance manager</h1>
                    <p>Your financial buddy, here to handle the numbers so you can focus on your customers</p>
                    <button className="cta">Get Started</button>
                </div>

                <div className="hero-img"><Image src="https://res.cloudinary.com/sophire/image/upload/v1635716520/hero_elvyeo.svg" alt="hero "/></div>
            </section>
        </div>
    )
}

export default Hero




