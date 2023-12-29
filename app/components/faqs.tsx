'use client'
import React from 'react';

export type faqProps = {
  question: string;
  answer: string;
}

const data = [
  
  {
    question: "Is there a limit on the number of trades I can execute on Rabbi Exchange?",
    answer: "No, Rabbi Exchange believes in providing our users with the freedom to trade without limitations. There is no imposed restriction on the number of trades you can execute. Whether you're a casual trader or actively involved in the market, Rabbi Exchange is designed to accommodate your trading preferences without any trade limits"
    
  },
  {
    question: " How do I complete a transaction on Rabbi Exchange?",
    answer: "To complete a transaction on Rabbi Exchange, proof of payment must be provided. This ensures a secure and transparent trading environment. Once you've initiated a transaction, follow the prompts to upload the necessary proof of payment. Our system will verify the details, and upon successful confirmation, the transaction will be completed, and the assets will be transferred accordingly."
    
  },
  {
    question: "What forms of payment are accepted on Rabbi Exchange?",
    answer: "Rabbi Exchange accepts a variety of payment methods, including bank transfers, credit cards, and other popular payment options. Make sure to check the specific payment methods available in your region on our platform for a seamless trading experience"
    
  },
  {
    question: "Is Rabbi Exchange compliant with regulatory standards?",
    answer: "Yes, Rabbi Exchange is fully committed to compliance with global regulatory standards. We adhere to strict guidelines to ensure the legality and security of our platform. Our users can trade with confidence, knowing that Rabbi Exchange operates within the framework of international regulations."
    
  },
  {
    question: "What do I do if I encounter issues during a transaction?",
    answer: "If you encounter any issues during a transaction, our 24/7 customer support team is ready to assist you. Reach out to our support team via the designated channels on our platform, and we'll promptly address your concerns to ensure a smooth and hassle-free trading experience."
    
  },
]

const Faqs = () => {
  return (
<div className='py-16'>
<h1 className='text-center text-3xl md:text-4xl font-extrabold primary-content py-9'>
Frequently Asked Questions (FAQs)
</h1>

{/* faqs */}

{data.map((dat:faqProps) => <div key={dat.question} className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3"/> 
  <div className="collapse-title text-xl font-medium">
    {dat.question}
  </div>
  <div className="collapse-content"> 
    <p>{dat.answer}</p>
  </div>
</div>
)
};



</div>
  )
}

export default Faqs