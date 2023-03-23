let listDOM = document.querySelector('.list-items');
// let categoryDOM = document.getElementById('tasks');

document.addEventListener("DOMContentLoaded", () => {
    const toDoList = init()
    renderCategoryList(toDoList);
});

function init() {
    let toDoList = {};
    let defaultToDoList = {
        personal: {
            housework: [{ title: "Cleaning", details: "Dish Cleaning", date: "", done: false },{ title: "Washing", details: "Cloths Washing", date: "", done: false }],
            skincare: [{ title: "Deep Exfoliation", details: "", date:"", done: false }],
            grocery: [{ title: "Cooking Oil", details: "15 Ltr", date:"", done: false },{ title: "Onion", details: "5 Kg", date:"", done: false }],
            meta: {
                display_title: "Personal",
                icon: `<span class="material-symbols-outlined personal">personal_injury</span>`,
                color: "orange"
            }
        },
        work: {
            programme: [{ title: "IHIP Status", details: "Monthly Status of IHIP", date: "", done: false },
            { title: "Prepare SOE", details: "Prepare NVBDCP SOE", date: "", done: false }],
            other: [{ title: "Reports", details: "Prepare NHM Reports", date: "", done: false },
            { title: "Vidhan Sabha", details: "Reply of VSQ", date: "", done: false }],
            meta: {
                display_title: "Work",
                icon: `<span class="material-symbols-outlined work"> work </span>`,
                color: "red"
            }
        },
        study: {
            lecture: [{ title: "Java Script", details: "Complete Will Sentance Lecture", date: "", done: false }],
            code: [{ title: "Java Script", details: "Complete Will Sentance Lecture Code", date: "", done: false }],
            meta: {
                display_title: "Study",
                icon: `<span class="material-symbols-outlined lecture">play_lesson</span>`,
                color: "aqua"
            }
        }
    };
    if (!localStorage.getItem(['toDoList'])) {
        localStorage.setItem('toDoList', JSON.stringify(defaultToDoList));
        toDoList = { ...defaultToDoList };
    } else {
        toDoList = JSON.parse(localStorage.getItem('toDoList'));
    }
    return toDoList;
}

function renderCategoryList(categoryList) {
    // let categoryListDOM = "";
    let fragment = document.createDocumentFragment();
    for (let category in categoryList) {
        let listItem = document.createElement('div');
        listItem.classList.add('options');
        listItem.innerHTML = `${categoryList[category].meta.icon}${categoryList[category].meta.display_title}`
        fragment.appendChild(listItem);
        // categoryListDOM += `<div class="options">${categoryList[category].meta.icon}${categoryList[category].meta.display_title}</div>`;
    }
    // listDOM.innerHTML = categoryListDOM;
    listDOM.appendChild(fragment);
    
    
    let listItemsDOM = listDOM.querySelectorAll('.options');
    listItemsDOM.forEach(item => {
        item.addEventListener('click', function (e) {
            let text = e.currentTarget.innerText.split("\n");
            text = text[text.length - 1].trim();
            text = text.toLowerCase();
            const {[text] : currentCategoryList} = init();
            for(let listItem in currentCategoryList){
                console.log(listItem,currentCategoryList[listItem]);
            }
        });
    })
}

