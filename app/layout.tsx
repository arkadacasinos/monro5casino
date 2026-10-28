import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <head>
        <meta name="yandex-verification" content="169bca296103f9b2" />
        <title>Monro Casino официальный сайт – играть онлайн в Монро Казино, рабочее зеркало</title>
        <meta name="description" content="Monro Casino официальный сайт и актуальное рабочее зеркало Монро Казино онлайн. Играть на реальные деньги в слоты, быстрый вход, бонусы на депозит 150% и моментальные выплаты круглосуточно." />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#080d1a" />
        <link rel="canonical" href="https://monro5casino.vercel.app" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://monro5casino.vercel.app" />
        <meta property="og:title" content="Monro Casino официальный сайт – играть онлайн в Монро Казино, рабочее зеркало" />
        <meta property="og:description" content="Monro Casino официальный сайт и актуальное рабочее зеркало Монро Казино онлайн. Играть на реальные деньги в слоты, быстрый вход, бонусы на депозит 150% и моментальные выплаты круглосуточно." />
        <meta property="og:image" content="https://monro5casino.vercel.app/images/hero-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monro Casino официальный сайт – играть онлайн в Монро Казино, рабочее зеркало" />
        <meta name="twitter:description" content="Monro Casino официальный сайт и актуальное рабочее зеркало Монро Казино онлайн. Играть на реальные деньги в слоты, быстрый вход, бонусы на депозит 150% и моментальные выплаты круглосуточно." />
        <meta name="twitter:image" content="https://monro5casino.vercel.app/images/hero-banner.png" />
      </head>
      <body className="antialiased bg-[#080d1a] text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}
