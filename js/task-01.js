const categories = document.querySelector('#categories');
const item = categories.children;
const itemArray = Array.from(item);
console.log(`Number of categories: ${categories.children.length}`);

itemArray.forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
