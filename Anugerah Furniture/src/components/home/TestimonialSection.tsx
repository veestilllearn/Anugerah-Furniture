import { TESTIMONIALS } from "../../constants/Data";

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#D9D9D9] pt-20 pb-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-[0.15em] uppercase mb-12 text-black font-['Inter']">
          WHAT DO THEY SAY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#D9D9D9] rounded-2xl overflow-hidden border border-gray-300 shadow-md"
            >
              {/* Foto Testimoni */}
              <div className="h-64 w-full bg-gray-400 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Teks Testimoni */}
              <div className="p-6 text-center bg-[#EAEAEA]">
                <h4 className="font-bold text-lg text-black mb-2">
                  {testimonial.name}
                </h4>
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  "{testimonial.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
