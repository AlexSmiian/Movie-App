
import { getAttributes } from "./getMovieUrlFromSelect";



// choice of film genre and year of release
export default function selectOptionItem(selectItem, selectText) {
	
	selectItem.forEach(elelementSelect => {
		elelementSelect.addEventListener('click', () => {
			selectText.innerHTML = `${elelementSelect.innerHTML}`
			getAttributes(elelementSelect)
		}, false);
		
	});
}
