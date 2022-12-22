import styled from "styled-components";
import ColourSwatch from "../components/ColourSwatch";
import {
	TextInput,
	SubmitInput,
	CheckInput,
	RadioField,
	RadioInput,
} from "../components/Inputs";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DivInterface from "../types/divInterface";

// **GENERAL
export const SubmitSC = styled(SubmitInput)`
	cursor: pointer;
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	margin: 1%;
	padding: 1%;
	border-radius: 5px;
	box-shadow: -5px 5px var(--accent-blue);
	transition: all 0.3s ease-in-out;
	&:hover {
		box-shadow: 5px 5px var(--accent-blue);
	}
	&:active {
		box-shadow: 0 5px var(--accent-blue);
	}
`;

// **HEADER
export const AppHeaderSC = styled.header`
	background-image: linear-gradient(#043742, var(--accent-blue));
	width: 100%;
	//border-bottom: 2px solid var(--o-white);
`;

export const AppTitleSC = styled.h1`
	font-family: var(--font-title);
	font-size: var(--font-size-title);
	margin: 1% auto;
	color: var(--text-background);
	text-shadow: 3px 3px var(--text-colour);
	position: relative;
`;
export const NavContainer = styled.nav`
	display: flex;
	background-color: var(--dark-background);
	justify-content: space-between;
	height: 50px;
	width: 100%;
	padding: 1.5% 15% 0.5%;
	border-bottom: 2px solid var(--accent-blue);
	position: sticky;
	top: 0;
	z-index: 2;
`;
export const NavButton = styled(NavLink)`
	font-family: var(--font-para);
	font-size: calc(var(--font-size-small) * 1.1);
	text-decoration: none;
	background-color: var(--accent-pink);
	padding: 0.8%;
	border-radius: 10px;
	box-shadow: -5px -5px var(--accent-yellow);
	transition: all 0.3s ease-out;

	&:link,
	&:visited {
		color: white;
		text-shadow: 1px 1px 1px var(--o-black);
	}
	&:hover {
		box-shadow: 5px -5px var(--accent-yellow);
	}
	&:active {
		box-shadow: 3px -3px var(--accent-yellow);
	}
`;
export const LogoutButtonSC = styled.button`
	font-family: var(--font-para);
	font-size: calc(var(--font-size-small) * 1.1);
	text-decoration: none;
	background-color: var(--accent-pink);
	padding: 0.8%;
	border-radius: 10px;
	box-shadow: -5px -5px var(--accent-yellow);
	transition: all 0.3s ease-out;
	color: white;
	text-shadow: 1px 1px 1px var(--o-black);

	&:hover {
		box-shadow: 5px -5px var(--accent-yellow);
	}
	&:active {
		box-shadow: 3px -3px var(--accent-yellow);
	}
`;

// **FOOTER
export const AppFooterSC = styled.footer`
	background-image: linear-gradient(1turn, #043742, var(--accent-blue));
	width: 100%;
	border-bottom: 2px solid var(--o-white);
	position: sticky;
	bottom: 0;
	z-index: 2;
`;

export const AppFooterTextSC = styled.h4`
	font-family: var(--font-display);
	font-size: var(--font-size-footer);
	color: var(--text-background);
`;

// **LOGIN
export const LoginFormSC = styled.form`
	display: flex;
	flex-direction: column;
	place-items: center;
	margin-top: 20%;
`;
export const LoginInputSC = styled.input`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	text-align: center;
	width: 60vw;
	margin: 1%;
	padding: 1%;
	border-radius: 5px;
`;
export const LoginLabelSC = styled.label`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	color: var(--accent-blue);
`;
export const LoginTagSC = styled.p`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	color: var(--text-background);
`;
export const LoginLinkSC = styled(Link)`
	&:link,
	&:visited {
		color: white;
	}
	&:hover {
		text-decoration: underline var(--accent-yellow);
	}
	&:active {
		text-decoration: underline var(--accent-pink);
	}
`;
// **NEW PALETTE
export const PaletteFormSC = styled.form`
	display: flex;
	flex-direction: column;
	place-items: center;
	background-color: var(--light-background);
	border: 6px double var(--accent-blue);
	box-shadow: 20px 20px var(--accent-yellow), -20px -20px var(--accent-pink);
	border-radius: 20px;
	padding: 3% 5%;
	margin: 5% auto;
`;

export const PaletteInputNameSC = styled.input`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	text-align: center;
	width: 60vw;
	margin: 1%;
	padding: 1%;
	border-radius: 5px;
`;
export const PaletteInputThemeSC = styled.input`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	text-align: center;
	width: 60vw;
	margin: 1%;
	padding: 1%;
	border-radius: 5px;
`;
export const RadioFieldSC = styled(RadioField)`
	display: flex;
	width: 15em;
	justify-content: space-evenly;
	margin: 3% auto;
	/* padding: 2% 10%; */
	border: 2px groove var(--accent-blue);
	border-radius: 5px;
`;
export const RadioLegendSC = styled.legend`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	text-align: left;
`;
export const RadioDivSC = styled.div`
	display: flex;
	/* grid-template-columns: 1fr 1fr; */
	justify-content: space-between;
	width: 8em;
	margin: 2% 10%;
	padding: 2% 4%;
	border: 2px solid var(--accent-blue);
	border-radius: 5px;
`;
export const RadioLabelSC = styled.label``;
export const RadioInputSC = styled.input``;
export const CheckInputSC = styled(CheckInput)``;
// **CONTAINER
export const PaletteListSC = styled.article`
	display: flex;
	flex-direction: column;
	place-items: center;
	flex-grow: 1;
`;
export const PaletteHeaderSC = styled.h2`
	font-family: var(--font-display);
	font-size: var(--font-size-med);
`;
export const ColourPaletteSC = styled.section`
	display: flex;
	place-items: center;
	flex-direction: column;
	/* height: 70vh; */
	//width: 90%;
	margin: 5% 5%;
	padding: 5%;
	background-color: var(--light-background);
	box-shadow: 0 0 4px 4px var(--dark-background) inset;
	border: 5px double var(--accent-blue);
	border-radius: 30px;
`;
export const SwatchContainerSC = styled.article`
	margin: 2% auto;
	/* display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: fit-content;
	flex-grow: 1; */
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const GradientBar: React.FC<DivInterface> = (props) => {
	return <div className={props.className}></div>;
};
// can also explore just setting the width rather than using the numColours to calculate it
// so all bars will be the same width and the gradient will stretch to the width
export const GradientBarSC = styled(GradientBar)`
	// width: ${(props) => (props.numColour ? props.numColour * 135 : 135)}px;
	// this isn't resizeable, use %, vw, or em to make it responsive
	//width: 680px;
	width: 70%;
	height: 1.5em;
	border-radius: 10px;
	box-shadow: 0 0 0 2px var(--dark-background);
	//border: 5px double var(--dark-background);
	background-image: linear-gradient(
		90deg,
		${(props) => (props.gradient ? props.gradient : "#ffffff")}
	);
	margin-top: 20px;
`;
// **SWATCH
export const ColourSwatchSC = styled(ColourSwatch)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr repeat(6, auto) 1fr;
	justify-items: center;
	flex-grow: 1;
	/* border: 2px solid var(--dark-background); */
	/* box-shadow: 0 0 0 2px var(--dark-background); */
`;
export const ColourHexSC = styled.p`
	grid-row: 2 / 3;
	grid-column: 1 / 3;
	font-family: var(--font-para);
	font-weight: bolder;
	font-size: calc(var(--font-size-medium) * 2);
	text-shadow: 1px 1px 1px white;
	text-transform: uppercase;
	margin: 5%;
`;
export const ColourInputSC = styled.input`
	grid-row: 4 / 6;
	grid-column: 1 / 3;
	margin: 5% auto;
	border: 1px solid white;
	border-radius: 50%;
	width: 7em;
	height: 7em;
	&:hover {
		box-shadow: 0 0 4px 2px var(--o-white);
	}
	&::-webkit-color-swatch {
		border-radius: 50%;
		border: none;
	}
	&::-moz-color-swatch {
		border-radius: 50%;
		border: none;
	}
`;
export const ColourInputLabelSC = styled.label`
	grid-row: 6 / 7;
	grid-column: 1 / 3;
	font-family: var(--font-para);
	font-weight: bold;
	font-size: calc(var(--font-size-small) * 0.8);
	text-shadow: 1px 1px 1px white;
	text-align: center;
	margin: 5%;
`;
export const AddNewSC = styled.button`
	grid-row: 3 / 4;
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	background-color: transparent;
	height: fit-content;
	width: fit-content;
	opacity: 50%;
	margin: 5% auto;
	padding: 0;
	&:hover {
		opacity: 100%;
		filter: drop-shadow(0 0 4px var(--o-white));
	}
`;
export const PlusButtonSC = styled.button`
	grid-row: 3 / 4;
	font-family: var(--font-title);
	font-size: var(--font-size-large);
	opacity: 50%;
	&:hover {
		opacity: 100%;
		text-shadow: 0 0 4px var(--o-white);
	}
`;
//  **SIDEBAR NAV
export const SidebarMainSC = styled.main`
	width: 100%;
	display: flex;
	flex-direction: row;
	/* grid-template-columns: 1fr 9fr; */
`;
export const SidebarDivSC = styled.nav`
	background-color: var(--dark-background);
	//width: max-content;
	//flex-basis: content;
	//flex-grow: 1;
	height: 100vh;
	position: sticky;
	top: 50px;
	align-self: flex-start;
`;
export const SidebarSC = styled.div`
	//width: 15rem;
	background-color: var(--dark-background);
	//border-left: 5px solid var(--accent-blue);
`;
export const SidebarButtonSC = styled.button`
	font-family: var(--font-title);
	font-size: var(--font-size-large);
	background: none;
	margin-top: 5px;
`;
export const SidebarUlSC = styled.ul`
	list-style-type: none;
	width: 10rem;
	margin: 0;
	padding: 0 5%;
`;
export const SidebarLiSC = styled.li`
	margin: 2% 5%;
`;
export const SidebarLinkSC = styled(NavLink)`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	text-decoration: none;
	&:link,
	&:visited {
		color: white;
	}
	&:hover {
		text-decoration: underline var(--accent-yellow);
	}
	&:active {
		text-decoration: underline var(--accent-pink);
	}
`;
// **THEMES
export const ThemeContainerSC = styled.section``;
export const ThemeHeaderSC = styled.h3``;
//  **ERROR
export const ErrorContainerSC = styled.section`
	display: flex;
	flex-direction: column;
	place-items: center;
	margin: 20% 5%;
`;
export const ErrorHeaderSC = styled.h2`
	font-family: var(--font-title);
	font-size: var(--font-size-title);
	color: var(--text-background);
`;
export const ErrorMessageSC = styled.p`
	font-family: var(--font-para);
	font-size: var(--font-size-med);
	color: var(--text-background);
`;
