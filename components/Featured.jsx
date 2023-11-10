"use client"
import { useState } from "react";
import Image from 'next/image';

function MyForm() {
    const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
  
    const handleEmailChange = (e) => {
      const enteredEmail = e.target.value;
      setEmail(enteredEmail);
  
      // Regular expression to validate email format
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
      // Check if the entered email matches the pattern
      setIsValidEmail(emailPattern.test(enteredEmail));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (email && isValidEmail && isChecked) {
        // Proceed with the form submission
      } else {
        // Handle invalid email or other form errors
      }
    };
  return (
    <section className="featured-block bg-[#5869a5]" id="featured">
    <div className="container">
     <div className="md:flex flex-wrap mb-5 divide-x divide-white">  
      <div className="col-6 w-full md:w-6/12">
         <h3>Interested In Seeing My Collaborated Work?</h3>
         <p className="pt-3">Please Fill out the form.</p>
      </div>
      <div className="col-6 w-full md:w-6/12 md:pl-8">
       <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        className={`w-full max-w-[460px] text-black border p-2 rounded ${isValidEmail ? "border-white" : "border-red-500"}`}
      />
      {!isValidEmail && <p className="text-red-500">Please enter a valid email</p>}
      <label className="w-full flex mt-5">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="mr-3"
        />
        I agree to the terms and conditions
      </label>
      </div>
      </div>
      {email && isChecked && (
          <div class="mx-auto mt-16">
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              <div class="bg-white p-4 rounded-lg shadow-md">
                   <Image 
                    src="/design.svg"
                    alt="person"
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover'}} 
                    className="w-full h-40 object-cover rounded mb-4" 
                  />
                  <h2 class="text-xl font-semibold text-black">Socure</h2>
                  <p class="text-gray-600">Technology Used: Html, Scss, Jquery/Jacascript, PHP, Wordpress, Marketo</p>
              </div>
  
              <div class="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/design.svg"
                    alt="person"
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover'}} 
                    className="w-full h-40 object-cover rounded mb-4" 
                  />                  <h2 class="text-xl font-semibold text-black">Digimarc</h2>
                  <p class="text-gray-600">Technology Used: Html, Scss, Jquery/Javascript, Drupal, Hubspot</p>
              </div>


              <div class="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/design.svg"
                    alt="person"
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover'}} 
                    className="w-full h-40 object-cover rounded mb-4" 
                  />                  
                  <h2 class="text-xl font-semibold text-black">ClearDigital</h2>
                  <p class="text-gray-600">Technology Used: Html, Scss, Jquery/Javascript, PHP, Wordrpress, GravityForm</p>
              </div>
  
              <div class="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/design.svg"
                    alt="person"
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover'}} 
                    className="w-full h-40 object-cover rounded mb-4" 
                  />                  
                  <h2 class="text-xl font-semibold text-black">Estimatic</h2>
                  <p class="text-gray-600">Technology Used: ReactJS, MaterialUI, Redux, Firebase</p>
              </div>
 

          </div>
       </div>
      )}
    </div>
    </section>
  );
}

export default MyForm;
