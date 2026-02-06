import React from 'react';
import Link from 'next/link';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">ClearPath Global</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Empowering global mobility through data-driven insights.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="text-gray-600 hover:text-gray-900">Guides</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link href="/research" className="text-gray-600 hover:text-gray-900">Research</Link></li>
              <li><Link href="/news" className="text-gray-600 hover:text-gray-900">News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/quiz" className="text-gray-600 hover:text-gray-900">Quiz</Link></li>
              <li><Link href="/app/impact-checker" className="text-gray-600 hover:text-gray-900">Impact Checker</Link></li>
              <li><Link href="/app/career-pivot" className="text-gray-600 hover:text-gray-900">Career Pivot</Link></li>
            </ul>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-600"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600"><Github className="w-5 h-5" /></a>
            <a href="mailto:hello@clearpathglobal.com" className="text-gray-400 hover:text-gray-600"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} ClearPath Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
