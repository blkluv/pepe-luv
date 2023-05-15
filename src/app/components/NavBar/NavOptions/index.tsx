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
          url: 'https://twitter.com/luvnft',
          name: 'Twitter',
          alt: 'Twitter',
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
      url: 'https://tezos-homebase.io/explorer/dao/KT1LyPqdRVBFdQvhjyybG5osRCXnGSrk15M5/overview',
      name: 'DAO',
      alt: 'DAO',
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
