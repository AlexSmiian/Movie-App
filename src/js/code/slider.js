export function slider (){
	const btnPrev = document.querySelector('[data-arrow__prev]')
	const btnNext = document.querySelector('[data-arrow__next]')
	const sliderList = document.querySelector('[data-slider__list]')
	const width = 104


	btnNext.addEventListener('click', sliderNext,false)
	btnPrev.addEventListener('click',sliderPrev,false)


	function sliderNext() {
		console.log(btnNext)
		const currentLeft = parseInt(sliderList.style.left) || 0
		const nextLeft = currentLeft - width

		sliderList.style.left = `${nextLeft}vh`

	}


	function sliderPrev() {
		console.log(btnNext)
		const currentLeft = parseInt(sliderList.style.left) || 0
		const nextLeft = currentLeft + width

		sliderList.style.left = `${nextLeft}vh`

	}
}