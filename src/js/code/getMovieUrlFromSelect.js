import sendMovieUrlToServer from "./sendMovieUrlToServer"

const button = document.querySelector('[data-select-attribute]')

export function getAttributes(atributeValue) {
	let dataPathUrl = []
	const all = 'all'
	let attributeGenre = atributeValue.getAttribute('data-genre')
	let attributeYears = atributeValue.getAttribute('data-years')




	button.addEventListener('click', setDataPathUrl, false)





	function setDataPathUrl() {
		if (attributeGenre == null) {
			attributeGenre = all
		}
		if (attributeYears == null) {
			attributeYears = all
		}
		dataPathUrl = [attributeGenre, attributeYears]
		sendMovieUrlToServer(dataPathUrl)
	}
}


