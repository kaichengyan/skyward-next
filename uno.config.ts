import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({}),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Inter", "Noto Sans SC", "Noto Sans JP"],
        mono: "Fira Code",
        overpass: [
          "Overpass",
          "Noto Sans SC",
          "Noto Sans JP",
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
      },
    }),
  ],
});
