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
            'IN LUV WE TRUST.
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
            as a verified username in LUV NFT 5D-commerce. Donate your $LUV 
            to claim your new higher-self name. IAM.LUV
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
