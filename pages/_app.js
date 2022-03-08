/* pages/_app.js */
import '../styles/globals.css'
import '../styles/style.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link href="/">
              <a href="/" class="nav-link px-2 link-secondary">Home</a>
              </Link>
              </li>
            <li>
              <Link href="/create-nft">
                <a href="/create-nft" class="nav-link px-2 link-dark">Sell NFT</a>
              </Link>
            </li>
            <li>
              <Link href="/my-nfts">
                <a href="/my-nfts" class="nav-link px-2 link-dark">My NFTs</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <a href="/dashboard" class="nav-link px-2 link-dark">Dashboard</a>
              </Link>
            </li>
          </ul>
        </header>
        <Component {...pageProps} />
      </div>
    </div>
    
    // <div>
    //   <nav className="border-b p-6">
    //     <p className="text-4xl font-bold">Marketplace</p>
    //     <div className="flex mt-4">
    //       <Link href="/">
    //         <a className="mr-4 text-pink-500">
    //           Home
    //         </a>
    //       </Link>
    //       <Link href="/create-nft">
    //         <a className="mr-6 text-pink-500">
    //           Sell NFT
    //         </a>
    //       </Link>
    //       <Link href="/my-nfts">
    //         <a className="mr-6 text-pink-500">
    //           My NFTs
    //         </a>
    //       </Link>
    //       <Link href="/dashboard">
    //         <a className="mr-6 text-pink-500">
    //           Dashboard
    //         </a>
    //       </Link>
    //     </div>
    //   </nav>
    //   <Component {...pageProps} />
    // </div>
  )
}

export default MyApp