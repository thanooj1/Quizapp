import React from 'react';


const JobSeekers = () => {
  const jobListings = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'TechCorp',
      location: 'New York, NY',
      salary: '$80,000 - $120,000',
      description: 'We are looking for a skilled software developer to join our dynamic team.',
      responsibilities: [
        'Develop software solutions',
        'Collaborate with other developers',
        'Write clean, maintainable code'
      ],
      qualifications: [
        'Bachelor\'s degree in Computer Science',
        'Experience with React, Node.js, and SQL',
        'Strong problem-solving skills'
      ],
      link: 'https://example.com/software-developer'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'DesignPro',
      location: 'San Francisco, CA',
      salary: '$70,000 - $100,000',
      description: 'Join our creative team as a UI/UX designer and help us build engaging user interfaces.',
      responsibilities: [
        'Design wireframes and prototypes',
        'Collaborate with developers to implement designs',
        'Conduct user research and usability testing'
      ],
      qualifications: [
        'Experience with Figma, Sketch, or Adobe XD',
        'Strong understanding of design principles',
        'Excellent communication skills'
      ],
      link: 'https://example.com/ui-ux-designer'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'ProductVision',
      location: 'Remote',
      salary: '$100,000 - $140,000',
      description: 'We are hiring a product manager to oversee the development of new features.',
      responsibilities: [
        'Define product vision and roadmap',
        'Collaborate with engineering teams',
        'Conduct market research and user testing'
      ],
      qualifications: [
        'Experience in product management',
        'Strong leadership and organizational skills',
        'Bachelor\'s degree or equivalent experience'
      ],
      link: 'https://example.com/product-manager'
    }
  ];

  return (
    <div className="jobseekers-page">
      <h1>Job Opportunities</h1>
      <p>Explore available job listings and apply for your next opportunity!</p>
      <div className="job-listings">
        {jobListings.map(job => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p className="company">{job.company}</p>
            <p className="location">{job.location}</p>
            <p className="salary">{job.salary}</p>
            <p>{job.description}</p>

            <div className="job-details">
              <h3>Responsibilities:</h3>
              <ul>
                {job.responsibilities.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>

              <h3>Qualifications:</h3>
              <ul>
                {job.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>

            <a href={job.link} className="btn">Apply Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSeekers;
