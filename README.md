# 🖥️ Retro TUI Portfolio Template (Astro.js + Tailwind CSS)

A feature-rich, high-aesthetic **Terminal User Interface (TUI) Portfolio Template** built with **Astro.js v5** and **Tailwind CSS v4**.

Features a dual-mode experience (Interactive CLI Terminal + Visual TUI Dashboard), 5 vintage CRT color themes, Web Audio API keypress sounds, CRT scanlines overlay, and a Matrix digital rain easter egg.

---

## ⚡ Key Features

- **Dual-Mode Layout**:
  - **`>_ CLI Mode`**: Bash-like terminal prompt with command history (`Up`/`Down` arrows), command auto-completion (`Tab`), clear screen, and instant command execution.
  - **`[#] GUI Dashboard`**: Visual retro window layout with a collapsible sidebar explorer (`~/about.txt`, `~/skills.sh`, `~/collabs.md`, `~/contact.txt`), category skill meters, and interactive collab cards.
- **5 CRT Color Themes**: Switch between Phosphor Green, Amber Monitor, Cyberpunk Cyan, Dracula Synth, and Retro Monochrome.
- **Retro CRT Visual Effects**: Toggleable CRT scanline overlays, screen glass glare, and scanline flicker.
- **Web Audio API Synthesizer**: Pure JavaScript audio synthesizer generating retro keypress clicks, command success chimes, and error double-beeps.
- **Digital Matrix Rain Overlay**: Canvas matrix rain animation triggered via `matrix` command or header button.
- **Streamlined Portfolio Sections**: Built around **About Me**, **Skills**, **Collabs**, and **Contact**.

---

## 📸 Theme Previews & Color Palettes

The portfolio template includes **5 built-in retro CRT themes** that can be toggled instantly via the header dropdown or the `theme <name>` CLI command:

---

### 🟢 1. Phosphor Green (`green`)
> Classic vintage terminal phosphor glow inspired by 1980s green-screen CRT monitors and early monochrome Hacker workstations.

| UI Element | CSS Variable | Hex Color | Visual Swatch |
| :--- | :--- | :--- | :--- |
| **Main Text** | `--fg-main` | `#00FF66` | ![#00FF66](https://via.placeholder.com/15/00FF66/000000?text=+) `#00FF66` |
| **Bright Text** | `--fg-bright` | `#66FF99` | ![#66FF99](https://via.placeholder.com/15/66FF99/000000?text=+) `#66FF99` |
| **Accent Glow** | `--accent` | `#00FFCC` | ![#00FFCC](https://via.placeholder.com/15/00FFCC/000000?text=+) `#00FFCC` |
| **Background** | `--bg-main` | `#0A120B` | ![#0A120B](https://via.placeholder.com/15/0A120B/000000?text=+) `#0A120B` |
| **Card Background** | `--bg-card` | `#0D1A0E` | ![#0D1A0E](https://via.placeholder.com/15/0D1A0E/000000?text=+) `#0D1A0E` |
| **Border Line** | `--border-color` | `#00441B` | ![#00441B](https://via.placeholder.com/15/00441B/000000?text=+) `#00441B` |

*Screenshot:*


![Phosphor Green Theme Screenshot](/themes/Phosphor_Green.png)

---

### 🟠 2. Amber Monitor (`amber`)
> Warm amber CRT glow reminiscent of VT100, IBM 3180, and classic amber phosphor mainframe terminals.

| UI Element | CSS Variable | Hex Color | Visual Swatch |
| :--- | :--- | :--- | :--- |
| **Main Text** | `--fg-main` | `#FFB000` | ![#FFB000](https://via.placeholder.com/15/FFB000/000000?text=+) `#FFB000` |
| **Bright Text** | `--fg-bright` | `#FFD066` | ![#FFD066](https://via.placeholder.com/15/FFD066/000000?text=+) `#FFD066` |
| **Accent Glow** | `--accent` | `#FFCC00` | ![#FFCC00](https://via.placeholder.com/15/FFCC00/000000?text=+) `#FFCC00` |
| **Background** | `--bg-main` | `#140D04` | ![#140D04](https://via.placeholder.com/15/140D04/000000?text=+) `#140D04` |
| **Card Background** | `--bg-card` | `#1D1306` | ![#1D1306](https://via.placeholder.com/15/1D1306/000000?text=+) `#1D1306` |
| **Border Line** | `--border-color` | `#4A3200` | ![#4A3200](https://via.placeholder.com/15/4A3200/000000?text=+) `#4A3200` |

*Screenshot:*


![Amber Monitor Theme Screenshot](/themes/Amber_CRT.png)

---

### 🔵 3. Cyberpunk Cyan (`cyan`)
> Electric cyber neon palette featuring vibrant cyan text with hot pink/magenta accent highlights.

| UI Element | CSS Variable | Hex Color | Visual Swatch |
| :--- | :--- | :--- | :--- |
| **Main Text** | `--fg-main` | `#00F0FF` | ![#00F0FF](https://via.placeholder.com/15/00F0FF/000000?text=+) `#00F0FF` |
| **Bright Text** | `--fg-bright` | `#70F5FF` | ![#70F5FF](https://via.placeholder.com/15/70F5FF/000000?text=+) `#70F5FF` |
| **Accent Pink** | `--accent` | `#FF007F` | ![#FF007F](https://via.placeholder.com/15/FF007F/000000?text=+) `#FF007F` |
| **Background** | `--bg-main` | `#051014` | ![#051014](https://via.placeholder.com/15/051014/000000?text=+) `#051014` |
| **Card Background** | `--bg-card` | `#091920` | ![#091920](https://via.placeholder.com/15/091920/000000?text=+) `#091920` |
| **Border Line** | `--border-color` | `#003D47` | ![#003D47](https://via.placeholder.com/15/003D47/000000?text=+) `#003D47` |

*Screenshot:*

![Cyberpunk Cyan Theme Screenshot](/themes/Cyber_Cyan.png)

---

### 🟣 4. Dracula Synth (`dracula`)
> Modern dark synthwave palette with soft purple text, pastel pink accents, and mint green indicators.

| UI Element | CSS Variable | Hex Color | Visual Swatch |
| :--- | :--- | :--- | :--- |
| **Main Text** | `--fg-main` | `#BD93F9` | ![#BD93F9](https://via.placeholder.com/15/BD93F9/000000?text=+) `#BD93F9` |
| **Bright Text** | `--fg-bright` | `#D6BBFB` | ![#D6BBFB](https://via.placeholder.com/15/D6BBFB/000000?text=+) `#D6BBFB` |
| **Accent Pink** | `--accent` | `#FF79C6` | ![#FF79C6](https://via.placeholder.com/15/FF79C6/000000?text=+) `#FF79C6` |
| **Accent Green**| `--accent-secondary` | `#50FA7B` | ![#50FA7B](https://via.placeholder.com/15/50FA7B/000000?text=+) `#50FA7B` |
| **Background** | `--bg-main` | `#110E1B` | ![#110E1B](https://via.placeholder.com/15/110E1B/000000?text=+) `#110E1B` |
| **Card Background** | `--bg-card` | `#191428` | ![#191428](https://via.placeholder.com/15/191428/000000?text=+) `#191428` |
| **Border Line** | `--border-color` | `#3B2C59` | ![#3B2C59](https://via.placeholder.com/15/3B2C59/000000?text=+) `#3B2C59` |

*Screenshot:*

![Dracula Synth Theme Screenshot](/themes/Dracula_Synth.png)

---

### ⚪ 5. Retro Monochrome (`mono`)
> Crisp minimalist monochrome high-contrast theme designed for maximum readability and paper terminal aesthetics.

| UI Element | CSS Variable | Hex Color | Visual Swatch |
| :--- | :--- | :--- | :--- |
| **Main Text** | `--fg-main` | `#EEEEEE` | ![#EEEEEE](https://via.placeholder.com/15/EEEEEE/000000?text=+) `#EEEEEE` |
| **Bright Text** | `--fg-bright` | `#FFFFFF` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `#FFFFFF` |
| **Accent Cyan** | `--accent` | `#00E5FF` | ![#00E5FF](https://via.placeholder.com/15/00E5FF/000000?text=+) `#00E5FF` |
| **Background** | `--bg-main` | `#0F0F0F` | ![#0F0F0F](https://via.placeholder.com/15/0F0F0F/000000?text=+) `#0F0F0F` |
| **Card Background** | `--bg-card` | `#191919` | ![#191919](https://via.placeholder.com/15/191919/000000?text=+) `#191919` |
| **Border Line** | `--border-color` | `#333333` | ![#333333](https://via.placeholder.com/15/333333/000000?text=+) `#333333` |

*Screenshot:*


![Retro Monochrome Theme Screenshot](/themes/Monochrome.png)

---

## 🚀 Quick Start

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/your-username/tui-portfolio.git
cd tui-portfolio

# Install dependencies
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open **`http://localhost:4321`** in your browser to view your live portfolio!

### 3. Build for Production
```bash
npm run build
```
Generates a 100% static production build in the `dist/` directory.

---

## ✏️ How to Customize Your Content

All portfolio content is centrally managed in **`src/data/portfolio.ts`**. You do not need to touch complex layout code to update your personal details!

### 1. Update Personal Info & Neofetch Specs
Open `src/data/portfolio.ts` and edit the `developer` object:

```typescript
export const PORTFOLIO_DATA = {
  developer: {
    name: "Your Name",
    handle: "yourhandle",
    title: "Full Stack & Systems Engineer",
    alias: "root@your-hostname",
    email: "your.email@domain.com",
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    location: "San Francisco, CA",
    status: "🟢 OPEN FOR COLLABORATIONS",
    bio: "Write your personal bio and engineering background here...",
    quote: "\"Code is like humor. When you have to explain it, it’s bad.\"",
    specs: {
      OS: "Arch Linux x86_64 / macOS Darwin",
      Kernel: "6.10.8-zen1",
      Shell: "zsh 5.9",
      Editor: "Neovim / VS Code",
      CPU: "Apple M3 Max",
      Memory: "24.5GiB / 64.0GiB"
    }
  },
```

### 2. Edit Your Skills Matrix
Update the `skills` array in `src/data/portfolio.ts`:

```typescript
skills: [
  {
    category: "Core Languages",
    icon: "⚡",
    skills: [
      { name: "TypeScript", level: 95, experience: "7 yrs", tag: "EXPERT" },
      { name: "Rust", level: 85, experience: "4 yrs", tag: "ADVANCED" }
    ]
  }
]
```
- `level`: Integer from `0` to `100` (renders progress bars `[████████░░]`).
- `tag`: Badge text (e.g. `EXPERT`, `PRO`, `ADVANCED`).

### 3. Add Your Collaborations & Projects
Update the `collabs` array in `src/data/portfolio.ts`:

```typescript
collabs: [
  {
    id: "collab-1",
    partner: "Organization / Partner Name",
    partnerType: "Open Source Org",
    title: "Project Title",
    role: "Lead Engineer",
    period: "2024 - PRESENT",
    status: "ACTIVE",
    description: "Overview of joint project or collaboration...",
    contributions: [
      "Key contribution 1",
      "Key contribution 2"
    ],
    techStack: ["Astro.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/your-project"
  }
]
```

### 4. How to Edit Your ASCII Art Banner
1. Open **`src/components/Neofetch.astro`**.
2. Locate the multiline ASCII string inside `{` ... `}` near line 14:
   ```astro
   {`
       _    _     _______  __
      / \  | |   | ____\ \/ /
     / _ \ | |   |  _|  \  / 
    / ___ \| |___| |___ /  \ 
   /_/   \_\_____|_____/_/\_\
   `}
   ```
3. Generate your own custom ASCII text using a free online tool like [FIGlet Generator](https://patorjk.com/software/taag/) (recommended fonts: *ANSI Shadow*, *Slant*, or *Standard*).
4. Paste your new ASCII string inside the backticks.

### 5. Customizing Themes & Styling
Themes are defined in `src/styles/global.css` using CSS custom properties:
- `--bg-main`: Background color.
- `--fg-main`: Text color.
- `--accent`: Accent color.

To add a new theme or modify colors, adjust the CSS variable blocks in `src/styles/global.css`.

### 6. Customizing Favicon
Replace `public/favicon.svg` with your own SVG logo or icon.

---

## 💻 CLI Commands Reference

Visitors can execute the following interactive commands inside CLI Mode:

| Command | Description | Usage |
| :--- | :--- | :--- |
| `help` | List all available terminal commands | `help` |
| `about` | Display bio, background & location | `about` (or `cat bio.txt`) |
| `skills` | Display interactive skill progress meters | `skills` (or `cat skills.sh`) |
| `collabs` | Display team collaborations & partner projects | `collabs` (or `cat collabs.md`) |
| `neofetch` | Display ASCII banner & system hardware specs | `neofetch` |
| `contact` | Display email & social links | `contact` (or `cat contact.txt`) |
| `theme` | Switch color theme | `theme <green|amber|cyan|dracula|mono>` |
| `matrix` | Toggle digital rain CRT canvas animation | `matrix` |
| `crt` | Toggle CRT scanlines screen overlay | `crt` |
| `sfx` | Toggle audio keypress feedback sounds | `sfx` |
| `clear` | Clear terminal buffer screen | `clear` (or `cls`) |
| `gui` | Switch layout to TUI Visual Dashboard | `gui` |
| `cli` | Switch layout to Interactive CLI Mode | `cli` |

---

## 🌐 Deployment

This Astro portfolio outputs a 100% static site that can be hosted anywhere:

### Vercel / Netlify / Cloudflare Pages
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## 📄 License

MIT License © 2026
