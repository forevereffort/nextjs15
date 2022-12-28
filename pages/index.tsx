import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BaseStyles from '../styles/Base.module.css'
import HeaderStyles from '../styles/Header.module.css'
import HomeStyles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>15five home</title>
        <meta name="description" content="15five home meta description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={BaseStyles.container}>
          <div className={HeaderStyles.navRow}>
            <div>
              <a href=""><Image src="/15-five-logo.svg" alt="15 five Logo" width={121} height={32} /></a>
            </div>
            <nav className={HeaderStyles.nav}>
              <ul>
                <li>
                  <a href="#" className={HeaderStyles.hasMegaMenu}>Why 15Five</a>
                  <div className={HeaderStyles.megaNav}>
                    <div className={BaseStyles.container}>
                      <div className={HeaderStyles.megaNavRow}>
                        <div className={`${HeaderStyles.megaNavLeft} ${HeaderStyles.megaTwoCols}`}>
                          <ul className={HeaderStyles.subMenu}>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Why Choose 15Five?</span>
                                <div className={HeaderStyles.subDes}>Our approach to people is different - and we're proud of it. </div>
                              </a>
                            </li>                                                 
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Customer Stories</span>
                                <div className={HeaderStyles.subDes}>Hear why our customers love us in their words</div>
                              </a>
                            </li>                                                   
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Best-Self Philosophy</span>
                                <div className={HeaderStyles.subDes}>How we drive performance from the inside out</div>
                              </a>
                            </li>                                                
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Community</span>
                                <div className={HeaderStyles.subDes}>Join the movement of HR Superstars</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className={HeaderStyles.megaNavRight}>
                          <div className={HeaderStyles.lead}>
                            <div className={HeaderStyles.title}>Solutions</div>
                            <div className={HeaderStyles.description}>Your path to success in building high-performing organizations</div>
                          </div>
                          <ul>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Increasing Engagement</span>
                              </a>
                            </li>                                                 
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Improving Manager Effectiveness</span>
                              </a>
                            </li>                                                   
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Remote Team Development</span>
                              </a>
                            </li>                                                
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Aligning Company Success</span>
                              </a>
                            </li>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>People Development</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="#" className={HeaderStyles.hasMegaMenu}>Products</a></li>
                <li><a href="#" className={HeaderStyles.hasMegaMenu}>Resources</a></li>
                <li><a href="#" className={HeaderStyles.hasMegaMenu}>Company</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </nav>
            <div>
              <a href="#" className={HeaderStyles.logIn}>Log In</a>
              <a href="#" className={HeaderStyles.try}>Try it Free</a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Home
