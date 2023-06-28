
import {clickTitleSlider} from './clickTitleSlider'
import {slider} from './slider'
import { getReqPageOne} from './showNewMovie'
import {showSelect} from './listeren'
export function startApp () {

  document.addEventListener('DOMContentLoaded',()=>{

    // 
    getReqPageOne()
  
    
    // 
    showSelect();


      // Switching pages within the 'New' section: Movies, TV shows, Cartoons, Anime.
clickTitleSlider()


// Slider

slider()
    
})
}




