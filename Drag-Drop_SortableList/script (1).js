const items = document.querySelectorAll(".item");
const sortableList = document.querySelector(".sortable-list");

items.forEach(item => {
  item.addEventListener("dragstart", () => {
    //დრაგ კლასს დილეის ამატებს
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  //აცილებს დრაგის ელემნტებს
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList  = function(e){
  const draggingItem = sortableList.querySelector(".dragging");
  //იღებს ყველა იმ ელემენტს იმის გარად რომელიც გიკავია და იმათგან არრაის აკეთებს;
  const sibling = [...document.querySelectorAll(".item:not(.dragging)")];

  //პოულობს იმ ელემნტს, რომელიც უნდა ჩაანაცვლოს ხელში მჭერი;
  let nextSibling = sibling.find(sibling => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });
  //ანაცვლეს ნაპოვნ ადგილას მყოფ ელემნტს თავისი თავით;
  sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
