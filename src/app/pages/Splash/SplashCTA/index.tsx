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
    <div>
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
          <CTAProductCard href="https://luvnft.com/" target="_blank">
            <span>🐸💜 Spend $LUV on LUV NFT 6/6/23</span>
            <span>
              NFT platform powered by $LUV. Users can buy and sell NFTs using $LUV. 
              1% of each donation is sent to the DAO treasury. #SpreadPepeLUV
            </span>
          </CTAProductCard>
          <CTAProductCard href="https://luvnft.com" target="_blank">
            <span>🐸💜 LUV Swap Meet 7/7/23</span>
            <span>
              LUVswapmeet is a DEX that allows users to see trades, charts, 
              and liquidity in one interface. The blockchain swap meet. 🐸💜🔄
            </span>
          </CTAProductCard>
          <CTAProductCard href="https://luvnft.com/" target="_blank">
            <span>🐸💜 LUV Casino 8/8/23</span>
            <span>
              A gambling-for-good lottery game where users bet $LUV to win a 
              pot of $LUV. On each bet, 20% of your $LUV is burned, 40% is 
              added to the pot, and 40% goes to the tribe reserves. #8️⃣8️⃣8️⃣🐸💜
            </span>
          </CTAProductCard>
        </CTAClick>
      </CTA>
      );
};
    