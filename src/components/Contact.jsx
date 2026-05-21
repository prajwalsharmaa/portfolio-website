import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setFormData({
                Name: '',
                email: '',
                subject: '',
                message: '',
            });
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-4 py-12 xs:py-16 sm:py-20">
            <div className="max-w-3xl w-full">
                <div className="text-center mb-8 xs:mb-10 sm:mb-12">
                    <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 font-marcellus mb-2 xs:mb-3 sm:mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-300 text-sm xs:text-base sm:text-lg">Want to work together? Send a message!</p>
                    <div className="w-16 xs:w-20 sm:w-24 h-1 bg-red-600 mx-auto mt-3"></div>
                </div>

                <div className="bg-[#121212] border border-[#222222] rounded-lg xs:rounded-xl sm:rounded-2xl p-5 xs:p-6 sm:p-8 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                    {isSubmitted && (
                        <div className="mb-5 xs:mb-6 p-4 xs:p-5 bg-[#0f1a12] border border-[#1f3a28] rounded-lg">
                            <p className="text-green-300 text-sm font-medium">
                                Thank you! Your message has been sent successfully.
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-3.5 xs:space-y-4 sm:space-y-5">
                        {/* First Name and Last Name Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 xs:gap-4 sm:gap-5">
                            <div>
                                <label htmlFor="Name" className="block text-gray-300 text-sm font-medium mb-2 xs:mb-2.5">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="Name"
                                    name="Name"
                                    value={formData.Name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg xs:rounded-lg px-3 xs:px-4 py-2.5 xs:py-3 text-white text-sm xs:text-base placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors h-10"
                                    placeholder="Your full name"
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2 xs:mb-2.5">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg xs:rounded-lg px-3 xs:px-4 py-2.5 xs:py-3 text-white text-sm xs:text-base placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors h-10"
                                    placeholder="your-name@example.com"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2 xs:mb-2.5">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg xs:rounded-lg px-3 xs:px-4 py-2.5 xs:py-3 text-white text-sm xs:text-base placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors h-10"
                                placeholder="How can I help?"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2 xs:mb-2.5">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg xs:rounded-lg px-3 xs:px-4 py-2.5 xs:py-3 text-white text-sm xs:text-base placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 xs:gap-4 sm:gap-5">
                            <div className="pt-1 xs:pt-2 sm:pt-4 sm:col-span-2 flex justify-center">
                                <button
                                    type="submit"
                                    className="mx-auto bg-red-600 hover:bg-red-500 text-gray-900 font-semibold text-sm xs:text-base px-6 xs:px-8 py-3 rounded-lg xs:rounded-lg transition-colors h-11 flex items-center justify-center"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
                <h2>Or email me directly at: <a href="mailto:prajwalst1213@gmail.com" className="text-red-500 hover:underline">prajwalst1213@gmail.com</a></h2>


            </div>
        </section>
    );
};

export default Contact;