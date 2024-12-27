import React from 'react';


const Pricing = () => {
  const pricingPlans = [
    { 
      id: 1, 
      plan: 'Basic', 
      price: '$10/month', 
      description: 'Access to basic features and limited quizzes.' 
    },
    { 
      id: 2, 
      plan: 'Standard', 
      price: '$20/month', 
      description: 'Includes more quizzes, tracking, and advanced features.' 
    },
    { 
      id: 3, 
      plan: 'Premium', 
      price: '$30/month', 
      description: 'Unlimited access to all quizzes and premium support.' 
    },
  ];

  return (
    <div className="pricing-page">
      <h1>Our Pricing Plans</h1>
      <p>Choose the plan that suits you best!</p>
      <div className="pricing-plans">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="pricing-card">
            <h2>{plan.plan}</h2>
            <p className="price">{plan.price}</p>
            <p>{plan.description}</p>
            <button className="btn">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
