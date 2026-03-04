//data load

const loadLessons=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res)=>res.json())
    //data namok property te array of object ase
    .then((json)=>displayLessons(json.data));
}

const displayLessons=(lessons)=>{
 //1.get the container & empty
 const levelContainer=document.getElementById('level-container');
 levelContainer.innerText='';
 //2.get into every lesson
 for(let lesson of lessons){
    console.log(lesson)
//3.create element
const btnDiv=document.createElement('div');
btnDiv.innerHTML=`
<button class="btn btn-outline btn-primary">
<i class="fa-solid fa-book-open-reader"></i> Lesson-${lesson.level_no}</button>
`
 //4.append into container
 levelContainer.append(btnDiv)
 }
 
}
loadLessons();