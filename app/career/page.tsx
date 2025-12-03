
import React from 'react'
import { Users, BookOpen, Clock, MapPin, Mail } from 'lucide-react'

function page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header / Intro */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl  text-left">
            join the The Solar revolution
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl  text-left">
            We design and deploy solar solutions that empower communities and
            businesses. Join our mission to accelerate the energy transition
            through innovation, collaboration and sustainable growth.
          </p>
        </header>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Why work with us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white  p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Continuous Training
              </h3>
              <p className="text-gray-600 text-sm">
                We invest in your growth with regular trainings, workshops and
                mentoring.
              </p>
            </div>

            <div className="bg-white  p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Flexible Hours</h3>
              <p className="text-gray-600 text-sm">
                Balance work and life with flexible schedules and remote
                options.
              </p>
            </div>

            <div className="bg-white  p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovation Focus</h3>
              <p className="text-gray-600 text-sm">
                Work on cutting-edge projects that push the boundaries of solar
                tech.
              </p>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Current Openings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Card 1: Community Manager */}
            <article className="bg-white  p-6 shadow-sm hover:shadow-md transition flex flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">Community Manager</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4" /> Remote / Togo
                  </p>
                </div>
                <div className="text-sm text-gray-400">Full-time</div>
              </div>

              <p className="text-gray-700 mt-4 flex-grow">
                Responsible for engaging our online community, growing brand
                awareness and managing social content across platforms.
              </p>

              <div className="mt-6">
                <a
                  href="/offer-cm"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  View Offer
                </a>
              </div>
            </article>

            {/* Job Card 2: Commercial */}
            <article className="bg-white  p-6 shadow-sm hover:shadow-md transition flex flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">Commercial</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4" /> Lomé / Field-based
                  </p>
                </div>
                <div className="text-sm text-gray-400">Full-time</div>
              </div>

              <p className="text-gray-700 mt-4 flex-grow">
                Develop client portfolios, manage key accounts and drive sales
                to meet ambitious targets in the field.
              </p>

              <div className="mt-6">
                <a
                  href="/offer-commercial"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  View Offer
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Final CTA: Unsolicited Application */}
        <section className="mt-8 bg-white p-8  shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-3">Didn't find your fit?</h3>
          <p className="text-gray-600 mb-6">
            Send us an unsolicited application — we keep promising candidates in
            mind for future roles.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Unsolicited Application
          </a>
        </section>
      </div>
    </div>
  );
}

export default page