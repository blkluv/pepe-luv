import styled from 'styled-components';
import { NavPage } from '../types';
import { Dropdown, NavItem, NavItemContainer } from './styles';
import { StyleConstants } from 'src/styles/style-constants';

export const NavContent = styled.div`
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const NavOptions = () => {
  const pages: NavPage[] = [
    {
      name: 'Socials',
      alt: 'Socials',
      subpage: [
        {
          url: 'https://tiktok.com/@luvispepe',
          name: 'TikTok',
          alt: 'TikTok',
        },
        {
          url: 'https://t.me/PepeLUV',
          name: 'Telegram',
          alt: 'Telegram',
        },
        {
          url: 'https://discord.gg/Sp9fubxqgf',
          name: 'Discord',
          alt: 'Discord',
        },
      ],
    },
    {
      name: 'Buy',
      alt: 'Buy',
      subpage: [
        {
          url: 'https://luvnft.com/pepeluv',
          name: 'Pepe LUV',
          alt: 'Mint $LUV',
        },
        {
          url: 'https://pitch.com/public/da5f4313-0acb-4448-8729-5c34e86d11f5',
          name: 'White Paper',
          alt: 'White Paper',
        },
      ],
    },
    {
      name: 'NFTs',
      alt: 'NFTs',
      subpage: [
        {
          url: 'https://luvnft.com',
          name: 'LUV NFT',
          alt: 'LUV NFT',
        },
      ],
    },
    {
      url: 'https://www.tiktok.com/t/ZTRKs3XeL/',
      name: 'AR',
      alt: 'AR',
    },
  ];

  return (
    <NavContent>
      {pages.map((page, index) => (
        <NavItemContainer key={`c-${index}`}>
          <NavItem
            href={page.url && page.url}
            target="_blank"
            title={page.alt}
            rel="noopener noreferrer"
          >
            {page.name}
          </NavItem>

          {page.subpage && (
            <Dropdown>
              {page.subpage.map((subpage, index) => (
                <NavItem href={subpage.url} key={`sp-${index}`} target="_blank">
                  {subpage.name}
                </NavItem>
              ))}
            </Dropdown>
          )}
        </NavItemContainer>
      ))}
    </NavContent>
  );
};
