const container = document.querySelector('.container');
const movieId = 3
const apiKey = '8da019a71832aabe3ef8418eef9ed673';
const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;


export async function getData (){

  	await	fetch(url)
			.then(response =>{
				if(response.ok){
					return response.json()
				}else{
					throw new Error(`Произошла ошибка: ${response.status} ${response.statusText}`)
				}
			})
			.then(movieData =>{
		
				data(movieData)
			})
			.catch(error =>{
				console.error("Error!")
			})
}



function data (count){
	 const text = document.querySelector('.container__text');

	 text.innerHTML = count
}