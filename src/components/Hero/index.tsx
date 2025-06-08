import Image from "next/image"
import Link from "next/link"
import { Calendar, Award, Users, MapPin } from "lucide-react"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-100 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-100 rounded-full opacity-20 animate-pulse delay-2000" />

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Leading Surgical Oncologist
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Dr. <span className="text-blue-600 dark:text-blue-400">Archit Pandit</span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Expert in Minimally Invasive Cancer Surgery with 20+ Years of Excellence
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">5000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Surgeries</div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm col-span-2 md:col-span-1">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Gold</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Medalist MS</div>
                </div>
              </div>

              {/* Location & Specialization */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Fortis Escorts, New Delhi & Gurugram</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Users className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Head of Department - Surgical Oncology</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#appointment"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Link>
                <Link
                  href="#about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700">
                  <Image
                    src="/images/hero/11.jpg"
                    alt="Dr. Archit Pandit - Leading Surgical Oncologist"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                  />

                  {/* Overlay with credentials */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <div className="text-white">
                      <h3 className="text-lg font-semibold mb-2">Specialized in:</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-600/80 rounded-full text-sm">GI Cancer</span>
                        <span className="px-3 py-1 bg-green-600/80 rounded-full text-sm">Thoracic Cancer</span>
                        <span className="px-3 py-1 bg-purple-600/80 rounded-full text-sm">Gynecological Cancer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse delay-1000" />
            </div>
          </div>

          {/* Professional Description */}
          <div className="mt-16 lg:mt-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Excellence in Cancer Care
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Dr. Archit Pandit is a distinguished Surgical Oncologist with over 20 years of expertise, leading the
                Department of Surgical Oncology at Fortis Escorts, New Delhi & Gurugram. As a Gold medalist in MS
                General Surgery who trained at AIIMS, he holds advanced fellowships in laparoscopic and robotic cancer
                surgery. His practice focuses exclusively on minimally invasive treatment of GI, thoracic, and
                gynecological cancers, combining precision with compassionate care to deliver exceptional outcomes for
                his patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
