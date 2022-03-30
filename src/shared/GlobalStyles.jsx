import styled, { createGlobalStyle } from 'styled-components';

export const variables = {
	colors: {
		primary: '#6333FF',
		secondary: '#41F37A',
		bg_default: '#000114',
		gray: '#767782',
		dark_gray: '#222',
		font_default: '#fff',
	},
	font: {
		size: '16px',
		titles: 'Oswald',
		main: 'Roboto',
		semiBold: 600,
	},
	mediaQueries: {
		mobile_l: '425px',
		tablet: '768px',
		tablet_number: 768,
		laptop: '1024px',
	},
	transitions: {
		short: 'ease-in-out .5s',
	},
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: ${variables.font.main}, sans-serif, Helvetica, Arial ;
        background-color: ${variables.colors.bg_default};
        color:  ${variables.colors.font_default};
    }
    img {
        width: 100%;
        object-fit: cover;
    }
`;
