import React from "react";

export const FullBranding: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black text-white border-t border-white/5">
      <div className="container mx-auto px-6">

        <h2 className="text-5xl md:text-7xl font-bold mb-16">
          Full <span className="text-brand-neon">Branding</span>
        </h2>

        <div className="flex flex-col xl:flex-row gap-8">

          {/* LEFT BIG */}
          <div className="w-full xl:w-5/12 bg-brand-dark border border-white/5 rounded-[2rem] p-4 shadow-2xl">
            <img
              src="https://i.ibb.co/DgTrD8XD/Gemini-Generated-Image-aah1nwaah1nwaah1.jpg"
              className="w-full h-full object-cover rounded-[1.5rem]"
            />
          </div>

          {/* RIGHT */}
          <div className="w-full xl:w-7/12 flex flex-col gap-8">

            {/* TOP */}
            <div className="bg-brand-dark border border-white/5 rounded-[2rem] p-4 shadow-2xl">
              <img
                src="https://i.ibb.co/TBp843dF/Gemini-Generated-Image-nxcnbunxcnbunxcn.jpg"
                className="w-full h-full object-cover rounded-[1.5rem]"
              />
            </div>

            {/* BOTTOM */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="bg-brand-dark border border-white/5 rounded-[2rem] p-4">
                <img
                  src="https://i.ibb.co/cc0frZ7S/Gemini-Generated-Image-l2tmvql2tmvql2tm.jpg"
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              </div>

              <div className="bg-brand-dark border border-white/5 rounded-[2rem] p-4">
                <img
                  src="https://plain-apac-prod-public.komododecks.com/202604/27/ZEJOiokomPWH0c7CW7Ub/image.jpg"
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              </div>

              <div className="bg-brand-dark border border-white/5 rounded-[2rem] p-4">
                <img
                  src="https://i.ibb.co/LzKBdwdp/Gemini-Generated-Image-tfk10otfk10otfk1.jpg"
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};