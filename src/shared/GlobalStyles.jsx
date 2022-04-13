import styled, { createGlobalStyle } from 'styled-components';

export const variables = {
	colors: {
		primary: '#6333FF',
		secondary: '#41F37A',
		danger: '#f34141',
		bg_default: '#000114',
		gray: '#767782',
		dark_gray: '#222',
		font_default: '#fff',
	},
	font: {
		size: '16px',
		titles: 'PT Sans',
		main: 'Open Sans',
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
		ease: 'backInOut',
		duration: 1.5,
	},
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
	html {
  		font-size: 16px;
	}
	@media screen and (min-width: 320px) {
		html {
			font-size: calc(16px + 6 * ((100vw - 320px) / 680));
		}
	}
	@media screen and (min-width: 1000px) {
		html {
			font-size: 22px;
		}
	}
    body {
        font-family: ${variables.font.main}, sans-serif, Helvetica, Arial ;
        background-color: ${variables.colors.bg_default}; 
        color:  ${variables.colors.font_default};
	
    }
	a {
		all: unset;
		transition: ${variables.transitions.short};
		cursor: pointer;
	}
	p{
		font-size: clamp(1rem, .8vw, 5rem)
	}
    img {
        width: 100%;
        object-fit: cover;
    }
	.section {
		padding:  5rem 3rem;
		margin: 5rem 0;
		overflow: hidden;
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
	font-size: clamp(2rem, 6.5vw, 10rem);
	letter-spacing: 1px;
	display: block; // Because it is a span
`;

export const SubTitle = styled(Title)`
	font-size: clamp(1.5rem, 3vw, 8rem);
`;
export const MinTitle = styled(Title)`
	font-size: clamp(1rem, 2.5vw, 7rem);
`;
