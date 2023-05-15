import {
  CTA,
  CTAClick,
  CTADescription,
  CTAHeader,
  CTAProductCard,
} from './styles';

export const SplashCTA = () => {
  return (
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
            NFT platform powered by $LUV Users can buy and sell NFTs using $LUV. 
            1% of each donation is sent to the DAO treasury. #SpreadPepeLUV
            </span>
          </CTAProductCard>
          <CTAProductCard href="https://luvnft.com" target="_blank">
            <span>🐸💜 LUV Swap Meet 7/7/23</span>
            <span>
            LUVswapmeet is a DEX that allows users to see trades,charts 
            and liquidity in one interface. The blockchain swap meet.🐸💜🔄
            </span>
          </CTAProductCard>
          <CTAProductCard href="https://luvnft.com/" target="_blank">
            <span>🐸💜 LUV Casino 8/8/23</span>
            <span>
            A gambling for good lottery game where users bet $LUV to win a 
            pot of $LUV. On each bet, 20% of your $LUV is burned, 40% is 
            added to the pot. and 40% goes to the tribe reserves. #8️⃣8️⃣8️⃣🐸💜
            </span>
          </CTAProductCard>
      </CTAClick>
      <iframe
    src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc20.html?contract=0x16C9810bBEa6CCDFf74a2E79144032090A80EE81&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%7D"
    width="600px"
    height="600px"
    style="max-width:100%;"
    frameborder="0"
    ></iframe>
    </CTA>
  );
};