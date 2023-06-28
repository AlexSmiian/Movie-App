
export function clickTitleSlider (){
	debugger
  const sliderTitle = document.querySelectorAll('.slider__title__link')
	sliderTitle.forEach((el)=>{
		el.addEventListener('click',()=>{
			sliderTitle.forEach((el)=>{
				el.classList.remove('slider__title__link__active')
			})
			el.classList.add('slider__title__link__active')
		})
	})
}






