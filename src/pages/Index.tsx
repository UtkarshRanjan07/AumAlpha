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

    {/* Our Partners Section */}
    <section className="section bg-zinc-950 pt-4 pb-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          <span className="gold-gradient">Our Partners</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
          {/* Top row - 4 logos */}
          <img src="/lovable-uploads/coindcx-logo.png" alt="CoinDCX - Crypto Investment Exchange" className="h-10 object-contain" />
          <img src="/lovable-uploads/coinswitch-logo.png" alt="CoinSwitch - Digital Asset Platform" className="h-16 object-contain" />
          <img src="/lovable-uploads/coinbase-logo.png" alt="Coinbase - Crypto Fund Custodian" className="h-7 object-contain" />
          <img src="/lovable-uploads/kucoin-logo.png" alt="KuCoin - Blockchain Trading Exchange" className="h-8 object-contain" />

          {/* Bottom row - 2 logos, centered on desktop */}
          <img src="/lovable-uploads/GetBit_logo.png" alt="GetBit - Web3 Portfolio Platform" className="h-10 col-span-1 sm:col-start-2 sm:col-span-1 object-contain" />
          <img src="/lovable-uploads/biance-logo.png" alt="Binance - Crypto PMS and Advisory Partner" className="h-16 col-span-1 sm:col-start-3 sm:col-span-1 object-contain" />
        </div>
      </div>
    </section>


      <KeyHighlights />
      <Performance />

      
      {/* Contact Section */}
      <section className="section bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gold-gradient">Ready to start your digital asset investment journey?</span>
              </h2>
              <p className="text-zinc-300 mb-8">
                Take the first step towards a structured, risk-managed approach to digital asset investments. Our team of experts is ready to help you navigate the complexities of digital asset investing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-800 p-5 rounded-lg">
                  <h3 className="text-watermark-gold font-semibold mb-2">For Investors</h3>
                  <p className="text-sm text-zinc-400">
                    Diversify your investments with AumAlpha’s guidance on digital assets.
                  </p>
                </div>
                <div className="bg-zinc-800 p-5 rounded-lg">
                  <h3 className="text-watermark-gold font-semibold mb-2">For Professionals</h3>
                  <p className="text-sm text-zinc-400">
                    Join our team of experts and contribute to the future of digial asset advisory.
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

      

    </main>
  );
};

export default Index;
