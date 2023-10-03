import { defineConfig } from "vite";
import fs from "fs";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		https: {
			key: fs.readFileSync(".cert/key.pem"),
			cert: fs.readFileSync(".cert/cert.pem"),
		},
	},
});
