# DropNotify

### Never miss a price drop again. 🔔

**DropNotify** is a smart price-tracking app that watches your favorite products across the web and pings you the moment the price drops. Set it up once, sit back, and let DropNotify do the hunting. 🕵️‍♂️

[![Made with Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Powered by Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Styled with Tailwind](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit-orange?style=for-the-badge)](https://dropnotify-one.vercel.app)

---

## ✨ Features

- 🎯 **Track any product** — just drop in a URL and DropNotify keeps an eye on it
- 🕸️ **Smart web scraping** powered by Firecrawl to pull live pricing data
- 📧 **Instant email alerts** via Resend the moment a price drops
- 📊 **Price history dashboard** with beautiful charts (thanks, Recharts!)
- 🎨 **Sleek, modern UI** built with Radix UI + Tailwind CSS
- 🔐 **Secure auth & data storage** with Supabase
- 🌗 **Light/Dark mode** because your eyes deserve options
- ⚡ **Blazing fast** — built on Next.js 16 with React 19

---

## 🖥️ Tech Stack

| Layer | Tech |
|---|---|
| 🧩 Framework | [Next.js 16](https://nextjs.org) + [React 19](https://react.dev) |
| 🗄️ Backend & Auth | [Supabase](https://supabase.com) |
| 🕷️ Web Scraping | [Firecrawl](https://firecrawl.dev) |
| ✉️ Email Notifications | [Resend](https://resend.com) |
| 📈 Charts | [Recharts](https://recharts.org) |
| 🎨 UI Components | [Radix UI](https://www.radix-ui.com) + [Lucide Icons](https://lucide.dev) |
| 💅 Styling | [Tailwind CSS](https://tailwindcss.com) |
| 🔔 Toasts | [Sonner](https://sonner.emilkowal.ski) |

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/DebarjunPal/DropNotify.git
cd DropNotify
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Set up environment variables

Create a `.env.local` file in the root directory and add your keys:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
FIRECRAWL_API_KEY=your_firecrawl_api_key
RESEND_API_KEY=your_resend_api_key
```

### 4️⃣ Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉 and start tracking!

---

## 📸 How It Works

1. 🔗 **Paste a product link** — DropNotify grabs the current price
2. ⏱️ **We monitor it** on a schedule, scraping fresh data automatically
3. 📉 **Price drops?** You get an instant email — no more refreshing pages all day
4. 📊 **Check the dashboard** anytime to see the full price history

---

## 🤝 Contributing

Got an idea to make DropNotify even better? PRs and issues are always welcome! 💡

1. Fork the repo 🍴
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 🚀

---

## 📄 License

This project is open source — feel free to explore, learn, and build on it. 🙌

---

<div align="center">

**Built with ❤️ by [Debarjun Pal](https://github.com/DebarjunPal)**

⭐ If you find this project useful, consider giving it a star!

</div>
