import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({}),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Inter:400,700", "Noto Sans SC:400,700", "Noto Sans JP:400,700"],
        mono: "Fira Code:400,700",
        overpass: [
          "Overpass:400,700",
          "Noto Sans SC:400,700",
          "Noto Sans JP:400,700",
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
      },
    }),
  ],
});
