




// choice of film genre and year of release
export default function selectOptionItem(selectItem, selectText) {
	selectItem.forEach(el => {
		el.addEventListener('click', () => {
			selectText.innerHTML = `${el.innerHTML}`
		}, false);
	});
}



