
import selectOptionItem from './selectOptionItem'

const list = document.querySelectorAll('[data-form-genre]')

// determining where the list was clicked
export function showSelect() {
  list.forEach((el) => {
    el.addEventListener('click', openSelectOption, false);
  });

}

// List opening
function openSelectOption() {

  const selectItem = [...this.children[1].children]

  const selectSpan = this.firstElementChild

  const listItem = this.lastElementChild;
  const isOpen = listItem.style.display === 'flex';

  // Скрываем все элементы списка
  list.forEach((el) => {
    const elListItem = el.lastElementChild;
    elListItem.style.display = 'none';
    el.style.border = '3px solid rgb(243, 206, 206)';
  });

  if (!isOpen) {


    listItem.style.display = 'flex';
    this.style.border = '3px solid rgba(0, 0, 0, 1)';
    selectOptionItem(selectItem, selectSpan)
  }

}


