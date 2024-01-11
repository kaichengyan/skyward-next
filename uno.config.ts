import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({}),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Inter", "Noto Sans CJK SC"],
        mono: "Fira Code",
        overpass: ["Overpass", "Noto Sans CJK SC"],
      },
    }),
  ],
});
