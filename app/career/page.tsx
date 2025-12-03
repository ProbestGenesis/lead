import React from 'react';
import { Users, BookOpen, Clock, MapPin, ArrowRight } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const BenefitCard: React.FC<BenefitProps> = ({
  icon,
  title,
  description,
  bgColor,
  iconColor,
}) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
    <div
      className={`w-14 h-14 rounded-lg ${bgColor} flex items-center justify-center mb-6`}
    >
      <div className={`${iconColor} w-7 h-7`}>{icon}</div>
    </div>
    <h3 className="font-bold text-lg mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-base leading-relaxed">{description}</p>
  </div>
);

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
  offerLink: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  location,
  type,
  description,
  offerLink,
}) => (
  <article className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 group">
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 flex items-center gap-2 mt-3">
          <MapPin className="w-4 h-4 flex-shrink-0 text-blue-600" /> {location}
        </p>
      </div>
      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full whitespace-nowrap ml-4">
        {type}
      </span>
    </div>

    <p className="text-gray-700 grow leading-relaxed text-base">
      {description}
    </p>

    <div className="mt-6 pt-6 border-t border-gray-100">
      <a
        href={offerLink}
        className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 group/btn"
      >
        View Position
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </div>
  </article>
);

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-gray-100">
      {/* Navigation accent line */}
      <div className="h-1 bg-linear-to-r from-blue-600 to-blue-400"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <header className="py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
              CAREERS
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              Build the Future of Solar
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-light">
              We design and deploy solar solutions that empower communities and
              businesses worldwide. Join our mission to accelerate the energy transition
              through innovation, collaboration, and sustainable growth.
            </p>
          </div>
        </header>

        {/* Benefits Section */}
        <section className="py-20 md:py-24 border-t border-gray-200">
          <div className="mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              OUR COMMITMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Why Join Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <BenefitCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Continuous Training"
              description="We invest in your growth with regular trainings, workshops, and mentoring opportunities."
              bgColor="bg-blue-50"
              iconColor="text-blue-600"
            />
            <BenefitCard
              icon={<Clock className="w-6 h-6" />}
              title="Flexible Hours"
              description="Balance work and life with flexible schedules and remote working options."
              bgColor="bg-green-50"
              iconColor="text-green-600"
            />
            <BenefitCard
              icon={<Users className="w-6 h-6" />}
              title="Innovation Focus"
              description="Work on cutting-edge projects that push the boundaries of solar technology."
              bgColor="bg-amber-50"
              iconColor="text-amber-600"
            />
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 md:py-24 border-t border-gray-200">
          <div className="mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              OPPORTUNITIES
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Current Openings
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Explore roles where you can make a real impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <JobCard
              title="Community Manager"
              location="Remote / Togo"
              type="Full-time"
              description="Responsible for engaging our online community, growing brand awareness, and managing social content across multiple platforms."
              offerLink="/offer-cm"
            />
            <JobCard
              title="Commercial"
              location="Lomé / Field-based"
              type="Full-time"
              description="Develop client portfolios, manage key accounts, and drive sales to meet ambitious targets in the field."
              offerLink="/offer-commercial"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 border-t border-gray-200">
          <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-12 md:p-16 shadow-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                Don't See Your Role?
              </h3>
              <p className="text-blue-100 mb-10 leading-relaxed text-lg">
                We're always on the lookout for talented individuals who share our vision.
                Send us your profile and we'll keep you in mind for opportunities
                that match your skills and ambitions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-blue-50 font-bold text-lg transition-all duration-200 hover:shadow-xl group/cta"
              >
                Send Your Profile
                <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer accent */}
      <div className="h-1 bg-linear-to-r from-blue-400 to-blue-600 mt-20"></div>
    </div>
  )
}
