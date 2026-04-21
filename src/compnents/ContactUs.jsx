import React from 'react'
import assets from "../assets/assets"
import Title from "./Title"
import toast from 'react-hot-toast';
function ContactUs() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "28b762a1-0155-4644-9078-241cb2fbdd4b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
            toast.error("Error , please try again")
        }
    }
    return (
        <div className='flex flex-col items-center text-gray-800 dark:text-white px-4 sm:px-12 lg:px-24 xl:px-40 py-20'>
            <Title title={"Reach out to us"} desc={"You can connect with us through this form"} />
            <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
                <div>
                    <label htmlFor="" className=' text-sm font-medium'>Your Name</label>
                    <div className='mt-2 flex items-center rounded-lg border pl-3  border-gray-300 dark:border-gray-600 w-full'>
                        <img src={assets.person_icon} alt='person icon' />
                        <input name='name' type="text" required placeholder='Enter Your Name' className='text-sm outline-none p-3 w-full' />
                    </div>
                </div>

                <div>
                    <label htmlFor="" className='text-sm font-medium'>Your Email</label>
                    <div className='mt-2 flex items-center rounded-lg border pl-3  border-gray-300 dark:border-gray-600 w-full'>
                        <img src={assets.email_icon} alt='person icon' />
                        <input name='email' type="text" required placeholder='Enter Your Email' className='text-sm outline-none p-3 w-full' />
                    </div>
                </div>
                <div className='sm:col-span-2'>
                    <label htmlFor="message" className='text-sm font-medium'>Your Message</label>
                    <textarea required name="message" id="message" rows={8} className='mt-2 w-full p-3 text-sm outline-0 rounded-lg border border-gray-300 dark:border-gray-600'>

                    </textarea>
                </div>
                <button type='submit' className='w-max flex gap-2 bg px-4 py-3 mt-4 bg-primary
                 text-white text-sm rounded-full cursor-pointer hover:scale-105 transition-all'>Submit
                    <img src={assets.arrow_icon} alt="submit data" />
                </button>
            </form>
            <span>{result}</span>
        </div>
    )
}

export default ContactUs
