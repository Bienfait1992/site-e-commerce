import React, { FunctionComponent } from "react";
import { useState } from "react";


export const SignUp: FunctionComponent= ()=>{
    const[email, setEmail ]= useState('');
    const [nom, setNom] = useState('');
    const [password, setPassword]= useState('');
    const [message, setMessage]= useState('');

    const handleSubmit = async (event)=>{
        event.preventDefault();

        try{
            const response = await fetch('/api/users',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email, nom, password}),
            });
            if (response.ok){
                setMessage('user creat successfully!');
                setEmail('');
                setNom('');
                setPassword('');
            }else{
                setMessage('echec de creation utilisateur');
            }
        } catch (error){
            setMessage('an error occurred');
        }
    };
    return(
        <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl mt-4 mb-4">
    <div className="flex flex-row gap-3 pb-4">
        <div>
            {/* <img src="/favicon.svg" width="50" alt="Logo"> */}
        </div>
         <h1 className="text-3xl font-bold text-[#4B5563] text-[#4B5563] my-auto">Your Company</h1>

    </div>
    <div className="text-sm font-light text-[#6B7280] pb-8 ">Sign up for an account on Your Company.</div>
    <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="pb-2">
            <label for="name" class="block mb-2 text-sm font-medium text-[#111827]">Name</label>
            <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span> 
                <input type="text" value={nom} onChange={(e)=> setNom(e.target.value)} id="nom"required className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="Your Name" autocomplete="off" />
                {/* <input type="text" namcccccccccccccccccccccccccccccccccccccccccccccccccccccccccce="name" id="name" class="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="Your Name" autocomplete="off"> */}
            </div>
        </div>
        <div className="pb-2">
            <label for="email" class="block mb-2 text-sm font-medium text-[#111827]">Email</label>
            <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span> 
               <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required id="email" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="name@company.com" autocomplete="off" />
                {/* <input type="email" name="email" id="email" class="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="name@company.com" autocomplete="off"> */}
            </div>
        </div>
        <div className="pb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-[#111827]">Password</label>
            <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-asterisk"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M12 8v8"></path><path d="m8.5 14 7-4"></path><path d="m8.5 10 7 4"></path></svg></span> 
                <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}  required id="password" placeholder="••••••••••" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autocomplete="new-password" />
                {/* <input type="password" name="password" id="password" placeholder="••••••••••" class="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autocomplete="new-password"> */}
            </div>
        </div>
        <button type="submit" className="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">S'inscrire</button>
        <div className="text-sm font-light text-[#6B7280] ">Already have an account? <a href="/connexion" className="font-medium text-[#4F46E5] hover:underline">Se connecter</a>

        </div>
    </form>
    {message && <p>{message}</p>}
    <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t border-[1px] border-gray-200"></div> <span className="flex-shrink mx-4 font-medium text-gray-500">OR</span> 
        <div className="flex-grow border-t border-[1px] border-gray-200"></div>
    </div>
    <form>
        <div className="flex flex-row gap-2 justify-center">
            <button className="flex flex-row w-32 gap-2 bg-gray-600 p-2 rounded-md text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg> <span class="font-medium mx-auto">Github</span>

            </button>
            <button class="flex flex-row w-32 gap-2 bg-gray-600 p-2 rounded-md text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg> <span class="font-medium mx-auto">Twitter</span>

            </button>
        </div>
    </form>
</div>


    )
}