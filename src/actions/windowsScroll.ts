
export const ScrollFunction = ()=>{
    const handlScroll = ()=>{
        let nav:boolean = false
        if(window.scrollY > 40){
            return nav = true
            
        }else{
            return nav = false
        }
    }
    
    
    window.addEventListener('scroll',handlScroll)
    
    return 
        window.removeEventListener('scroll',handlScroll)

}

