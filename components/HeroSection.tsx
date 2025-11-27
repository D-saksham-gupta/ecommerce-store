import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      <div className="lg:col-span-2 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-12 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-rose-500 text-sm font-medium mb-2">Accessories</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-2">
            Up To <span className="text-rose-500">35% Off</span>
          </h2>
          <p className="text-4xl font-bold text-gray-900 mb-6">
            latest Creations
          </p>
          <button className="flex items-center gap-2 text-gray-900 font-medium hover:text-rose-500 transition-colors">
            Shop Now <ArrowRight size={20} />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96">
          <img
            src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Watch"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <p className="text-rose-500 text-xs font-medium mb-2">
              Trend reads
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              New Modern & Stylish
            </h3>
            <p className="text-xl font-bold text-gray-900">C Arts</p>
          </div>
          <div className="mt-1">
            <img
              src="https://images.pexels.com/photos/6068955/pexels-photo-6068955.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Modern Art"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6">
          <div>
            <p className="text-rose-500 text-xs font-medium mb-2">Popular</p>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Energy with our
            </h3>
            <p className="text-xl font-bold text-gray-900">newest collection</p>
          </div>
          <div className="mt-4">
            <img
              src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Collection"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
