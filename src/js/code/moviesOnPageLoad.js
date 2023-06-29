// 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'

export async function getMovies() {

	const totalMovies = 100
	const moviesPage = 20;
	const totalPage = Math.ceil(totalMovies / moviesPage)
	let data = [];


	try {
		for (let page = 1; page <= totalPage; page++) {
			const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGEwMTlhNzE4MzJhYWJlM2VmODQxOGVlZjllZDY3MyIsInN1YiI6IjY0MzU0N2Q2MDZmOTg0MDExMDhhZjk1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_3IWbIb4EanMw0k13KJNMlHsXRQs1UOQwEDHDHnBCw'
				}
			});

			const newData = await response.json();
			data = data.concat(newData.results);

		}

		moviesOnPageLoad(data)
	} catch (error) {
		console.error('Error!', error);
	}


}


export function moviesOnPageLoad(data) {
	const cardWrapper = document.querySelector('[data-movie-wrapper]')
	debugger
	if(data !== undefined){
		data.map(item =>{
			const poster = `https://image.tmdb.org/t/p/w500${item.poster_path}`
			const nameMovie = item.original_title
			const realeaseDate = item.release_date




			cardWrapper.insertAdjacentHTML('beforeend',
			`<div class="card__movie">
					<div class="card__movie__content">
						<a href="">
							<img src="${poster}" alt="">
						</a>
						<span class="card__movie__content--genre">
							<i class="entity">Фільм</i>
							<i class="icon">	<svg width="21px" height="16px" viewbox="0 0 21 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="Film" transform="translate(-1435.000000, -1012.000000)" fill="#FFFFFF" fill-rule="nonzero">
										<g id="film" transform="translate(1435.000000, 1012.000000)">
											<path d="M12.2747286,5.40989143 L2.30151161,5.40989143 C1.05211959,5.40989143 0.0219191582,6.4181727 0.0219191582,7.68948388 L0.0219191582,13.6734141 C0.0219191582,14.9228061 1.03020043,15.9530065 2.30151161,15.9530065 L12.2747286,15.9530065 C13.5241206,15.9530065 14.554321,14.9447252 14.554321,13.6734141 L14.554321,7.66756472 C14.554321,6.4181727 13.5241206,5.40989143 12.2747286,5.40989143 Z" id="Path"></path>
											<path d="M20.0341106,7.29493903 L16.0667429,8.69776515 L16.0667429,12.6651328 L20.0341106,14.0679589 C20.4286554,14.1994739 20.8451194,13.9145248 20.8451194,13.4980608 L20.8451194,7.86483714 C20.8451194,7.42645398 20.4286554,7.14150492 20.0341106,7.29493903 Z" id="Path1"></path>
											<circle id="Oval1" cx="4.75645732" cy="2.45080508" r="1.95080508"></circle>
											<circle id="Oval2" cx="9.7978637" cy="2.45080508" r="1.95080508"></circle>
										</g>
									</g>
								</g>
							</svg></i>
						
							
						</span>
					</div>
					<div class="card__movie__info">
						<a class="card__movie__info--link" href="">${nameMovie}</a>
						<div>${realeaseDate}</div>
					</div>
				</div>
			`
			)
		})

	}

}

/*
adult: false
backdrop_path: "/e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg"
genre_ids: (3) [28, 80, 53]
id: 385687
original_language: "en"
original_title: "Fast X"
overview: 
"Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever."
popularity: 4052.245
poster_path:"/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
release_date: "2023-05-17"
title: "Fast X"
video: false
vote_average: 7.3
vote_count:2141

*/
/* 

	<div class="card__movie">
					<div class="card__movie__content">
						<a href="">
							<img src="../../images/fc6b233cafd2ezf50q61u.jpg" alt="">
						</a>
						<span class="card__movie__content--genre">
							<i class="entity">Фільм</i>
							<i class="icon">	<svg width="21px" height="16px" viewbox="0 0 21 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="Film" transform="translate(-1435.000000, -1012.000000)" fill="#FFFFFF" fill-rule="nonzero">
										<g id="film" transform="translate(1435.000000, 1012.000000)">
											<path d="M12.2747286,5.40989143 L2.30151161,5.40989143 C1.05211959,5.40989143 0.0219191582,6.4181727 0.0219191582,7.68948388 L0.0219191582,13.6734141 C0.0219191582,14.9228061 1.03020043,15.9530065 2.30151161,15.9530065 L12.2747286,15.9530065 C13.5241206,15.9530065 14.554321,14.9447252 14.554321,13.6734141 L14.554321,7.66756472 C14.554321,6.4181727 13.5241206,5.40989143 12.2747286,5.40989143 Z" id="Path"></path>
											<path d="M20.0341106,7.29493903 L16.0667429,8.69776515 L16.0667429,12.6651328 L20.0341106,14.0679589 C20.4286554,14.1994739 20.8451194,13.9145248 20.8451194,13.4980608 L20.8451194,7.86483714 C20.8451194,7.42645398 20.4286554,7.14150492 20.0341106,7.29493903 Z" id="Path1"></path>
											<circle id="Oval1" cx="4.75645732" cy="2.45080508" r="1.95080508"></circle>
											<circle id="Oval2" cx="9.7978637" cy="2.45080508" r="1.95080508"></circle>
										</g>
									</g>
								</g>
							</svg></i>
						
							
						</span>
					</div>
					<div class="card__movie__info">
						<a class="card__movie__info--link" href="">Том Папа: Ты отлично справляешься!</a>
						<div>2020, США, Стендап</div>
					</div>
				</div>

*/