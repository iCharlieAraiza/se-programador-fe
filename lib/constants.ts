export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Sé Programador";
export const APP_DESCRIPTION =
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    "SéProgramador es un proyecto de responsabilidad social que busca ayudar a la comunidad a aprender a programar y mejorar sus habilidades técnicas.";

export const SERVER_URL =
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "your_api_key";
export const API_SECRET = process.env.NEXT_PUBLIC_API_SECRET || "your_api_secret";
export const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || "v1";
export const API_BASE_URL = `${API_URL}/${API_VERSION}`;
