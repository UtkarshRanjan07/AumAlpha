import Hero from '@/components/Hero';
import KeyHighlights from '@/components/KeyHighlights';
import Performance from '@/components/Performance';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <main className="bg-black text-white">
      <Hero />
      <KeyHighlights />
      <Performance />

      
      {/* Contact Section */}
      <section className="section bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gold-gradient">Ready to start your crypto investment journey?</span>
              </h2>
              <p className="text-zinc-300 mb-8">
                Take the first step towards a structured, risk-managed approach to digital asset investments. Our team of experts is ready to help you navigate the complexities of crypto investing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-800 p-5 rounded-lg">
                  <h3 className="text-watermark-gold font-semibold mb-2">For Investors</h3>
                  <p className="text-sm text-zinc-400">
                    Diversify your investments with AumAlpha’s guidance on crypto assets.
                  </p>
                </div>
                <div className="bg-zinc-800 p-5 rounded-lg">
                  <h3 className="text-watermark-gold font-semibold mb-2">For Professionals</h3>
                  <p className="text-sm text-zinc-400">
                    Join our team of experts and contribute to the future of crypto advisory.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="section bg-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            <span className="gold-gradient">Our Partners</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
            <img
              src="/lovable-uploads/coindcx-logo.png"
              alt="CoinDCX"
              className="h-10 mx-auto object-contain"
            />
            <img
              src="/lovable-uploads/coinswitch-logo.png"
              alt="CoinSwitch"
              className="h-16 mx-auto object-contain"
            />
            <img
              src="/lovable-uploads/coinbase-logo.png"
              alt="Coinbase"
              className="h-8 mx-auto object-contain"
            />
            <img
              src="/lovable-uploads/kucoin-logo.png" 
              alt="KuCoin"
              className="h-8 mx-auto object-contain"
            />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Index;
