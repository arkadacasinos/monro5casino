import React from 'react'

const REF_URL = 'https://combonorth.space/aeaofj2k27'

export default function HomePage() {
  return (
    <div className="mn7x-wrap">
      {/* Top Header Bar */}
      <header className="mn7x-topbar">
        <div className="flex items-center gap-3">
          {/* Mobile hamburger menu toggle */}
          <a
            href="#mn7x-drawer"
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60"
            aria-label="Открыть меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>

          {/* Logo */}
          <a href={REF_URL} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 via-rose-500 to-purple-600 p-0.5 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 9l3 12h14l3-12-10-7zm0 3.5l6.5 4.5-2 8h-9l-2-8L12 5.5z" />
              </svg>
            </div>
            <span className="text-xl font-black tracking-wider text-white uppercase font-sans">
              MONRO
            </span>
          </a>
        </div>

        {/* Search input (hidden on small mobile) */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <a href={REF_URL} className="mn7x-search-box group hover:border-slate-600 transition-colors">
            <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs uppercase tracking-wide text-slate-400 group-hover:text-slate-200 select-none">
              НАЗВАНИЕ ИГРЫ ИЛИ ПРОВАЙДЕРА
            </span>
          </a>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Security badge icon */}
          <a
            href={REF_URL}
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
            title="Лицензионная безопасность"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </a>

          {/* Login button */}
          <a href={REF_URL} className="mn7x-btn-login">
            ВХОД
          </a>

          {/* Registration CTA button */}
          <a href={REF_URL} className="mn7x-btn-reg">
            РЕГИСТРАЦИЯ
          </a>
        </div>
      </header>

      {/* Main Shell with Sidebar & Content */}
      <div className="mn7x-shell">
        {/* Left Navigation Sidebar */}
        <aside id="mn7x-drawer" className="mn7x-sidebar">
          {/* Mobile close button */}
          <div className="flex lg:hidden items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-sm font-bold text-slate-200">Меню Monro</span>
            <a href="#!" className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col gap-1.5">
            {/* Bonuses */}
            <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 text-slate-200 hover:text-white transition-colors group">
              <div className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <span className="text-sm font-semibold">Бонусы</span>
            </a>

            {/* Promo */}
            <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800/60 text-slate-300 hover:text-white transition-colors">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">Промо</span>
            </a>

            {/* VIP Club */}
            <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800/60 text-slate-300 hover:text-white transition-colors">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">VIP Club</span>
            </a>

            {/* Prize Drops Card */}
            <a href={REF_URL} className="mt-2 block p-3 rounded-2xl bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 text-white shadow-lg shadow-orange-600/30 hover:opacity-95 transition-opacity">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-orange-200">Турниры</div>
                  <div className="text-xs font-black tracking-wide uppercase">PRIZE DROPS</div>
                </div>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>

          <div className="my-2 border-t border-slate-800/80" />

          {/* Game categories */}
          <div className="flex flex-col gap-1">
            <a href={REF_URL} className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-rose-400 text-base">🍒</span>
                <span className="text-sm font-medium">Слоты</span>
              </div>
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a href={REF_URL} className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 text-base">👤</span>
                <span className="text-sm font-medium">Live-казино</span>
              </div>
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a href={REF_URL} className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-sky-400 text-base">⚽</span>
                <span className="text-sm font-medium">Спорт</span>
              </div>
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
              <span className="text-amber-400 text-base">🚀</span>
              <span className="text-sm font-medium">Instant Games</span>
            </a>

            <a href={REF_URL} className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
              <span className="text-indigo-400 text-base">✨</span>
              <span className="text-sm font-medium">Темы</span>
            </a>
          </div>

          <div className="mt-auto pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60">
            <span>RU / RUB</span>
            <span className="text-emerald-400 font-semibold">● 24/7 Онлайн</span>
          </div>
        </aside>

        {/* Mobile Scrim Backdrop for Drawer */}
        <a href="#!" className="mn7x-scrim" aria-label="Закрыть меню" />

        {/* Main Content Area */}
        <main className="mn7x-main p-3 sm:p-5 lg:p-6 space-y-6">
          {/* Hero Banner Section (Replicating Screen 2) */}
          <section className="mn7x-banner-card overflow-hidden">
            <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] flex flex-col justify-between p-4 sm:p-8">
              {/* Background Art */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-screen pointer-events-none"
                style={{ backgroundImage: "url('/images/hero-banner.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1427] via-[#0c1427]/60 to-transparent pointer-events-none" />

              {/* Top Banner Tagline */}
              <div className="relative z-10 flex justify-center pt-2">
                <div className="bg-white/95 text-slate-900 rounded-2xl px-5 py-3 shadow-2xl backdrop-blur text-center border border-white/40 max-w-sm sm:max-w-md">
                  <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-700">
                    КУДА ТЫ ПРИМЕНИШЬ
                  </div>
                  <div className="text-xl sm:text-2xl font-black tracking-tight text-orange-600">
                    + 150% НА ДЕПОЗИТ
                  </div>
                </div>
              </div>

              {/* Table Platform & CTA Action Buttons (Center of screen 2) */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6">
                <div className="w-full max-w-xl bg-slate-900/80 border border-slate-700/60 rounded-full p-2.5 sm:p-3 shadow-2xl backdrop-blur-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={REF_URL}
                      className="mn7x-cta-casino py-3.5 sm:py-4 px-6 text-center text-sm sm:text-base"
                    >
                      НАЧАТЬ В КАЗИНО
                    </a>
                    <a
                      href={REF_URL}
                      className="mn7x-cta-sport py-3.5 sm:py-4 px-6 text-center text-sm sm:text-base"
                    >
                      НАЧАТЬ В СПОРТЕ
                    </a>
                  </div>
                </div>
              </div>

              {/* Payment Methods Ribbon */}
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  СБП
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-600/30 text-emerald-400 px-2 py-0.5 rounded font-bold text-xs">SberPay</span>
                  <span className="bg-amber-500/30 text-amber-300 px-2 py-0.5 rounded font-bold text-xs">T-Pay</span>
                </div>
                <div className="flex items-center gap-2 tracking-wider font-semibold text-slate-300">
                  <span>VISA</span>
                  <span>•</span>
                  <span>MC</span>
                  <span>•</span>
                  <span>МИР</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-cyan-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  CRYPTO
                </div>
              </div>
            </div>
          </section>

          {/* Live Winners Ticker Bar ("СЕЙЧАС ВЫИГРЫВАЮТ") */}
          <section className="bg-[#0c1427] border border-slate-800/80 rounded-2xl p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-black uppercase tracking-wider text-orange-400 whitespace-nowrap">
                  СЕЙЧАС ВЫИГРЫВАЮТ
                </span>
              </div>

              <div className="mn7x-marquee flex items-center gap-3 w-full py-1">
                <a href={REF_URL} className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/40 text-xs flex-shrink-0 transition-colors">
                  <span className="text-base">🎰</span>
                  <div>
                    <div className="font-bold text-slate-200">Big Bass Splash</div>
                    <div className="text-[11px] text-slate-400">Z**la 00:38</div>
                  </div>
                  <div className="text-right ml-2">
                    <span className="mn7x-badge-green">8 124 ₽</span>
                    <div className="text-[10px] text-slate-400 font-mono">x150.7</div>
                  </div>
                </a>

                <a href={REF_URL} className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/40 text-xs flex-shrink-0 transition-colors">
                  <span className="text-base">🐉</span>
                  <div>
                    <div className="font-bold text-slate-200">Floating Dragon</div>
                    <div className="text-[11px] text-slate-400">+557**** 00:38</div>
                  </div>
                  <div className="text-right ml-2">
                    <span className="mn7x-badge-green">8 569 ₽</span>
                    <div className="text-[10px] text-slate-400 font-mono">x190</div>
                  </div>
                </a>

                <a href={REF_URL} className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/40 text-xs flex-shrink-0 transition-colors">
                  <span className="text-base">🎪</span>
                  <div>
                    <div className="font-bold text-slate-200">Spider Circus</div>
                    <div className="text-[11px] text-slate-400">Iv***77 00:39</div>
                  </div>
                  <div className="text-right ml-2">
                    <span className="mn7x-badge-green">18 800 ₽</span>
                    <div className="text-[10px] text-slate-400 font-mono">x47</div>
                  </div>
                </a>

                <a href={REF_URL} className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/40 text-xs flex-shrink-0 transition-colors">
                  <span className="text-base">⚡</span>
                  <div>
                    <div className="font-bold text-slate-200">Gates of Olympus</div>
                    <div className="text-[11px] text-slate-400">Al***12 00:40</div>
                  </div>
                  <div className="text-right ml-2">
                    <span className="mn7x-badge-green">42 650 ₽</span>
                    <div className="text-[10px] text-slate-400 font-mono">x310</div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Quick Stats Grid */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href={REF_URL} className="p-4 rounded-2xl bg-[#0c1427] border border-slate-800 hover:border-slate-700 transition-colors block">
              <div className="text-slate-400 text-xs uppercase font-semibold">Бонус на депозит</div>
              <div className="text-xl sm:text-2xl font-black text-orange-400 mt-1">+150%</div>
              <div className="text-[11px] text-slate-400 mt-1">До 500 фриспинов</div>
            </a>
            <a href={REF_URL} className="p-4 rounded-2xl bg-[#0c1427] border border-slate-800 hover:border-slate-700 transition-colors block">
              <div className="text-slate-400 text-xs uppercase font-semibold">Средний RTP</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">97.4%</div>
              <div className="text-[11px] text-slate-400 mt-1">Сертифицированные слоты</div>
            </a>
            <a href={REF_URL} className="p-4 rounded-2xl bg-[#0c1427] border border-slate-800 hover:border-slate-700 transition-colors block">
              <div className="text-slate-400 text-xs uppercase font-semibold">Скорость вывода</div>
              <div className="text-xl sm:text-2xl font-black text-sky-400 mt-1">15 минут</div>
              <div className="text-[11px] text-slate-400 mt-1">СБП, карты, крипта</div>
            </a>
            <a href={REF_URL} className="p-4 rounded-2xl bg-[#0c1427] border border-slate-800 hover:border-slate-700 transition-colors block">
              <div className="text-slate-400 text-xs uppercase font-semibold">Поддержка игроков</div>
              <div className="text-xl sm:text-2xl font-black text-purple-400 mt-1">24/7</div>
              <div className="text-[11px] text-slate-400 mt-1">Онлайн-чат без выходных</div>
            </a>
          </section>

          {/* SEO Text Section: Pure Semantic HTML with 300-400 words */}
          <article className="bg-[#0c1427] border border-slate-800/80 rounded-2xl p-5 sm:p-8 space-y-6 text-slate-300 leading-relaxed">
            <header className="border-b border-slate-800/80 pb-4">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                Monro Casino – Официальный сайт и актуальное зеркало онлайн
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                Лицензионные игровые автоматы, ставки на спорт и моментальный вывод средств
              </p>
            </header>

            <section id="about" className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 rounded-full bg-orange-500 inline-block" />
                Monro Casino официальный сайт и лицензионные преимущества
              </h2>
              <p>
                Monro Casino официальный сайт представляет собой современный игровой клуб нового поколения для любителей азарта и ставок на спорт. Запуская Monro Casino официальный портал, пользователи получают мгновенный доступ к тысячам сертифицированных игровых автоматов от ведущих мировых провайдеров. Каждый игрок, выбирающий монро казино официальный сайт, может рассчитывать на честный математический алгоритм отдачи, высокий процент RTP, моментальный вывод выигрышей и щедрые подарки. Монро казино официальный клуб гарантирует полную безопасность персональных данных, конфиденциальность финансовых транзакций и профессиональную круглосуточную службу клиентской поддержки.
              </p>
            </section>

            <section id="play" className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 rounded-full bg-rose-500 inline-block" />
                Monro Casino играть онлайн на реальные деньги и демо
              </h2>
              <p>
                Чтобы начать в Monro Casino играть, достаточно пройти быструю регистрацию за пару секунд или выполнить моментальный вход через соцсети. В монро казино играть разрешено как в бесплатном демонстрационном режиме для тестирования победных тактик, так и на реальные средства с возможностью сорвать крупный прогрессивный джекпот. Игровая платформа монро казино онлайн предлагает популярные видеослоты, настольную европейскую рулетку, покер, блэкджек и захватывающие live-столы с живыми дилерами. За счет качественной адаптации Monro казино безупречно открывается на любых современных смартфонах и ПК без задержек.
              </p>
            </section>

            <section id="mirror" className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 rounded-full bg-sky-500 inline-block" />
                Monro Casino зеркало: актуальный доступ без блокировок
              </h2>
              <p>
                Если основной портал временно недоступен из-за технических работ или сетевых ограничений провайдеров, на помощь приходит проверенное Monro Casino зеркало. Используя актуальное монро казино зеркало рабочее, игроки сохраняют беспрепятственный доступ к личному кабинету, игровому балансу, турнирным достижениям и активным бонусам. Надежное монро казино зеркало полностью дублирует весь функционал главного ресурса с высоким уровнем SSL-шифрования, обеспечивая стабильное подключение в режиме 24/7. Вход через альтернативный рабочий домен не требует повторной регистрации аккаунта.
              </p>
            </section>

            <section id="bonuses" className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-5 rounded-full bg-emerald-500 inline-block" />
                Бонусы и финансовые операции в Монро Казино
              </h2>
              <p>
                Клуб монро казино радует новых пользователей внушительным приветственным пакетом до 150% на первый депозит, а также еженедельным кэшбэком и регулярными фриспинами. Для быстрого пополнения счета и вывода средств поддерживаются все удобные финансовые методы: банковские карты Мир, СБП, электронные кошельки и популярная криптовалюта. Выбирайте надежное Monro Casino для яркого отдыха, честных выигрышей и побед в лицензионном клубе с гарантией моментальных выплат.
              </p>
            </section>

            {/* In-article CTA button */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={REF_URL}
                className="mn7x-btn-reg text-center py-3.5 px-8 text-sm"
              >
                ПЕРЕЙТИ НА САЙТ И ПОЛУЧИТЬ БОНУС 150%
              </a>
              <a
                href={REF_URL}
                className="px-6 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white text-center text-sm font-bold transition-colors"
              >
                АКТУАЛЬНОЕ ЗЕРКАЛО MONRO КАЗИНО
              </a>
            </div>
          </article>

          {/* Footer with SEO Hashtags & Internal Anchors */}
          <footer className="border-t border-slate-800/80 pt-6 pb-12 space-y-5 text-xs text-slate-400">
            {/* Hashtag navigation cloud */}
            <div className="flex flex-wrap gap-2">
              <a href="#about" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #monro-casino
              </a>
              <a href="#about" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #monro-casino-официальный-сайт
              </a>
              <a href="#about" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #monro-casino-официальный
              </a>
              <a href="#about" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #монро-казино
              </a>
              <a href="#mirror" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #monro-casino-зеркало
              </a>
              <a href="#about" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #монро-казино-официальный
              </a>
              <a href="#about" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #монро-казино-официальный-сайт
              </a>
              <a href="#play" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #monro-casino-играть
              </a>
              <a href="#play" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #монро-казино-играть
              </a>
              <a href="#play" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #монро-казино-онлайн
              </a>
              <a href="#mirror" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #монро-казино-зеркало-рабочее
              </a>
              <a href="#play" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #monro-казино
              </a>
              <a href="#mirror" className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-orange-400 transition-colors">
                #монро-казино-зеркало
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900">
              <p>© 2026 Monro Casino. Официальный сайт. Все права защищены. 18+</p>
              <div className="flex items-center gap-4">
                <a href={REF_URL} className="hover:text-white transition-colors">Правила и условия</a>
                <a href={REF_URL} className="hover:text-white transition-colors">Ответственная игра</a>
                <a href={REF_URL} className="hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating 24/7 Live Support Button */}
      <a
        href={REF_URL}
        className="mn7x-support-btn group"
        title="Онлайн поддержка 24/7"
        aria-label="Онлайн поддержка"
      >
        <svg className="w-6 h-6 text-slate-900 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
        </svg>
      </a>
    </div>
  )
}
