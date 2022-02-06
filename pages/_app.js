import '../styles/globals.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/svgs/logo'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='navs'>
        <div className='nav-left'>
          <div className='nav-logo'>
            <Image src="/images/logo.png" width="200px" height="50px" />
            {/* <Logo /> */}
          </div>
        </div>
        <div className='nav-right'>
          <div className='nav-links'>
            <div className='nav-link'>
              <Link href="/">Home</Link>
            </div>
            <div className='nav-link'>
              <Link href="/booking">Book</Link>
            </div>
            <div className='nav-link'>
              <Link href="/standings">Standing</Link>
            </div>
            <div className='nav-dashboard'>
              <div className='nav-dashboard-options'>
                <div className='nav-single'>
                  Dashborad
                </div>
                <div className='nav-hover-list' >
                <div className='nav-link sub'>
                  <Link href="/user-info">User Info</Link>
                </div>
                <div className='nav-link sub'>
                  <Link href="/collection">My Collection</Link>
                </div>
                <div className='nav-link sub'>
                  <Link href="/create">Create NFT</Link>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className='nav-member'>
            <div className='nav-search'>

            </div>
            <div className='nav-signup'>
              <button className='connect-btn'>Connect</button>
            </div>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />   
    </div>
  )
}

export default MyApp
