"use client"

import About from "./components/About";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { AuthProvider } from '../context/AuthContext'






export default function Home() {
  return (

    <AuthProvider>
    
<Navbar/>
<About/>
<Services/>
<Contacts/>


    </AuthProvider>
  );
}
