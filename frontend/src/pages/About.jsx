import React from 'react'



const teamMembers = [
    {
        name: 'John Doe',
        position: 'Founder & CEO',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'John is passionate about providing high-quality products and exceptional customer service.',
    },
    {
        name: 'Jane Smith',
        position: 'Head of Marketing',
        image: 'https://images.pexels.com/photos/10558358/pexels-photo-10558358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Jane leads our marketing efforts, ensuring that our brand reaches every corner of the market.',
    },
    {
        name: 'Alice Johnson',
        position: 'Customer Support Manager',
        image: 'https://media.istockphoto.com/id/1214385229/photo/smiling-businessman.jpg?s=1024x1024&w=is&k=20&c=BOOf_j-09YMQk_JBfdmGjgz265zYt0pSr61w6qq8S4k=',
        description: 'Alice is dedicated to helping our customers have the best shopping experience possible.',
    },
];

const About = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
                <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
                    At Our Store, we believe in providing the best products at the best prices. Our mission is to make shopping easy and enjoyable while delivering exceptional customer service and quality.
                </p>
                <h2 className="text-2xl font-semibold text-center mb-6">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-gray-200" />
                            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                            <h4 className="text-gray-600 text-center">{member.position}</h4>
                            <p className="text-gray-700 mt-2 text-center">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};




export default About