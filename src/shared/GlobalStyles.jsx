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
		bold: 700,
		semiBold: 600,
		light: 300,
	},
	mediaQueries: {
		mobile_l: '425px',
		mobile_xl: '580px',
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
	a {
		all: unset;
		cursor: pointer;
	}
    img {
        width: 100%;
        object-fit: cover;
    }
	.section {
		padding: 3rem;
		min-height: 100vh;
	}
	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.grid{
		display: grid;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}

`;

export const Title = styled.span`
	font-weight: ${variables.font.bold};
	font-family: ${variables.font.titles};
	font-size: clamp(0.8rem, 8.5vw, 4rem);
	letter-spacing: 1px;
	display: block; // Because it is a span
`;

export const SubTitle = styled(Title)`
	font-size: clamp(0.8rem, 7.5vw, 3rem);
`;
export const MinTitle = styled(Title)`
	font-size: clamp(1rem, 4.5vw, 2rem);
`;
