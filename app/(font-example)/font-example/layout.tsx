import { Bokor, Inter } from 'next/font/google';
import './style.css'; // ဒီ folder ထဲက သီးသန့် CSS ကိုပဲ ခေါ်သုံးပါ


// bokor ( variable font မဟုတ်လို့ weight လိုပါတယ် )
const bokor = Bokor({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
});

//  Inter (Variable Font ဖြစ်လို့ weight မလိုပါ) 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export default function FontExampleLayout({ children }: { children: React.ReactNode }) {
  return (
    // Variable တွေကို scope သတ်မှတ်ပေးလိုက်တာ ဖြစ်ပါတယ်
    <section className={`${bokor.variable} ${inter.variable}`}>
      {children}
    </section>
  );
}