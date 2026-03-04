//data load

const loadLessons=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res)=>res.json())
    //data namok property te array of object ase
    .then((json)=>displayLessons(json.data));
}

const loadLevelWord=(id)=>{
    console.log(id);
    const url=`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>displayLevelWord(data.data));
} 
const displayLevelWord=(words)=>{
    const wordContainer=document.getElementById('word-container')
    wordContainer.innerHTML='';
    for(const word of words){
    console.log(word);
    const card=document.createElement('div');
    card.innerHTML=`
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4 ">
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class=font-semibold>Meaning/pronounciation</p>
        <div class="text-2xl font-medium font-bangla">${word.meaning}/ ${word.pronounciation}</div>
        <div class="flex justify-between items-center">
          <button class="btn bg-gray-200 hover:bg-gray-600"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-gray-200 hover:bg-gray-600"><i class="fa-solid fa-volume-high"></i></button>
        </div>
      </div>
    `
    wordContainer.append(card);
    }
}
const displayLessons=(lessons)=>{
 //1.get the container & empty
 const levelContainer=document.getElementById('level-container');
 levelContainer.innerHTML='';
 //2.get into every lesson
 for(let lesson of lessons){
    //console.log(lesson)
//3.create element
const btnDiv=document.createElement('div');
btnDiv.innerHTML=`
<button onClick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
<i class="fa-solid fa-book-open-reader"></i> Lesson-${lesson.level_no}</button>
`
 //4.append into container
 levelContainer.append(btnDiv)
 }
 
}
loadLessons();