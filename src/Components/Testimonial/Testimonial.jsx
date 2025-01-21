import { useEffect, useState } from "react"

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState();  

    useEffect(() => {
      // Simulate fetching data or initializing the state
      const fetchedTestimonials = [
        {
          name: 'John Doe',
          jobTitle: 'CEO, Company',
          profile: 'https://readymadeui.com/team-1.webp',
          message:
            'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.'
        },
        {
          name: 'Jane Smith',
          jobTitle: 'CTO, Another Company',
          profile: 'https://readymadeui.com/team-2.webp',
          message:
            'I loved the professionalism and dedication to quality. The team really exceeded expectations!'
        },
        {
          name: 'Alex Johnson',
          jobTitle: 'Manager, Business Inc.',
          profile: 'https://readymadeui.com/team-3.webp',
          message:
            'Absolutely fantastic service! It was quick, seamless, and stress-free. Highly recommended!'
        }
      ];
  
      // Set the testimonials state
      setTestimonials(fetchedTestimonials);
    }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <div className="p-4 my-6 font-[sans-serif] max-w-6xl max-lg:max-w-3xl max-md:max-w-lg mx-auto">
      <div className="max-w-2xl">
        <h2 className="text-gray-800 text-2xl font-bold md:text-3xl">What our happy client say</h2>
        <p className="text-sm text-gray-500 mt-4 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:justify-center mt-12">
        {testimonials.map((testimonial, index) => (
        <>
          <div key={index} className="border border-gray-300 lg:p-6 p-4 rounded-xl bg-white relative">
          <div className="flex items-center">
            <img src="https://readymadeui.com/team-1.webp" className="w-14 h-14 rounded-full border border-purple-600" />
            <div className="ml-4">
              <h6 className="text-gray-800 text-sm font-semibold"> {testimonial.name} </h6>
              <p className="text-xs text-gray-500 mt-1">
                {testimonial.jobTitle}
              </p>
            </div>
          </div>

          <hr className="rounded-full border-2 mt-6" />

          <div className="mt-6">
            <p className="text-gray-800 text-sm leading-relaxed"> {testimonial.message} </p>
          </div>

          <div className="flex space-x-1 mt-4">
            <svg className="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg className="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg className="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg className="w-4 h-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg className="w-4 h-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
          </div>
        </>
        ))}

      </div>
    </div>
    </>
  )
}

export default Testimonial