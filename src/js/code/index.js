
import {clickTitleSlider} from './clickTitleSlider'
import {slider} from './slider'
import { getReqPageOne} from './showNewMovie'

export function startApp () {

  document.addEventListener('DOMContentLoaded',()=>{

    // 
    getReqPageOne()
   




      // Switching pages within the 'New' section: Movies, TV shows, Cartoons, Anime.
clickTitleSlider()


// Slider

slider()
    
})
}




