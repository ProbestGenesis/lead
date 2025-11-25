'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
      <footer className="border-t bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                ÉLECPRO
              </h3>
              <p className="text-sm text-gray-500">
                Solutions électriques de confiance depuis 2010.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-white transition"
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-white transition"
                  >
                    Dépannage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-white transition"
                  >
                    Domotique
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Entreprise</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="hover:text-white transition"
                  >
                    Réalisations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>01 23 45 67 89</li>
                <li>contact@elecpro.fr</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>
              &copy; 2025 ÉLECPRO. Tous droits réservés. | RCS Paris 12345678
            </p>
          </div>
        </div>
      </footer>
  )
}
export default Footer