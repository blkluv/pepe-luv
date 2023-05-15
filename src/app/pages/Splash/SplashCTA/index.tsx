import React from 'react';
import {
  CTA,
  CTAClick,
  CTADescription,
  CTAHeader,
  CTAProductCard,
} from './styles';

export const SplashCTA = () => {
  return (
    <>
      <CTA>
        <CTAHeader>PEPE without the Gas Fees</CTAHeader>
        <CTADescription>
          <span>
            If a picture is worth a thousand words, then a meme is worth a
            thousand pictures!
          </span>
          <span>
            PepeLUV is a higher frequency of Pepe movement on the Polygon blockchain
            with the mission of solving real-world problems with our meme coin
            profits. We're creating spiritual wealth by spreading LUV. 
            "IN LUV WE TRUST"
          </span>
        </CTADescription>
        <CTAClick>
          <CTAProductCard href="https://nft.tezospepe.com/" target="_blank">
            <span>🐸 Mint PepeLUV $LUV</span>
            <span>
              Mint PepeLUV $LUV token with no gas fees on the Polygon network.
              Join our "Purpose over profit" movement to spread LUV.
            </span>
          </CTAProductCard>
          <CTAProductCard href="https://pot.tezospepe.com/swap" target="_blank">
            <span>🐸 PepeLUV AR Filter</span>
            <span>
              PepeLUV has a TikTok AR filter called "Purple LUV Eyes".
              Use our LUV NFT filter, tag @LUVNFT to win $LUV.
            </span>
          </CTAProductCard>
          <CTAProductCard href="https://pot.tezospepe.com/" target="_blank">
            <span>🐸 PepeLUV ID</span>
            <span>
              Support the PepeLUV movement by holding and having a PepeLUV
              NFT ID in your social media avatar to market the movement.
            </span>
          </CTAProductCard>
        </CTAClick>
      </CTA>
      <iframe
        src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc20.html?contract=0x16C9810bBEa6CCDFf74a2E79144032090A80EE81&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%
