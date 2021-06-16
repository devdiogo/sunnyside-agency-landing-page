import Head from "next/head"
import Link from "next/link"

import { colors } from "../styles/style-guide"

import Header from "../components/Header"
import Nav from "../components/Nav"
import Logo from "../components/Logo"
import HeadingText from "../components/HeadingText"
import ScrollDownArrow from "../components/ScrollDownArrow"
import Feature from "../components/Feature"
import FeatureItem from "../components/FeatureItem"
import LinkWithBorder from "../components/LinkWithBorder"
import Categories from "../components/Categories"
import CategoriesItem from "../components/CategoriesItem"
import Testimonials from "../components/Testimonials"
import TestimonialsItem from "../components/TestimonialsItem"
import Gallery from "../components/Gallery"
import GalleryItem from "../components/GalleryItem"
import Footer from "../components/Footer"
import { useState } from "react"

const IndexPage = () => {
  const [showHamburger, setShowHamburger] = useState(false)

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        <title>Frontend Mentor | Sunnyside agency landing page</title>
      </Head>
      <Header>
        <Nav>
          <Logo />
          <img
            style={{ opacity: showHamburger ? "50%" : "100%" }}
            onClick={() => setShowHamburger(!showHamburger)}
            src="./assets/icon-hamburger.svg"
            alt="Menu"
          />
          <ul className={showHamburger ? "menu-active" : ""}>
            <span />
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="active">Contact</a>
              </Link>
            </li>
          </ul>
        </Nav>
        <HeadingText>We are creatives</HeadingText>
        <ScrollDownArrow>
          <img src="./assets/icon-arrow-down.svg" alt="Scroll down" />
        </ScrollDownArrow>
      </Header>
      <Feature>
        <FeatureItem>
          <div>
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <LinkWithBorder href="/" text="Learn more" borderColor={colors.yellow} />
          </div>
          <img src="./assets/desktop/image-transform.jpg" alt="Egg picture" />
        </FeatureItem>
        <FeatureItem>
          <img src="./assets/desktop/image-stand-out.jpg" alt="Cup picture" />
          <div>
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend
              your brand in digital places.
            </p>
            <LinkWithBorder href="/" text="Learn more" borderColor={colors.soft_red} />
          </div>
        </FeatureItem>
      </Feature>
      <Categories>
        <CategoriesItem image="image-graphic-design.jpg" imageAlt="Graphic design">
          <div>
            <h3>Graphic Design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </CategoriesItem>
        <CategoriesItem image="image-photography.jpg" imageAlt="Photography" color={colors.dark_blue}>
          <div>
            <h3>Photography</h3>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
        </CategoriesItem>
      </Categories>
      <Testimonials>
        <h2>Client Testimonials</h2>
        <div>
          <TestimonialsItem>
            <img src="../assets/image-emily.jpg" alt="Emily's avatar" />
            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <div>
              <span>Emily R.</span>
              <span>Marketing Director</span>
            </div>
          </TestimonialsItem>
          <TestimonialsItem>
            <img src="../assets/image-thomas.jpg" alt="Thomas's avatar" />
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div>
              <span>Thomas S.</span>
              <span>Chief Operating Officer</span>
            </div>
          </TestimonialsItem>
          <TestimonialsItem>
            <img src="../assets/image-jennie.jpg" alt="Jennie's avatar" />
            <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <div>
              <span>Jennie F.</span>
              <span>Business Owner</span>
            </div>
          </TestimonialsItem>
        </div>
      </Testimonials>
      <Gallery>
        <GalleryItem image="image-gallery-milkbottles.jpg" imageAlt="Milk bottles" />
        <GalleryItem image="image-gallery-orange.jpg" imageAlt="Orange" />
        <GalleryItem image="image-gallery-cone.jpg" imageAlt="Cone" />
        <GalleryItem image="image-gallery-sugarcubes.jpg" imageAlt="Sugar cubes" />
      </Gallery>
      <Footer>
        <Logo color="#2C7566" />
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <img src="./assets/icon-facebook.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/icon-instagram.svg" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/icon-twitter.svg" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/icon-pinterest.svg" alt="Pinterest" />
            </a>
          </li>
        </ul>
      </Footer>
    </>
  )
}

export default IndexPage
