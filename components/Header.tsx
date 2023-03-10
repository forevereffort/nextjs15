import Image from 'next/image'
import BaseStyles from '../styles/Base.module.css'
import HeaderStyles from '../styles/Header.module.css'
import {useState} from 'react'

const Header = () => {
  const [isWhy15FiveHovering, setIsWhy15FiveHovering] = useState(false);
  const [isProductsHovering, setIsProductsHovering] = useState(false);
  const [isResourcesHovering, setIsResourcesHovering] = useState(false);
  const [isCompanyHovering, setIsCompanyHovering] = useState(false);

  const handleWhy15FiveMouseOver = () => {
    setIsWhy15FiveHovering(true);
  };

  const handleWhy15FiveMouseOut = () => {
    setIsWhy15FiveHovering(false);
  };

  const handleProductsMouseOver = () => {
    setIsProductsHovering(true);
  };

  const handleProductsMouseOut = () => {
    setIsProductsHovering(false);
  };

  const handleResourcesMouseOver = () => {
    setIsResourcesHovering(true);
  };

  const handleResourcesMouseOut = () => {
    setIsResourcesHovering(false);
  };

  const handleCompanyMouseOver = () => {
    setIsCompanyHovering(true);
  };

  const handleCompanyMouseOut = () => {
    setIsCompanyHovering(false);
  };

  return (
    <header>
      <div className={BaseStyles.container}>
        <div className={HeaderStyles.navRow}>
          <div>
            <a href=""><Image src="/15-five-logo.svg" alt="15 five Logo" width={121} height={32} /></a>
          </div>
          <nav className={HeaderStyles.nav}>
            <ul>
              <li onMouseOut={handleWhy15FiveMouseOut} onMouseOver={handleWhy15FiveMouseOver}>
                <a href="#" className={HeaderStyles.hasMegaMenu}>Why 15Five</a>
                { isWhy15FiveHovering && (
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
                        <div className={`${HeaderStyles.megaNavRight} ${HeaderStyles.megaNavRightWide}`}>
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
                )}
              </li>
              <li onMouseOver={handleProductsMouseOver} onMouseOut={handleProductsMouseOut}>
                <a href="#" className={HeaderStyles.hasMegaMenu}>Products</a>
                { isProductsHovering && (
                  <div className={`${HeaderStyles.megaNav} ${HeaderStyles.megaNav2}`}>
                    <div className={BaseStyles.container}>
                      <div className={HeaderStyles.megaNavRow}>
                        <div className={HeaderStyles.megaNavLeft}>
                          <div className={HeaderStyles.lead}>
                            <div className={HeaderStyles.title}>Overview</div>
                          </div>
                          <ul className={HeaderStyles.subMenu}>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Product Overview</span>
                              </a>
                            </li>                                                 
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>HR Superstars Community</span>
                              </a>
                            </li>                                                   
                          </ul>
                        </div>
                        <div className={HeaderStyles.megaNavRight}>
                          <div className={HeaderStyles.lead}>
                            <div className={HeaderStyles.title}>Products</div>
                          </div>
                          <ul className={HeaderStyles.subMenu}>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={`${HeaderStyles.subLink} ${HeaderStyles.subLink1}`} href="#">
                                <Image src="/Engagement.svg" alt="Engage" width={24} height={24}/>
                                <span className={HeaderStyles.subTitle}>Engage</span>
                                <div className={HeaderStyles.subDes}>Engagement surveys and feedback tools to focus on what matters.</div>
                              </a>
                            </li>                                                 
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={`${HeaderStyles.subLink} ${HeaderStyles.subLink2}`} href="#">
                                <Image src="/Performance.svg" alt="Perform" width={24} height={24}/>
                                <span className={HeaderStyles.subTitle}>Perform</span>
                                <div className={HeaderStyles.subDes}>Performance reviews and measurement that inspire growth.</div>
                              </a>
                            </li>                                                   
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={`${HeaderStyles.subLink} ${HeaderStyles.subLink3}`} href="#">
                                <Image src="/focus71de.svg" alt="Focus" width={24} height={24}/>
                                <span className={HeaderStyles.subTitle}>Focus</span>
                                <div className={HeaderStyles.subDes}>OKRs and goal management that is easy and effective.</div>
                              </a>
                            </li>                                                
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={`${HeaderStyles.subLink} ${HeaderStyles.subLink4}`} href="#">
                                <Image src="/transform-icon653d.svg" alt="Transform" width={24} height={24}/>
                                <span className={HeaderStyles.subTitle}>Transform</span>
                                <div className={HeaderStyles.subDes}>A blended learning solution designed to upskill managers at all levels.</div>
                              </a>
                            </li>
                          </ul>
                          <a className={`${HeaderStyles.subLink} ${HeaderStyles.subLinkAll}`} href="#">
                            <span className={HeaderStyles.subTitle}>See All</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li onMouseOver={handleResourcesMouseOver} onMouseOut={handleResourcesMouseOut}>
                <a href="#" className={HeaderStyles.hasMegaMenu}>Resources</a>
                { isResourcesHovering && (
                  <div className={HeaderStyles.megaNav}>
                    <div className={BaseStyles.container}>
                      <div className={HeaderStyles.megaNavRow}>
                        <div className={HeaderStyles.megaNavLeft}>
                          <ul className={HeaderStyles.subMenu}>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Content Library</span>
                                <div className={HeaderStyles.subDes}>Books, guides, videos and more for thriving organizations</div>
                              </a>
                            </li>                                                 
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Blog</span>
                                <div className={HeaderStyles.subDes}>Deep insights on developing people, teams, and organizations</div>
                              </a>
                            </li>                                                   
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Help Center</span>
                                <div className={HeaderStyles.subDes}>Get the latest walkthroughs, tips, and product releases</div>
                              </a>
                            </li>                                                
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Podcasts</span>
                                <div className={HeaderStyles.subDes}>Listen to stories from the frontlines of HR and People Ops</div>
                              </a>
                            </li>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Events</span>
                                <div className={HeaderStyles.subDes}>Upcoming webinars and events</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className={HeaderStyles.megaNavRight}>
                          <div className={HeaderStyles.lead}>
                            <div className={HeaderStyles.title}>Featured Resources</div>
                          </div>
                          <ul>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>HR Hacks for Business Growth</span>
                                <div className={HeaderStyles.subDes}>Watch the virtual summit on demand</div>
                              </a>
                            </li>                                                 
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Employee Experience Quiz</span>
                                <div className={HeaderStyles.subDes}>Discover your #1 employee experience gap and ways to address the root cause</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li onMouseOver={handleCompanyMouseOver} onMouseOut={handleCompanyMouseOut}>
                <a href="#" className={HeaderStyles.hasMegaMenu}>Company</a>
                { isCompanyHovering && (
                  <div className={HeaderStyles.megaNav}>
                    <div className={BaseStyles.container}>
                      <div className={HeaderStyles.megaNavRow}>
                        <div className={HeaderStyles.megaNavLeft}>
                          <ul className={HeaderStyles.subMenu}>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>About</span>
                                <div className={HeaderStyles.subDes}>Learn about our mission, values, and story</div>
                              </a>
                            </li>                                                 
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Partnership Programs</span>
                                <div className={HeaderStyles.subDes}>Connect your clients with a best-in-class HR technology</div>
                              </a>
                            </li>                                                   
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Press</span>
                                <div className={HeaderStyles.subDes}>See what the media has been saying about us</div>
                              </a>
                            </li>                                                
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Careers</span>
                                <div className={HeaderStyles.subDes}>Come be a part of our award-winning culture</div>
                              </a>
                            </li>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Refer a Friend</span>
                                <div className={HeaderStyles.subDes}>Invite your friends to join 15Five</div>
                              </a>
                            </li>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Contact Us</span>
                                <div className={HeaderStyles.subDes}>Let???s get connected</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className={HeaderStyles.megaNavRight}>
                          <div className={HeaderStyles.lead}>
                            <div className={HeaderStyles.title}>We???re Hiring</div>
                          </div>
                          <ul>
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Sales Development Rep</span>
                                <div className={HeaderStyles.subDes}>Sales Development (Indianapolis, IN or Raleigh, NC)</div>
                              </a>
                            </li>                                                 
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>Sales Development Manager</span>
                                <div className={HeaderStyles.subDes}>Sales Development (Indianapolis, IN or Raleigh, NC)</div>
                              </a>
                            </li>                                                   
                            <li className={HeaderStyles.subMenuItem}>
                              <a className={HeaderStyles.subLink} href="#">
                                <span className={HeaderStyles.subTitle}>All Open Positions</span>
                              </a>
                            </li>                                                
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
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
  )
}

export default Header