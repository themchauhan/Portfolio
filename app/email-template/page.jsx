import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Email_temp from '@/components/Email_temp';

export default function EmailTemplatePage() {
  return (
    <main>
      <Nav />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              📧 Email Template
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                Email Template
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A modern, responsive email template designed for professional communication. Copy the HTML content and paste it into your email client.
            </p>
          </div>
        </div>
      </section>

      {/* Email Template Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-600 font-medium">Email Template Preview</span>
              </div>
            </div>
            <div className="p-0">
              <Email_temp />
            </div>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Use This Template</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Copy the HTML</h3>
                  <p className="text-gray-600">Right-click on the email template above and select &quot;View Page Source&quot; or use browser developer tools to copy the HTML content.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Paste in Email Client</h3>
                  <p className="text-gray-600">Paste the HTML content into your email client (Gmail, Outlook, etc.) in HTML mode or rich text editor.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Customize Content</h3>
                  <p className="text-gray-600">Update the contact information, personal details, and any other content to match your specific needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
