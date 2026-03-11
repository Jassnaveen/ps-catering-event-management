import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight, 
  Star, 
  Cake, 
  Utensils, 
  PartyPopper, 
  Flower2, 
  Music, 
  Users,
  CheckCircle2,
  Award,
  Heart,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
       <div className="w-12 h-12 relative overflow-hidden rounded-full border border-gold/30 bg-neutral-900">
  <img 
    src="logo.png" 
    alt="PS Events Logo" 
    className="w-full h-full object-cover"
    onError={(e) => {
      (e.target as HTMLImageElement).src = "https://via.placeholder.com/100?text=PS";
    }}
  />
</div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-tighter leading-none">
              <span className="text-gold">PS</span> EVENTS
            </span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-medium">Catering & Management</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-gold transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-gold text-neutral-950 font-bold rounded-full hover:bg-gold-light transition-all transform hover:scale-105"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-neutral-950 z-[60] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button 
              className="absolute top-6 right-6 text-white p-2" 
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif font-bold hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.a 
              href="#contact" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="mt-8 px-10 py-4 bg-gold text-neutral-950 font-bold rounded-full text-xl shadow-xl shadow-gold/20"
            >
              Book Now
            </motion.a>

            <div className="absolute bottom-12 flex gap-6">
              <a href="https://www.instagram.com/ps_catering_evt_mdu/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors"><Instagram size={24} /></a>
              <a href="https://www.facebook.com/ps_catering_events/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors"><Facebook size={24} /></a>
              <a href="https://twitter.com/ps_events_madurai" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors"><Twitter size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
   <section id="home" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000" 
          alt="Wedding Event" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

    <div className="relative z-10 text-center px-6 max-w-4xl mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <span className="text-gold font-medium tracking-[0.3em] uppercase mb-4 block text-sm sm:text-base">Excellence in Every Detail</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold mb-6 leading-[1.1] md:leading-tight">
            PS Catering & <br />
            <span className="text-gold-gradient">Events Management</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto font-light px-4 leading-relaxed">
            Creating unforgettable moments with exquisite catering and world-class event planning in Madurai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="px-8 py-4 bg-gold text-neutral-950 font-bold rounded-full hover:bg-gold-light transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View Services <ChevronRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/30 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-800">
              <img 
                src="/owner.jpeg" 
                alt="Founder of PS Events" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000";
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-neutral-950 border border-gold/30 p-4 sm:p-6 rounded-2xl shadow-2xl z-10">
              <h4 className="text-gold font-serif text-lg sm:text-xl font-bold">Founder & CEO</h4>
              <p className="text-neutral-400 text-xs sm:text-sm">PS Catering & Events Management</p>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-2xl hidden lg:block shadow-2xl">
              <p className="text-neutral-950 font-serif text-4xl font-bold">15+</p>
              <p className="text-neutral-900 font-medium text-sm uppercase tracking-wider">Years Experience</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Our Story</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Crafting Memorable Experiences in Madurai
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              PS Catering & Events Management, led by **M. Prakash**, is a premier firm based in Madurai. We specialize in transforming your visions into reality, from grand weddings to professional corporate gatherings.
            </p>
            <p className="text-neutral-400 text-base sm:text-lg mb-10 leading-relaxed">
              Winner of the **Everest Award 2025** for Best Event Management, our team brings award-winning creativity and precision to every project. Whether it's traditional South Indian catering or modern LED dance floors, we deliver excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Heart className="text-gold" />, title: "Wedding Planning" },
                { icon: <Utensils className="text-gold" />, title: "Premium Catering" },
                { icon: <Cake className="text-gold" />, title: "Birthday Events" },
                { icon: <Award className="text-gold" />, title: "Corporate Setup" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg">{item.icon}</div>
                  <span className="font-medium text-neutral-200">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Flower2 size={32} />,
      title: "Wedding Planning",
      desc: "Comprehensive wedding management from venue selection to the final send-off."
    },
    {
      icon: <Utensils size={32} />,
      title: "Catering Services",
      desc: "Delicious multi-cuisine catering tailored to your taste and guest preferences."
    },
    {
      icon: <Cake size={32} />,
      title: "Birthday Decorations",
      desc: "Creative and themed birthday setups that bring joy to children and adults alike."
    },
    {
      icon: <PartyPopper size={32} />,
      title: "Balloon Decorations",
      desc: "Vibrant and artistic balloon arrangements for all types of celebrations."
    },
    {
      icon: <Music size={32} />,
      title: "Stage Decorations",
      desc: "Elegant and grand stage setups that serve as the perfect backdrop for your events."
    },
    {
      icon: <Users size={32} />,
      title: "Event Setup",
      desc: "Professional lighting, sound, and seating arrangements for corporate and private events."
    }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-widest uppercase mb-4 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Premium Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 sm:p-10 bg-neutral-900 border border-white/5 rounded-2xl hover:border-gold/30 transition-all group"
            >
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-neutral-950 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href="#contact" className="text-gold font-medium flex items-center gap-2 hover:gap-4 transition-all">
                Enquire Now <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Awards = () => {
  return (
    <section className="py-24 bg-neutral-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <img 
                src="/award.jpeg" 
                alt="Everest Award 2025 - 1" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/500?text=Award+1";
                }}
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden border border-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <img 
                src="/award2.jpeg" 
                alt="Everest Award 2025 - 2" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/500?text=Award+2";
                }}
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-bold uppercase tracking-widest mb-6">
              <Award size={18} /> Award Winning Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">Winner of Everest Award 2025</h2>
            <p className="text-gold-light text-lg sm:text-xl font-medium mb-6 italic">"Best Event Management of the Year - Madurai"</p>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We are honored to be recognized for our commitment to quality, creativity, and customer satisfaction. This award reflects our dedication to making every celebration in Madurai truly iconic.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CateringMenu = () => {
  const menuCategories = [
    {
      title: "Traditional South Indian",
      items: ["Authentic Madurai Meals", "Special Biryani Varieties", "Traditional Sweets & Savories", "Temple Style Feast"]
    },
    {
      title: "Modern Fusion",
      items: ["North Indian Specialties", "Continental Starters", "Chinese Delicacies", "Live Pasta Counter"]
    },
    {
      title: "Desserts & Beverages",
      items: ["Elaneer Payasam", "Fruit Salad with Ice Cream", "Fresh Fruit Juices", "Special Filter Coffee"]
    }
  ];

  return (
    <section id="menu" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Our Flavors</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Catering Specialities</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {menuCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-gold/20 transition-all"
            >
              <h3 className="text-2xl font-serif font-bold text-gold mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { local: "gallery/g1.jpeg", fallback: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
    { local: "gallery/g2.jpeg", fallback: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800" },
    { local: "gallery/g3.jpeg", fallback: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
    { local: "gallery/g4.jpeg", fallback: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800" },
    { local: "gallery/g5.jpeg", fallback: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800" },
    { local: "gallery/g6.jpeg", fallback: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
    { local: "gallery/g7.jpeg", fallback: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" },
    { local: "gallery/g8.jpeg", fallback: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=800" },
    { local: "gallery/g9.jpeg", fallback: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" },
    // { local: "gallery/g1.jpeg", fallback: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
    // { local: "gallery/g2.jpeg", fallback: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800" },
    // { local: "gallery/g3.jpeg", fallback: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="gallery" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Event Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={img.local} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = img.fallback;
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-neutral-950">
                  <ChevronRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: <Users />, title: "Professional Team", desc: "Expert planners and staff dedicated to your event's success." },
    { icon: <Utensils />, title: "Quality Catering", desc: "Hygienic and delicious food prepared by master chefs." },
    { icon: <Flower2 />, title: "Beautiful Decorations", desc: "Aesthetic and trendy decorations tailored to your theme." },
    { icon: <Award />, title: "Affordable Packages", desc: "Premium services at competitive prices to fit your budget." },
  ];

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center p-6 sm:p-8 bg-neutral-900 rounded-2xl border border-white/5">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
              </div>
              <h4 className="text-lg sm:text-xl font-serif font-bold mb-2 sm:mb-4">{feature.title}</h4>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Anitha Raj", role: "Wedding Client", text: "PS Events made my wedding dream come true. The decoration was stunning and the food was praised by everyone!", rating: 5 },
    { name: "Karthik Raja", role: "Corporate Manager", text: "Very professional team. They handled our annual corporate meet with great efficiency. Highly recommended.", rating: 5 },
    { name: "Meena S.", role: "Birthday Party", text: "The balloon decoration for my daughter's birthday was so creative. The kids loved it!", rating: 5 },
  ];

  return (
    <section className="py-24 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 sm:p-10 bg-neutral-950 rounded-2xl border border-white/5 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-neutral-300 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <h5 className="font-bold text-white">{review.name}</h5>
                <p className="text-gold text-sm uppercase tracking-wider">{review.role}</p>
              </div>
              <div className="absolute top-10 right-10 text-white/5">
                <MessageCircle size={60} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block text-center lg:text-left">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center lg:text-left">Let's Plan Your <br className="hidden lg:block" />Next Big Event</h2>
            <p className="text-neutral-400 text-lg mb-12 text-center lg:text-left">
              Ready to make your event extraordinary? Contact us today for a free consultation and personalized quote.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="flex items-center lg:items-start gap-6 p-6 bg-neutral-900/50 rounded-2xl border border-white/5 hover:border-gold/30 transition-all">
                <div className="w-14 h-14 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <Phone size={28} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Call Us</h5>
                  <a href="tel:+919087699798" className="text-neutral-400 block hover:text-gold transition-colors">+91 90876 99798</a>
                  <a href="tel:+918124406797" className="text-neutral-400 block hover:text-gold transition-colors">+91 81244 06797</a>
                </div>
              </div>
              
              <div className="flex items-center lg:items-start gap-6 p-6 bg-neutral-900/50 rounded-2xl border border-white/5 hover:border-gold/30 transition-all">
                <div className="w-14 h-14 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <Mail size={28} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Email Us</h5>
                  <a href="mailto:gvprakash876@gmail.com" className="text-neutral-400 block hover:text-gold transition-colors">gvprakash876@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center lg:items-start gap-6 p-6 bg-neutral-900/50 rounded-2xl border border-white/5 hover:border-gold/30 transition-all sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <MapPin size={28} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">Our Location</h5>
                  <p className="text-neutral-400">Ponmeni Main Road, Meenakshi Nagar,</p>
                  <p className="text-neutral-400">2nd Street, Madurai - 625016</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/919087699798" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20"
              >
                <MessageCircle size={20} /> WhatsApp Us
              </a>
              <a 
                href="tel:+919087699798" 
                className="px-8 py-4 border border-gold/50 text-gold font-bold rounded-full hover:bg-gold/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 bg-neutral-900 p-6 sm:p-10 rounded-3xl border border-white/5 shadow-2xl"
          >
            <h3 className="text-2xl font-serif font-bold mb-8 text-center lg:text-left">Send a Message</h3>
            <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-all text-white placeholder:text-neutral-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Your Mobile"
                    className="w-full bg-neutral-950 border border-white/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-all text-white placeholder:text-neutral-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Event Type</label>
                <div className="relative">
                  <select className="w-full bg-neutral-950 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-all appearance-none text-white">
                    <option>Wedding Planning</option>
                    <option>Catering Only</option>
                    <option>Birthday Party</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                  <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-neutral-500 pointer-events-none" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you?"
                  className="w-full bg-neutral-950 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-all resize-none text-white"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-gold text-neutral-950 font-bold rounded-xl hover:bg-gold-light transition-all transform hover:scale-[1.02] shadow-xl shadow-gold/10">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center sm:text-left">
          <div className="space-y-6 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3">
              <img 
                src="logo.png" 
                alt="Logo" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <a href="#home" className="text-2xl font-serif font-bold tracking-tighter">
                <span className="text-gold">PS</span> EVENTS
              </a>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-xs">
              Making your special moments unforgettable with premium catering and event management services in Madurai.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ps_catering_evt_mdu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-neutral-950 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/ps_catering_events/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-neutral-950 transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/ps_events_madurai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-neutral-950 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-serif font-bold mb-8">Quick Links</h5>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-neutral-400 hover:text-gold transition-colors flex items-center justify-center sm:justify-start gap-2">
                    <ChevronRight size={14} /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-serif font-bold mb-8">Our Services</h5>
            <ul className="space-y-4">
              {['Wedding Planning', 'Catering', 'Birthday Decor', 'Stage Setup', 'Corporate Events', 'DJ Services'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-neutral-400 hover:text-gold transition-colors flex items-center justify-center sm:justify-start gap-2">
                    <ChevronRight size={14} /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h5 className="text-lg font-serif font-bold mb-8">Newsletter</h5>
            <p className="text-neutral-400 mb-6">Subscribe to get latest updates and offers.</p>
            <div className="flex gap-2 w-full max-w-sm">
              <input 
                type="email" 
                placeholder="Email Address"
                className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 w-full focus:border-gold outline-none"
              />
              <button className="bg-gold text-neutral-950 p-2 rounded-lg hover:bg-gold-light transition-all shrink-0">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} PS Catering & Events Management. All rights reserved.</p>
          <p className="mt-2">Designed with excellence in Madurai, Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  );
};

const MobileQuickActions = () => {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-[60] flex gap-3 md:hidden">
      <a 
        href="tel:+919087699798" 
        className="flex-1 bg-gold text-neutral-950 h-14 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-2xl shadow-gold/20 active:scale-95 transition-transform"
      >
        <Phone size={20} /> Call
      </a>
      <a 
        href="https://wa.me/919087699798" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-600 text-white h-14 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-2xl shadow-emerald-900/20 active:scale-95 transition-transform"
      >
        <MessageCircle size={20} /> WhatsApp
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Awards />
      <Services />
      <CateringMenu />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileQuickActions />
      
      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-neutral-800/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-gold shadow-xl md:hidden"
      >
        <ChevronRight size={24} className="-rotate-90" />
      </button>
    </div>
  );
}