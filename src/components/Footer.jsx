import { contacts } from '../data.js'
import { asset } from '../asset.js'

export default function Footer() {
  return (
    <footer className="relative border-t border-ember/20 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="mega text-[clamp(4rem,18vw,20rem)] leading-[0.85] text-bone/5 select-none pointer-events-none">
          CYBER · RAY
        </div>

        <div className="grid md:grid-cols-4 gap-8 -mt-20 md:-mt-32 relative">
          <div>
            <div className="flex items-center gap-3">
              <img src={asset('/img/logo.png')} alt="" className="w-10 h-10" />
              <div>
                <div className="font-brutal text-2xl tracking-widest text-bone">CYBER RAY</div>
                <div className="font-jp text-xs text-fog/60">賽博天堂</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-fog/70 leading-relaxed">
              Компьютерный клуб нового поколения в Сестрорецке.
              Игры · работа · турниры · встречи. 24/7.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs tracking-[0.3em] text-ember uppercase mb-4">// связь</div>
            <ul className="space-y-2 text-sm text-fog/80">
              <li><a href={contacts.phoneHref} className="hover:text-ember transition-colors">{contacts.phone}</a></li>
              <li><a href={`mailto:${contacts.email}`} className="hover:text-ember transition-colors">{contacts.email}</a></li>
              <li>{contacts.address}</li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs tracking-[0.3em] text-ember uppercase mb-4">// соцсети</div>
            <ul className="space-y-2 text-sm text-fog/80">
              <li><a href={contacts.vk} target="_blank" rel="noreferrer" className="hover:text-ember">VK · cyberray1</a></li>
              <li><a href={contacts.tg} target="_blank" rel="noreferrer" className="hover:text-ember">Telegram · cyberray1</a></li>
              <li><a href={contacts.booking} target="_blank" rel="noreferrer" className="hover:text-ember">langame · бронь</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs tracking-[0.3em] text-ember uppercase mb-4">// разделы</div>
            <ul className="space-y-2 text-sm text-fog/80">
              <li><a href="#services" className="hover:text-ember">Услуги</a></li>
              <li><a href="#tournaments" className="hover:text-ember">Турниры</a></li>
              <li><a href="#promos" className="hover:text-ember">Акции</a></li>
              <li><a href="#rules" className="hover:text-ember">Правила</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-fog/10 flex flex-col md:flex-row justify-between gap-4 font-mono text-xs text-fog/50 tracking-widest uppercase">
          <div>© {new Date().getFullYear()} · Cyber Ray · Sector 197</div>
          <div>Made by ignoranc3</div>
        </div>
      </div>
    </footer>
  )
}
