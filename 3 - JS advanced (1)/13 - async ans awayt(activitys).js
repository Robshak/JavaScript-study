'use strict';

const MY_URL = 'https://www.boredapi.com/api/activity';

async function getActivity(){
    try{
    const response = await fetch(MY_URL);
    const activity = await response.json();
    return activity;
    }catch(e){
        console.log('top here');
    }
}

async function getAllActivities(count){
    try{
    const activitys = [];
    for(let i = 0; i < count; i++){
        activitys.push(getActivity());
    }
    const response = (await Promise.all(
        activitys
    ));

    const result = [];
    for(const element of response){
        result.push(element.activity);
    }

    return result;
    }catch(e){
        console.log('HERE');
    }
}

async function makeActivitys(count = 3){
    const activitys = await getAllActivities(count);
    if(!activitys){
        return;
    }
    const element = document.querySelector('.activitys');
    element.innerHTML = `<ul>
                        ${activitys.map(activity => `<li>${activity}</li>`).join('')}
                        </ul>`;
}