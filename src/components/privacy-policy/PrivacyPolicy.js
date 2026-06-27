'use client';

import React from 'react';
import { privacyPageData } from '@/config/privacy';

export default function PrivacyPolicy() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="border-b border-gray-200 pb-10 mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {privacyPageData.title}
          </h1>
          <p className="text-gray-500 font-medium">
            Last Updated: {privacyPageData.lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            {privacyPageData.introduction}
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {privacyPageData.sections.map((section) => (
            <div key={section.id} className="group">
              <h2 className="text-2xl font-bold text-[#0f4c4c] mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-lime-500"></span>
                {section.heading}
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {section.content}
              </p>

              {/* List items if they exist */}
              {section.list && (
                <ul className="list-disc ml-6 space-y-2 text-gray-600">
                  {section.list.map((item, index) => (
                    <li key={index} className="pl-2">{item}</li>
                  ))}
                </ul>
              )}

              {/* Contact details specifically for the last section */}
              {section.contactDetails && (
                <div className="bg-[#f8f9fa] p-6 rounded-lg border-l-4 border-[#0f4c4c] mt-4">
                  {section.contactDetails.map((detail, index) => (
                    <p key={index} className="text-gray-700 font-medium mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 pt-10 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-sm italic">
            © {new Date().getFullYear()} M. D. Enterprises. All rights reserved.
          </p>
        </div>
        
      </div>
    </section>
  );
}