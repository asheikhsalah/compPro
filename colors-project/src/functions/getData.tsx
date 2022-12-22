import PaletteInterface from "../types/paletteInterface";
import request from "./request";

export const getPalettes = async (id: string) => {
	const res = await request(`/palettes/${id}`, { method: "GET" });
	if (res.ok) {
		const palettes = await res.json();
		return palettes;
	} else {
		console.log(await res.json());
		return "error";
	}
};

export const getThemes = async (id: string) => {
	const res = await request(`/distinct/${id}`, { method: "GET" });
	if (res.ok) {
		const themes = await res.json();
		// Convert 'themes', an array of objects, into a tidier array of strings, called 'arr'
		const arr: any = new Array();
		themes.forEach((value: { "theme": string | null }) => {
			if (value["theme"] !== null) {
				arr.push(value["theme"]);
			}
		});
		return arr;
	} else {
		console.log(await res.json());
		return "error";
	}
};

export const getThemedPalettes = async (id: string, theme: string) => {
	const res = await request(`/palettes/${id}/${theme}`, { method: "GET" });
	if (res.ok) {
		const palettes = await res.json();
		console.log(palettes);
		return palettes;
	} else {
		console.log(await res.json());
		return "error";
	}
};
