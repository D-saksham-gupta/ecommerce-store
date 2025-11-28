import { Heart, Zap, Users, Award, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hero-about bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Our Journey
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting Stories,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                {" "}
                One Stitch
              </span>{" "}
              at a Time
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We believe every piece of clothing tells a story. From the finest
              materials to ethical craftsmanship, discover how we are
              revolutionizing fashion with purpose.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3622619/pexels-photo-3622619.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <p className="text-rose-500 text-sm font-semibold uppercase tracking-widest mb-4">
                The Beginning
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Started with a Simple Dream
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                In 2015, our founder Sarah believed that fashion should be
                accessible, sustainable, and meaningful. What started as a small
                workshop with just three sewing machines has grown into a global
                movement of conscious consumers who care about where their
                clothes come from.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we partner with artisans across 12 countries, supporting
                fair wages, sustainable practices, and traditional craft
                techniques. Every garment in our collection carries the story of
                the hands that made it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rose-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Our Values
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Principles That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ethical</h3>
              <p className="text-gray-700">
                Fair wages, safe working conditions, and respect for our
                artisans are non-negotiable.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sustainable
              </h3>
              <p className="text-gray-700">
                Eco-friendly materials and zero-waste production minimize our
                environmental impact.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-700">
                We empower artisans and support local communities through
                education and opportunity.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-700">
                Every piece is crafted with meticulous attention to detail and
                premium materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rose-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Impact by Numbers
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Making a Real Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Happy Customers", icon: "👥" },
              { number: "2.5K", label: "Artisans Supported", icon: "🤝" },
              { number: "100%", label: "Fair Trade", icon: "✓" },
              { number: "12", label: "Countries", icon: "🌍" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-rose-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rose-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Our Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Passionate People Behind Every Piece
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Founder & Creative Director",
                image:
                  "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "Fashion visionary with 15 years of experience in sustainable design",
              },
              {
                name: "James Chen",
                role: "Operations Lead",
                image:
                  "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "Supply chain expert ensuring ethical practices across all production",
              },
              {
                name: "Emma Rodriguez",
                role: "Sustainability Officer",
                image:
                  "https://images.pexels.com/photos/3807421/pexels-photo-3807421.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "Environmental advocate working to reduce our carbon footprint",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="overflow-hidden h-64 md:h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-rose-500 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-rose-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Customer Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Voices of Our Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Finally, fashion that aligns with my values. Every purchase feels like a positive impact.",
                author: "Jessica L.",
                role: "Sustainability Advocate",
              },
              {
                quote:
                  "The quality is unmatched. I know exactly who made my clothes and I feel proud wearing them.",
                author: "Marcus T.",
                role: "Fashion Enthusiast",
              },
              {
                quote:
                  "Supporting artisans has never felt this good. This brand truly cares about their community.",
                author: "Priya K.",
                role: "Social Impact Supporter",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border-l-4 border-rose-500"
              >
                <p className="text-gray-700 text-lg mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-400" />
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Be part of something bigger. Every purchase supports fair wages,
            sustainable practices, and artisan communities worldwide.
          </p>
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-rose-500/30 transform hover:scale-105 transition-all duration-300">
            Shop Our Collection
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
