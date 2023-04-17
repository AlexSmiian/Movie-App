
const apiKey = '8da019a71832aabe3ef8418eef9ed673';
const url1 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
const url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=2`;


let resultDataPage = [];


export async function getReqPageOne() {
	try{
			const responsePageOne = await fetch(url1)
			const dataPageOne = await responsePageOne.json()

			const responsePageTwo = await fetch(url2)
			const dataPageTwo = await responsePageTwo.json()

			resultDataPage = resultDataPage.concat(dataPageOne.results,dataPageTwo.results)

			resultDataPage.splice(27)

			showNewMovie(resultDataPage)

			}catch(error){
		console.error('Error!',error)
	}
}

function showNewMovie(data) {

	const sliderList = document.querySelector('[data-slider__list]')
	data.forEach((el) => {

		const imageUrl = `https://image.tmdb.org/t/p/w500${el.poster_path}`
		const title = el.title
		const date = el.release_date


		const card = document.createElement('div')
		card.classList.add('slider__card')
		card.innerHTML = 
			`
		<div class="slider__card__content">
						<a  href="#">
							<img class="card__content__img"  src="${imageUrl}" alt="">
						</a>
					</div>
					<div class="slider__card__text">
						<a  class="movie__title"  href="#">
							${title}
						</a>
						<div class="card__text_info">
							<span class="info_date">${date}</span>,<span class="info__country">USA</span>, <br>
							<span class="info__genre">Adventures</span>
						</div>
					</div>
		`;
		const movieTitle = card.querySelector('.movie__title');
    // movieTitle.style.fontSize = '12px';
		// movieTitle.style.color = '#4682B4'


		const cardTextInfo = card.querySelector('.card__text_info');
    cardTextInfo.style.fontSize = '12px'; 

		sliderList.appendChild(card)

	})


}
