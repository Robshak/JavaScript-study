'use strict';

let habits = [];
const HABIT_KEY = 'HABIT_KEY'
let globalActiveHabitId = 1;

/* page */

const page = {
    menu: document.querySelector('.sidePanel__list'),
    header: {
        h1: document.querySelector('.mainPage__name'),
        progressStatus: document.querySelector('.progressBlock__status'),
        progressCoverBar: document.querySelector('.progressBlock__progresscover-bar')
    },
    comments: {
        commentsArray: document.querySelector('.mainPage__commentsList'),
        commentForm: document.querySelector('.commentForm'),
        nextDay: document.querySelector('.commentForm__day'),
    },
    popup: {
        cover: document.querySelector('.cover-createHabit'),
        coverDel: document.querySelector('.cover-deleteHabit'),
        inputIcon: document.querySelector('.popup input[name="icon"]'),
    }
}

/* templates */


/* utils */

function loadData(){
    const habitsString = localStorage.getItem(HABIT_KEY);
    const habitArray = JSON.parse(habitsString);
    if(Array.isArray(habitArray)){
        habits = habitArray;
    }
}

function saveData(){
    localStorage.setItem(HABIT_KEY, JSON.stringify(habits));
}

function validateForm(form, fields){
    const formData = new FormData(form);
    const res = {

    };
    for(const field of fields){
        const fieldValue = formData.get(field);
        form[field].classList.remove('inputError');
        if(!fieldValue){
            form[field].classList.add('inputError');
        }
        res[field] = fieldValue;
    }
    let isValid = true;
    for(const field of fields){
        if(!res[field]){
            isValid = false;
        }
    }
    if(!isValid){
        return;
    }
    return res;
}

function resetForm(form, fields){
    for(const field of fields){
        form[field].value = '';
    }
}

/* render */

function rerenderMenu(activeHabit){
    for(const habit of habits){
        const existed = document.querySelector(`[menu-habit-id="${habit.id}"]`);
        if(!existed){
            const element = document.createElement('button');
            element.setAttribute('menu-habit-id', habit.id);
            element.classList.add('simpleButton', 'sidePanel__element');
            element.addEventListener('click', () => rerender(habit.id));
            element.innerHTML = `<img src="./imgs/icon/${habit.icon}.svg" alt="${habit.name}">`;
            if(activeHabit.id === habit.id){
                element.classList.add('button_active');
            }
            page.menu.appendChild(element);

            continue;
        }
        if(activeHabit.id === habit.id){
            existed.classList.add('button_active');
        }
        else{
            existed.classList.remove('button_active');
        }
    }
}

function rerenderHead(activeHabit){
    page.header.h1.innerHTML = activeHabit.name;
    let progress = Math.round((activeHabit.days.length) * 100 / Number(activeHabit.target));
    progress = Math.min(progress, 100);
    page.header.progressStatus.innerHTML = `${progress}%`;
    page.header.progressCoverBar.style.width = `${progress}%`;
}

function rerenderComments(activeHabit, activeComment = -1){
    let activeCommentText;
    if(activeHabit === globalActiveHabitId){
        activeHabit = habits.find(habit => habit.id === activeHabit);
        activeCommentText = document.querySelector(`[comment-id="${activeComment}"] .content__text`).innerText;
    }
    page.comments.commentsArray.innerHTML = '';
    for(let i = 0; i < activeHabit.days.length; i++){
        const comment = document.createElement('div');
        comment.classList.add('body__element');
        if(i === activeComment){
            const day = activeHabit.days[i];
            comment.innerHTML = `<div class="element__day">Day ${i + 1}</div>
                                 <form class="element__content element__content_active" onsubmit="reworkDay(event, ${i})">
                                    <label for="rework">
                                        <img src="./imgs/icon/comment.svg" alt="">
                                    </label>
                                    <input name="rework" type="text" placeholder="Comment" class="input" id="rework" value="${activeCommentText}">
                                    <button class="simpleButton content__button_make" type="submit">Done</button>
                                 </form>`;
        }
        else{
            const day = activeHabit.days[i];
            comment.innerHTML = `<div class="element__day">Day ${i + 1}</div>
                                 <div class="element__content element__content_passive" comment-id="${i}">
                                     <div class="content__text">${day.comment}</div>
                                     <button class="simpleButton content__button" onclick="rerenderComments(${globalActiveHabitId}, ${i})"><img src="./imgs/icon/pencil.png" alt="" class="reworkIcon"></button>  
                                     <button class="simpleButton content__button" onclick="deleteDay(${i})"><img src="./imgs/icon/delete.svg" alt=""></button>
                                 </div>`;
        }
        page.comments.commentsArray.appendChild(comment);
    }    
    page.comments.nextDay.innerHTML = `Day ${activeHabit.days.length + 1}`;
    document.querySelector('#comment').classList.remove('inputError');
}

function rerender(activeHabitId){
    console.log(habits);
    if(habits.length === 0){
        document.querySelector('.mainPage').classList.add('cover_hidden');
        document.querySelector('.mainPage_alt').classList.remove('cover_hidden');
        return;
    }
    document.querySelector('.mainPage').classList.remove('cover_hidden');
    document.querySelector('.mainPage_alt').classList.add('cover_hidden');
    
    if(!activeHabitId){
        activeHabitId = habits[0].id;
    }
    globalActiveHabitId = activeHabitId;
    const activeHabit = habits.find(habit => habit.id === activeHabitId);
    if(!activeHabit){
        return;
    }
    document.location.replace(document.location.pathname + '#' + globalActiveHabitId);
    rerenderMenu(activeHabit);
    rerenderHead(activeHabit);
    rerenderComments(activeHabit);
}

/* work with days */

function addDay(event){
    event.preventDefault();
    const data = validateForm(event.target, ['comment']);
    if(!data){
        return;
    }

    habits = habits.map((habit) => {
        if(habit.id == globalActiveHabitId){
            habit.days.push({comment: data.comment});
        }
        return habit;
    });
    resetForm(event.target, ['comment']);
    rerender(globalActiveHabitId);
    saveData();
}

function deleteDay(commentId){
    habits[globalActiveHabitId - 1].days.splice(commentId, 1);
    rerender(globalActiveHabitId);
    saveData();
}

function reworkDay(event, commentId){
    event.preventDefault();
    const data = validateForm(event.target, ['rework']);
    if(!data){
        return;
    }

    habits[globalActiveHabitId - 1].days[commentId].comment = data.rework;
    rerender(globalActiveHabitId);
    saveData();
}

/* work with popup */

function togglePopupHabit(){
    page.popup.cover.classList.toggle('cover_hidden');
    document.querySelector('#habitName').classList.remove('inputError');
    document.querySelector('#goal').classList.remove('inputError');
    document.querySelector('#habitName').value = '';
    document.querySelector('#goal').value = '';
    for(const child of page.popup.cover.querySelector('.popup__icons').children){
        child.classList.remove('button_active');
    }
    page.popup.cover.querySelector('.popup__icons').children[0].classList.add('button_active');
}

function togglePopupDel(){
    page.popup.coverDel.classList.toggle('cover_hidden');
}

function setIcon(context, icon){
    page.popup.inputIcon.value = icon;
    const activeIcon = document.querySelector('.popup .button_active');
    activeIcon.classList.remove('button_active');
    context.classList.add('button_active');
}

function createHabit(event){
    event.preventDefault();
    const data = validateForm(event.target, ['icon', 'habitName', 'goal']);
    if(!data){
        return;
    }

    const nextHabitId = habits.reduce((acc, habit) => acc > habit.id ? acc : habit.id, 0) + 1;

    togglePopupHabit();
    habits.push({
        "id": nextHabitId,
        "icon": data.icon,
        "name": data.habitName,
        "target": Number(data.goal),
        "days": []
    });
    rerender(habits.length);
    saveData();
}

/* work with habbit */

function delHabit(){
    habits = habits.filter((habit) => {
        return !(habit.id === globalActiveHabitId);
    });
    togglePopupDel();
    document.querySelector(`[menu-habit-id="${globalActiveHabitId}"]`).remove();
    rerender();
    saveData();
}

/* init */
(()=>{
    loadData();
    let urlHabitId;
    if(habits.length){
        const hashId = Number(document.location.hash.replace('#', ''));
        urlHabitId = habits.find((habit) => habit.id == hashId).id;
        if(!urlHabitId){
            urlHabitId = habits[0].id;
        }
    }
    rerender(urlHabitId);
})()