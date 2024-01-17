
import React from 'react';

const Academics = () => {
  const academicDetails = [
    {
        degree: 'Masters of Computer Application',
        institution: 'Punjab Technical University',
        year: '2016 - 2018',
    },
    {
      degree: 'Bachelor of Information Technology (Hons.)',
      institution: 'Kurukshetra University Kurukshetra',
      year: '2013 - 2016',
    },
    {
      degree: 'Higher Secondary School',
      institution: 'Kendriya Vidyalaya',
      year: '2012 - 2013',
    },
    {
        degree: 'Secondary School',
        institution: 'Kendriya Vidyalaya',
        year: '2010 - 2011',
    },
    
    // Add more academic details as needed
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Academic Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {academicDetails.map((academic, index) => (
            <div key={index} className="p-6 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{academic.degree}</h3>
              <p className="text-sm text-gray-600 mb-2">{academic.institution}</p>
              <p className="text-sm text-gray-600">{academic.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
