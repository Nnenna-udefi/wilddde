import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBrown: "#efe8de",
        darkerBrown: "#ebe0ce",
        lightBrown: "#f3ece2",
        blackBrown: "#463f35",
        borderBrown: "#cabfad",
        tealGreen: "#283f2b",
        buttonGreen: "#e3e6cb",
        lightTeal: "#576856",
      },
      backgroundImage: {
        bgHero1:
          'url("https://eqtrneuscpwebsa.azureedge.net/media/golikc1h/231012_wilde_staycity_outside_shots-with-couple_0179-1_final_web.jpg?width=2160&height=1275&format=webp&quality=90&rnd=133458245563470000")',
        bgHero2:
          'url("https://eqtrneuscpwebsa.azureedge.net/media/golikc1h/231012_wilde_staycity_outside_shots-with-couple_0179-1_final_web.jpg?width=900&height=918&format=webp&quality=90&rnd=133458245563470000")',
      },
      fontFamily: {
        fontMedian: "Median",
      },
    },
  },
  plugins: [],
} satisfies Config;
