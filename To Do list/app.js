let listDOM = document.querySelector('.list-items');

document.addEventListener("DOMContentLoaded", () => {
    const toDoList = init()
    renderCategoryList(toDoList);
});

function init() {
    let toDoList = {};
    let defaultToDoList = {
        personal: {
            housework: [{title:"Grocery",details:"",date:"",done:false}],
            skincare: [{title:"Deep Exfoliation",details:"",done:false}],
            meta: {
                display_title: "Personal",
                icon: `<span class="material-symbols-outlined personal">personal_injury</span>`,
                color: "orange"
            }
        },
        work: {
            programme: [{title:"IHIP Status",details:"Monthly Status of IHIP",date:"",done:false},{title:"Prepare SOE",details:"Pre",date:"",done:false}"","Google Sheet"],
            other: ["NHM Reports","Reply of VSQ"],
            meta: {
                display_title : "Work",
                icon : `<span class="material-symbols-outlined work"> work </span>`,
                color: "red"
            }
        },
        study: {
            lecture: ["Will Sentance","Kyle Sympson"],
            code : ["CSS", "Java Script"],
            meta:{
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

function renderCategoryList(categoryList){
    let categoryListDOM = "";
    for(let category in categoryList){
        categoryListDOM += `<div class="options">${categoryList[category].meta.icon}${categoryList[category].meta.display_title}</div>`;
    }
    listDOM.innerHTML = categoryListDOM;
}
