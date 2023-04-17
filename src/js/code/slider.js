



export function slider (){
	
	
		
	const btnPrev = document.querySelector('[data-arrow__prev]')
	const btnNext = document.querySelector('[data-arrow__next]')
	const sliderList = document.querySelector('[data-slider__list]')
	const [...sliderItem] = document.querySelectorAll('.slider__item')
	
	const width = 945
	const counterItem = 7;
	const counterAllItem = 21
	const lastPage = counterAllItem / counterItem


	let count = 0;
  let counterBtnNext = 0

	sliderList.style.left = '0px';

	btnNext.addEventListener('click', sliderNext,false)
	btnPrev.addEventListener('click',sliderPrev,false)


	function sliderNext() {

				count++ 
				counterBtnNext++

				if(count > lastPage){
				
					sliderList.style.left = `0`
					count = 0
				}else{
					const currentLeft = parseInt(sliderList.style.left) || 0
					const nextLeft = currentLeft - width
			
					sliderList.style.left = `${nextLeft}px`	
				}
			
	}


	function sliderPrev() {

			if(count !== 0){
				const currentLeft = parseInt(sliderList.style.left) || 0
				const nextLeft = currentLeft + width
		
				sliderList.style.left = `${nextLeft}px`
				count--
			}

	}
}