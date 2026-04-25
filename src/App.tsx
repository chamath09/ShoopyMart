import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Clock, 
  CreditCard, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Package, 
  ShieldCheck, 
  ShoppingCart, 
  Star, 
  ThumbsUp, 
  TrendingUp, 
  Truck 
} from 'lucide-react';
import { useState } from 'react';

const LOGO_URL = "/logo.png";

// --- Mock Data ---
const PRODUCTS = [
  { id: 1, name: "Pro Wireless Headphones", price: "Rs. 3,500", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", badge: "Hot Deal" },
  { id: 2, name: "Smart Fitness Watch", price: "Rs. 2,900", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80", badge: "New" },
  { id: 3, name: "Premium Cosmetics Set", price: "Rs. 1,800", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&q=80" },
  { id: 4, name: "Classic Aviator Sunglasses", price: "Rs. 1,200", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80" },
  { id: 5, name: "Stainless Steel Flask", price: "Rs. 3,100", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80" },
  { id: 6, name: "Portable Bluetooth Speaker", price: "Rs. 4,500", image: "https://images.unsplash.com/photo-1589003071515-55ff6eb5d1e6?w=500&q=80", badge: "Trending" },
  { id: 7, name: "Fast Charge Powerbank", price: "Rs. 2,100", image: "https://images.unsplash.com/photo-1628191137573-dee64e727614?w=500&q=80" },
  { id: 8, name: "Minimalist Leather Tote", price: "Rs. 5,500", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80", badge: "Bestseller" },
];

const FEATURES = [
  { icon: ShieldCheck, title: "Best Quality", text: "We explicitly curate items for long-lasting performance." },
  { icon: CreditCard, title: "Lowest Prices", text: "Unbeatable deals compared to traditional market prices." },
  { icon: Truck, title: "Fast Delivery", text: "Islandwide delivery right to your doorstep, within days." },
  { icon: ThumbsUp, title: "Trusted Service", text: "Thousands of happy customers served with top satisfaction." },
];

const REVIEWS = [
  { name: "Shenali Perera", text: "Ordered a smartwatch and the quality is amazing for this price! Fast delivery too.", rating: 5 },
  { name: "Kasun Silva", text: "ShoppyMart never disappoints. The headphones were exactly as advertised. Will buy again.", rating: 5 },
  { name: "Amanda Fernando", text: "Super responsive customer service via WhatsApp. They helped me pick the right cosmetics.", rating: 4 },
];

// --- Components ---

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="ShoppyMart Logo" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-poppins font-bold text-2xl text-brand-purple">Shoppy<span className="text-brand-pink">Mart</span></span>
          </div>
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <a href="#features" className="text-slate-600 hover:text-brand-pink transition-colors">Features</a>
            <a href="#trending" className="text-slate-600 hover:text-brand-pink transition-colors">Trending</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-brand-pink transition-colors">How it Works</a>
            <a href="#testimonials" className="text-slate-600 hover:text-brand-pink transition-colors">Reviews</a>
            <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-full hover:shadow-lg hover:shadow-brand-pink/30 transition-all transform hover:-translate-y-0.5">
              Order Now
            </a>
          </div>
          <div className="md:hidden">
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
             </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4 text-center">
             <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-slate-600">Features</a>
             <a href="#trending" onClick={() => setMobileMenuOpen(false)} className="text-slate-600">Trending</a>
             <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-slate-600">How it Works</a>
             <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-brand-pink">Order Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white min-h-[90vh] flex items-center">
      {/* Abstract Glowing Orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-pink rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-brand-purple rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 text-sm font-medium text-brand-pink uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
              Special Offers Available
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Shop More, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-purple-400 to-brand-blue">
                Pay Less!
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Affordable trending products delivered straight to your doorstep. Gadgets, accessories, and daily essentials at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#trending" className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(255,0,85,0.4)] transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                Order Now <ShoppingCart className="w-5 h-5" />
              </a>
              <a href="#trending" className="px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 font-medium text-lg hover:bg-white/20 transition-all text-center">
                Browse Products
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2"><Truck className="w-5 h-5 text-brand-blue" /> Fast Delivery</div>
              <div className="flex items-center gap-2"><CreditCard className="w-5 h-5 text-brand-blue" /> Affordable Prices</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-blue" /> Trusted Service</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* 3D-ish Product Grid Layout */}
            <div className="grid grid-cols-2 gap-4 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out">
               <img src={PRODUCTS[0].image} alt="Product" className="rounded-3xl shadow-2xl shadow-brand-purple/20 w-full h-48 object-cover translate-y-8 border-4 border-white/5" />
               <img src={PRODUCTS[1].image} alt="Product" className="rounded-3xl shadow-2xl shadow-brand-blue/20 w-full h-56 object-cover -translate-y-4 border-4 border-white/5" />
               <img src={PRODUCTS[2].image} alt="Product" className="rounded-3xl shadow-2xl shadow-brand-pink/20 w-full h-56 object-cover translate-y-4 border-4 border-white/5" />
               <img src={PRODUCTS[5].image} alt="Product" className="rounded-3xl shadow-2xl shadow-purple-500/20 w-full h-48 object-cover -translate-y-8 border-4 border-white/5" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div className="text-slate-800">
                <div className="font-bold text-lg">4.9/5</div>
                <div className="text-xs text-slate-500">Customer Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-pink font-semibold tracking-wide uppercase text-sm mb-3">Our Guarantee</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why shop with us?</h3>
          <p className="text-slate-600 text-lg">We bring you the best items without breaking the bank. Your satisfaction is our priority.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-purple/20 transition-all group"
            >
              <div className="w-14 h-14 bg-brand-purple/5 text-brand-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors">
                <feat.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h4>
              <p className="text-slate-600 line-clamp-3">{feat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrendingProducts() {
  return (
    <section id="trending" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 text-brand-pink font-semibold uppercase text-sm mb-2">
              <TrendingUp className="w-5 h-5" /> Trending Now
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Most Popular Items</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-brand-purple font-medium hover:text-brand-pink transition-colors">
            View All Products <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod, idx) => (
            <motion.div 
              key={prod.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {prod.badge && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-brand-pink text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {prod.badge}
                  </div>
                )}
                <div className="absolute bottom-[-50px] group-hover:bottom-4 left-4 right-4 transition-all duration-300">
                  <a href="#contact" className="w-full bg-black/80 hover:bg-black backdrop-blur-md text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium">
                    <ShoppingCart className="w-4 h-4"/> Quick Order
                  </a>
                </div>
              </div>
              <div className="p-5 grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 leading-tight">{prod.name}</h3>
                  <div className="flex items-center text-yellow-400 mb-3 text-sm">
                    <Star className="w-4 h-4 fill-current"/>
                    <Star className="w-4 h-4 fill-current"/>
                    <Star className="w-4 h-4 fill-current"/>
                    <Star className="w-4 h-4 fill-current"/>
                    <Star className="w-4 h-4 fill-current"/>
                    <span className="text-slate-400 ml-1 text-xs">(40+)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl font-extrabold text-brand-purple">{prod.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-purple/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience the best in <br/><span className="text-brand-pink">online shopping.</span></h2>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              We eliminate the middleman and find the hottest trends so you don't have to. Shop with confidence.
            </p>
            
            <ul className="space-y-5">
              {[
                "Affordable luxury & tech products",
                "Islandwide prompt delivery",
                "Easy ordering via WhatsApp or Facebook",
                "Lightning fast customer response"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg">
                  <div className="w-8 h-8 rounded-full bg-brand-pink/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-brand-pink" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
             <div className="mt-10">
               <img src={LOGO_URL} alt="Brand" className="h-16 w-16 rounded-full object-cover border-2 border-white/20"/>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-brand-purple/30 relative">
               <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" alt="Happy Shopping" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                     <ShieldCheck className="w-6 h-6 text-white"/>
                   </div>
                   <div>
                     <div className="font-bold text-white text-lg">Safe Payments</div>
                     <div className="text-slate-300 text-sm">Cash on delivery available</div>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", icon: ShoppingCart, title: "Choose Product", desc: "Browse our trending collection and pick what you love." },
    { num: "02", icon: MessageCircle, title: "Send Message", desc: "Tap order and send us a quick WhatsApp or FB message." },
    { num: "03", icon: Package, title: "Get it Delivered", desc: "Track your package as it speeds to your doorstep." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it works</h3>
          <p className="text-slate-600 text-lg">Getting your hands on our products is as easy as 1-2-3.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-brand-purple/20 via-brand-pink/20 to-brand-blue/20"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center relative z-10"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-slate-50 border-8 border-white shadow-xl shadow-brand-purple/10 flex items-center justify-center mb-6 relative group">
                <step.icon className="w-12 h-12 text-brand-purple group-hover:scale-110 group-hover:text-brand-pink transition-all" />
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-brand-pink rounded-full text-white font-bold flex items-center justify-center border-4 border-white">
                  {step.num}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-purple font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What our customers say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              {/* Quote mark */}
              <div className="text-6xl text-brand-pink/10 absolute top-4 left-4 font-serif leading-none">"</div>
              <div className="flex text-yellow-400 mb-4 relative z-10 pt-4">
                {[...Array(review.rating)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 text-lg mb-6 italic relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="font-bold text-slate-900">{review.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-[#7e1c84] to-brand-pink mix-blend-multiply"></div>
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&q=80')] bg-cover bg-center"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Don't miss out on today's best deals!
          </h2>
          <p className="text-white/80 text-xl font-light mb-10 max-w-2xl mx-auto">
            Stock limits apply. Message us directly on Facebook or WhatsApp to secure your order instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {/* These are dummy links replicating a redirect to social channels */}
            <a href="https://m.me/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#0084FF] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(0,132,255,0.4)] transition-all transform hover:-translate-y-1">
              <Facebook className="w-6 h-6" /> Order via Facebook
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-1">
              <MessageCircle className="w-6 h-6" /> Order via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-16">
          <div className="md:col-span-2">
             <div className="flex items-center gap-3 mb-6">
                <img src={LOGO_URL} alt="ShoppyMart Logo" className="h-10 w-10 rounded-full object-cover grayscale brightness-200" />
                <span className="font-poppins font-bold text-2xl text-white">ShoppyMart</span>
             </div>
             <p className="mb-6 max-w-sm">Bringing the hottest trending products to your door at unbeatable prices. Shop smart, buy more, pay less.</p>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors">
                 <Facebook className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-colors">
                  {/* Generic icon for TikTok if missing */}
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 006.33 6.33 6.32 6.32 0 006.27-5.32v-7a8.16 8.16 0 004 1.08V7.24a4.81 4.81 0 01-2.01-.55z"/></svg>
               </a>
             </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Store Links</h4>
            <ul className="space-y-3">
              <li><a href="#trending" className="hover:text-white transition-colors">Trending Products</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-2"><MessageCircle className="w-5 h-5 shrink-0" /> +94 77 123 4567</li>
              <li className="flex gap-2"><MessageCircle className="w-5 h-5 shrink-0" /> +94 71 987 6543</li>
              <li>hello@shoppymart.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 ShoppyMart. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-inter w-full text-slate-800 bg-slate-50 selection:bg-brand-pink selection:text-white">
      <NavBar />
      <Hero />
      <Features />
      <TrendingProducts />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

