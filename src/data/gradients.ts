const gradients = [
  {
    title: "Wavy Lines",
    code: `background-color: #ffffff;
background-image: repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 10px, #ffffff 10px, #ffffff 20px);`,
    gradient: `repeating-linear-gradient(45deg,  #f5f5f5,  #f5f5f5 10px,  #ffffff 10px,  #ffffff 20px)`,
    isDark: false,
  },
  {
    title: "Blue Arch",
    code: `background: radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%);`,
    gradient: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
    isDark: true,
  },
  {
    title: "Dreamy Radial Sunset",
    code: `background: radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.5), rgba(255, 255, 255, 0)), #1F2937;`,
    gradient:
      "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.5), rgba(255, 255, 255, 0)), #1F2937",
    isDark: true,
  },
  {
    title: "Midnight Oasis",
    code: `background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);`,
    gradient: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
    isDark: true,
  },
  {
    title: "Sunset Glow",
    code: `background: radial-gradient(ellipse 90% 90% at 50% -30%, rgba(255, 168, 76, 0.3), rgba(0, 0, 0, 0)), #111;`,
    gradient:
      "radial-gradient(ellipse 90% 90% at 50% -30%, rgba(255, 168, 76, 0.3), rgba(0, 0, 0, 0)), #111",
    isDark: true,
  },
  {
    title: "Soft Pink & Violet",
    code: `background: radial-gradient(ellipse 85% 85% at 50% -15%, rgba(198, 120, 185, 0.2), rgba(0, 0, 0, 0)), #0f0f0f;`,
    gradient:
      "radial-gradient(ellipse 85% 85% at 50% -15%, rgba(198, 120, 185, 0.2), rgba(0, 0, 0, 0)), #0f0f0f",
    isDark: true,
  },
  {
    title: "Black & Gold Shimmer",
    code: `background: radial-gradient(ellipse 70% 70% at 50% 0%, rgba(245, 203, 92, 0.25), rgba(0, 0, 0, 0)), #000;`,
    gradient:
      "radial-gradient(ellipse 70% 70% at 50% 0%, rgba(245, 203, 92, 0.25), rgba(0, 0, 0, 0)), #000",
    isDark: true,
  },

  {
    title: "Cool Blue Glow",
    code: `background: radial-gradient(ellipse 80% 80% at 50% -10%, rgba(85, 135, 185, 0.5), rgba(0, 0, 0, 0)), #101010;`,
    gradient:
      "radial-gradient(ellipse 80% 80% at 50% -10%, rgba(85, 135, 185, 0.5), rgba(0, 0, 0, 0)), #101010",
    isDark: true,
  },
  {
    title: "Aqua Mist",
    code: `background: radial-gradient(ellipse 80% 80% at 50% -25%, rgba(76, 201, 255, 0.3), rgba(0, 0, 0, 0)), #0b0d11;`,
    gradient:
      "radial-gradient(ellipse 80% 80% at 50% -25%, rgba(76, 201, 255, 0.3), rgba(0, 0, 0, 0)), #0b0d11",
    isDark: true,
  },
  {
    title: "Amber Glow",
    code: `background: radial-gradient(ellipse 85% 85% at 50% -20%, rgba(255, 153, 51, 0.25), rgba(0, 0, 0, 0)), #1a1a1d;`,
    gradient:
      "radial-gradient(ellipse 85% 85% at 50% -20%, rgba(255, 153, 51, 0.25), rgba(0, 0, 0, 0)), #1a1a1d",
    isDark: true,
  },
  {
    title: "Emerald Dawn",
    code: `background: radial-gradient(ellipse 90% 90% at 50% -35%, rgba(0, 255, 136, 0.2), rgba(0, 0, 0, 0)), #141414;`,
    gradient:
      "radial-gradient(ellipse 90% 90% at 50% -35%, rgba(0, 255, 136, 0.2), rgba(0, 0, 0, 0)), #141414",
    isDark: true,
  },
  {
    title: "Lavender Twilight",
    code: `background: radial-gradient(ellipse 80% 80% at 50% -15%, rgba(175, 134, 222, 0.2), rgba(0, 0, 0, 0)), #121212;`,
    gradient:
      "radial-gradient(ellipse 80% 80% at 50% -15%, rgba(175, 134, 222, 0.2), rgba(0, 0, 0, 0)), #121212",
    isDark: true,
  },
  {
    title: "Mint Glow",
    code: `background: radial-gradient(ellipse 85% 85% at 50% -10%, rgba(0, 255, 191, 0.3), rgba(0, 0, 0, 0)), #0e0e0e;`,
    gradient:
      "radial-gradient(ellipse 85% 85% at 50% -10%, rgba(0, 255, 191, 0.3), rgba(0, 0, 0, 0)), #0e0e0e",
    isDark: true,
  },
  {
    title: "Crimson Shadow",
    code: `background: radial-gradient(ellipse 85% 85% at 50% -25%, rgba(255, 85, 85, 0.3), rgba(0, 0, 0, 0)), #111;`,
    gradient:
      "radial-gradient(ellipse 85% 85% at 50% -25%, rgba(255, 85, 85, 0.3), rgba(0, 0, 0, 0)), #111",
    isDark: true,
  },
];

export default gradients;
