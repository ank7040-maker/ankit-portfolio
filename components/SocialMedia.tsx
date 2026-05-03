import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Heart, MessageCircle, Bookmark, ExternalLink } from 'lucide-react';

const SocialPost = ({ img, likes, title }: { img: string, likes: string, title: string }) => (
  <div className="bg-white rounded-md shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
    <div className="p-3 flex items-center justify-between border-b border-gray-100">
       <div className="flex items-center gap-2">
         <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600"></div>
         <span className="text-xs font-bold text-black">ankit.design</span>
       </div>
       <span className="text-xs text-gray-400">2h</span>
    </div>
    <div className="aspect-square bg-gray-100 overflow-hidden relative">
       <img src={img} alt="Social Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
    </div>
    <div className="p-3">
      <div className="flex justify-between text-brand-black mb-2">
         <div className="flex gap-3">
            <Heart size={18} className="hover:text-red-500 cursor-pointer transition-colors" />
            <MessageCircle size={18} className="hover:text-blue-500 cursor-pointer transition-colors" />
         </div>
         <Bookmark size={18} />
      </div>
      <div className="text-xs font-bold text-black mb-1">{likes} likes</div>
      <p className="text-[10px] text-gray-600 line-clamp-2 leading-relaxed">
        <span className="font-bold text-black mr-1">ankit.design</span>
        {title}
      </p>
    </div>
  </div>
);

export const SocialMedia: React.FC = () => {
  return (
    <section id="social" className="pt-40 pb-24 bg-neutral-900 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-4">
             Social <span className="text-brand-neon">Media</span>
           </h2>
           <p className="text-brand-gray max-w-xl mx-auto">
             Visual content I crafted for social networks such as Instagram and Facebook to boost brand engagement.
           </p>
        </div>
        
        <div className="flex flex-col gap-8">
           
           {/* Top Grid of posts (Full Width) */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <SocialPost 
                    img="https://i.ibb.co/cKzV8YS8/areejet-singgg.jpg" 
                    likes="1,240" 
                    title="Magical evening with Arijit Singh! 🎤✨ Capturing the soulful vibes live." 
                 />
                 <SocialPost 
                    img="https://i.ibb.co/ymzhnB6L/1000152571.jpg" 
                    likes="856" 
                    title="Stacked with flavor, grilled to perfection 🍔✨ Because ordinary burgers aren’t our thing."
                 />
                 <SocialPost 
                    img="https://i.ibb.co/fd6mLR31/1st-poster.jpg" 
                    likes="2,100" 
                    title="LEGACY 🎌 Custom streetwear poster designed by yours truly. 🎨 Tag someone who needs this hoodie in their wardrobe! 💥 #graphicdesigner #posterart #streetwearbrand #clothingbrand #photoshopedit #editspenguin" 
                 />
                 <SocialPost 
                    img="https://iili.io/qKY6zZP.jpg" 
                    likes="943" 
                    title="Craving some Chicken Noodles? 🤤 Just designed this mouth-watering social media poster for my portfolio. Loved working on the raw, vintage details on this one! 🎨💻Drop a 🔥 if you like the vibe! #photoshop #graphicdesigner #foodposter #socialmediadesign #portfolio #creativeart" 
                 />
           </div>

           {/* Featured Image - Clean Mockup */}
           <div className="w-full py-12 flex justify-center relative">
               <div className="relative w-full overflow-hidden rounded-lg group">
                   {/* Glow effect behind the image to sync with theme */}
                   <div className="absolute -inset-1 bg-brand-neon/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   
                   <img 
                     src="https://iili.io/qnfKlEX.jpg" 
                     alt="Featured Social Media Campaign" 
                     className="relative w-full h-auto object-cover rounded-lg shadow-2xl z-10 hover:scale-[1.01] transition-transform duration-500"
                   />
               </div>
           </div>

           {/* Bottom Grid of posts */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <SocialPost 
                    img="https://iili.io/qKYLc0X.jpg" 
                    likes="1,500" 
                    title="Say goodbye to the heat and hello to freshness! 👋💙
Introducing Origin Juice's Blue Lagoon Drink – the new definition of cool.
🍋 Zesty lemon meets refreshing mint ice.

🎉 SPECIAL OFFER: Order now and get up to 30% OFF!
👉 Link in bio to order!

#BlueLagoon #OriginJuice #StayFresh #SummerVibes #BeatTheHeat #DrinkDeal" 
                 />
                 <SocialPost 
                    img="https://iili.io/qKPYd9S.jpg" 
                    likes="3,402" 
                    title="🏡 Turning dream homes into visual reality! ✨ Loved working on this luxurious Real Estate social media poster for my portfolio. The goal was to mix elegance with trust—using that premium emerald green and gold theme. 🔑

What do you guys think of this layout and color grading? Let me know in the comments! 👇

Need high-quality social media designs to elevate your brand? Drop a DM! 📩" 
                 />
                 <SocialPost 
                    img="https://iili.io/qfq3qyg.jpg" 
                    likes="670" 
                    title="Ab shopping hogi Smart aur life hogi Easy! ✨
Roz naye deals aur behtareen offers ke liye abhi download karein DailyDeals App.
📲 Link in bio!" 
                 />
                 <SocialPost 
                    img="https://iili.io/qqaXZvI.md.jpg" 
                    likes="1,120" 
                    title="Your ultimate active companion is here. ⚡
Unlock comprehensive health insights and elevate your active lifestyle with the boAt Smart Move PRO.
🩸 SpO2 Monitoring
🌊 Water Resistant Design

(Conceptual Ad Design for Portfolio)
Drop a ❤️ if you like the visual flow!
Follow @editspenguin for more creative designs. 🚀
.
.
#boat #smartwatchdesign #uiux #graphicdesignindia #posterart #photoshopedit #editspenguin" 
                 />
           </div>

        </div>
      </div>
    </section>
  );
};