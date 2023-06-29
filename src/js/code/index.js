
import { clickTitleSlider } from './clickTitleSlider'
import { slider } from './slider'
import { getReqPageOne } from './showNewMovie'
import { showSelect } from './listeren'
import { getMovies } from './moviesOnPageLoad'




export function startApp() {

  document.addEventListener('DOMContentLoaded', () => {
    // 
    getReqPageOne()

    // movies on page load
    getMovies()
    


    // 
    showSelect();


    // Switching pages within the 'New' section: Movies, TV shows, Cartoons, Anime.
    clickTitleSlider()


    // Slider

    slider()

  })
}




