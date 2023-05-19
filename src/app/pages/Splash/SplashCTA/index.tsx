import {
  CTA,
  CTAClick,
  CTADescription,
  CTAHeader,
  CTAProductCard,
} from './styles';
<iframe
    src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc20.html?contract=0x16C9810bBEa6CCDFf74a2E79144032090A80EE81&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%7D&theme=dark"
    width="600px"
    height="600px"
    style="max-width:100%;"
    frameborder="0"
    ></iframe>
export const SplashCTA = () => {
  return (
    <CTA>
        <CTAHeader>$LUV IS THE NEW MONEY</CTAHeader>
        <CTADescription>
          <span>
            Pepe is $LUV, operating on the Polygon blockchain, without gas 
            fees. We invite you to join our mission to educate our tribe on 
            generating spiritual wealth from within, a process that ultimately 
            manifests into tangible wealth. Share $LUV and the universe will 
            reciprocate with tenfold blessings.
          </span>
          <span>
            Money is energy, and our tribe is committed to attracting similar 
            vibrations that prioritize 'Purpose over Profit.' Pepe $LUV is 
            intended for those who wish to address real-world problems and 
            propel humanity forward. 
            
            "IN LUV WE TRUST" 
          </span>
        </CTADescription>
        <CTAClick>
          <CTAProductCard href="https://luvnft.com/" target="_blank">
            <span>🐸💜 SPEND $LUV 6/6/23</span>
            <span>
              The LUV NFT platform is powered by $LUV, facilitating users to 
              buy and sell NFTs using $LUV as a medium. In our forthcoming 
              customized map, you'll be able to locate businesses worldwide 
              that accept $LUV.
            </span>
          </CTAProductCard>
          <CTAProductCard href="https://luvnft.com" target="_blank">
            <span>🐸💜 .LUV NAME 7/7/23</span>
            <span>
            Own a .LUV domain on the Polygon blockchain, eligible for use 
            as a verified username on LUV NFT 5D-commerce market. Donate your 
            $LUV to claim your new higher-self name. IAM.LUV
            </span>
          </CTAProductCard>
          <CTAProductCard href="https://luvnft.com/" target="_blank">
            <span>🐸💜 RENT $LUV 8/8/23</span>
            <span>
            Connect with LNElords who accept $LUV as a solution to the housing 
            crisis. Lease your Airbnb or vacant property with a LUV NFT to 
            eliminate unnecessary fees, accepting $LUV as your preferred method 
            of payment.
              </span>
        </CTAProductCard>
      </CTAClick>
    </CTA>
  );
};
