import { NextFont } from "next/dist/compiled/@next/font";
import { Roboto,Tajawal, Amiri, Cairo, Poppins } from "next/font/google";


export const roboto=Roboto({
    weight:[ "100" , "300" , "400" , "500" , "700" , "900"  ],
    subsets:["latin"],
    

})
export const poppins=Poppins({
    weight:[ "100" , "300" , "400" , "500" , "700" , "900"  ],
    subsets:["latin"],
    display:"swap"
    

})
export const tajawal =Tajawal({
    weight:[  "500" , "700" , "900"  ],
    subsets:["arabic"],
    
    
})
export const amiri =Amiri({
    weight:[  "400", "700"  ],
    subsets:["arabic"],
    
    
})
export const cairo=Cairo({
    weight:[   "300" , "400" , "500" , "700" , "900"  ],
    subsets:["arabic"],
    
})

export const tajawalFont = tajawal.className 
export const amiriFont = amiri.className 


