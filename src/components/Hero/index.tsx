import Image from "next/image";
import Link from "next/link";
import { Calendar, Award, Users, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      
      <div className="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

    
      <div className="absolute top-20 left-10 h-20 w-20 animate-pulse rounded-full bg-blue-100 opacity-20" />
      <div className="absolute top-40 right-20 h-16 w-16 animate-pulse rounded-full bg-green-100 opacity-20 delay-1000" />
      <div className="absolute bottom-40 left-20 h-12 w-12 animate-pulse rounded-full bg-purple-100 opacity-20 delay-2000" />

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
           
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
                  <Award className="mr-2 h-4 w-4" />
                  Leading Surgical Oncologist
                </div>

                <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  Dr.{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Archit Pandit
                  </span>
                </h1>

                <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                  Expert in Minimally Invasive Cancer Surgery with 20+ Years of
                  Excellence
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white/50 p-4 text-center backdrop-blur-sm dark:bg-gray-800/50">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    20+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div className="rounded-lg bg-white/50 p-4 text-center backdrop-blur-sm dark:bg-gray-800/50">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    5000+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Surgeries
                  </div>
                </div>
                <div className="col-span-2 rounded-lg bg-white/50 p-4 text-center backdrop-blur-sm md:col-span-1 dark:bg-gray-800/50">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    Gold
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Medalist MS
                  </div>
                </div>
              </div>

             
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="mr-3 h-5 w-5 text-blue-600" />
                  <span>Fortis Escorts, New Delhi & Gurugram</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Users className="mr-3 h-5 w-5 text-blue-600" />
                  <span>Head of Department - Surgical Oncology</span>
                </div>
              </div>

             
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex transform items-center justify-center rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Link>
                <Link
                  href="/video"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-blue-400"
                >
                  Learn More
                </Link>
              </div>
            </div>

            
            <div className="relative">
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-2xl dark:from-gray-800 dark:to-gray-700">
                  <Image
                    src="/images/hero/11.jpg"
                    alt="Dr. Archit Pandit - Leading Surgical Oncologist"
                    width={600}
                    height={700}
                    className="h-auto w-full object-cover"
                    priority
                  />

                  
                  <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <div className="text-white">
                      <h3 className="mb-2 text-lg font-semibold">
                        Specialized in:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-blue-600/80 px-3 py-1 text-sm">
                          GI Cancer
                        </span>
                        <span className="rounded-full bg-green-600/80 px-3 py-1 text-sm">
                          Thoracic Cancer
                        </span>
                        <span className="rounded-full bg-purple-600/80 px-3 py-1 text-sm">
                          Gynecological Cancer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="absolute -top-4 -right-4 h-24 w-24 animate-pulse rounded-full bg-blue-200 opacity-20 dark:bg-blue-800" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 animate-pulse rounded-full bg-green-200 opacity-20 delay-1000 dark:bg-green-800" />
            </div>
          </div>

         

          <div className="mx-auto mt-16 max-w-4xl text-center lg:mt-24">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              Excellence in Cancer Care
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Dr. Archit Pandit is a distinguished Surgical Oncologist with over
              20 years of expertise, leading the Department of Surgical Oncology
              at Fortis Escorts, New Delhi & Gurugram. As a Gold medalist in MS
              General Surgery who trained at AIIMS, he holds advanced
              fellowships in laparoscopic and robotic cancer surgery. His
              practice focuses exclusively on minimally invasive treatment of
              GI, thoracic, and gynecological cancers, combining precision with
              compassionate care to deliver exceptional outcomes for his
              patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
