import '../styles/globals.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Web3Modal } from "web3modal"

import { ContractAddress } from '../config'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  async function onInit() {
    if(typeof web3 !== 'undefined'){
      await window.ethereum.enable();
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      // console.log(typeof account)
      // console.log(account)
      window.ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
        // console.log(accounts[0])
        return accounts[0]
      });
      setAcc(account);
    }
    else{
      return null;
    }
  }


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
            <div className='nav-link' style={ (router.pathname) === "/" ?   { color:"#f29100", fontWeight:'700' } : null }>
              <Link href="/">Home</Link>
            </div>
            <div className='nav-link' style={ (router.pathname) === "/booking" ?   { color:"#f29100", fontWeight:'700' } : null }>
              <Link href="/booking">Book</Link>
            </div>
            <div className='nav-link' style={ (router.pathname) === "/standings" ?   { color:"#f29100", fontWeight:'700' } : null }>
              <Link href="/standings">Standing</Link>
            </div>
            <div className='nav-dashboard'>
              <div className='nav-dashboard-options'>
                <div className='nav-single'>
                  Dashborad
                </div>
                <div className='nav-hover-list' >
                <div className='nav-link sub' style={ (router.pathname) === "/user-info" ?   { color:"#f29100", fontWeight:'700' } : null }>
                  <Link href="/user-info">User Info</Link>
                </div>
                <div className='nav-link sub' style={ (router.pathname) === "/collection" ?   { color:"#f29100", fontWeight:'700' } : null }>
                  <Link href="/collection">My Collection</Link>
                </div>
                <div className='nav-link sub' style={ (router.pathname) === "/create" ?   { color:"#f29100", fontWeight:'700' } : null }>
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
