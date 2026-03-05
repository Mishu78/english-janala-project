//data load

const loadLessons=()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res)=>res.json())
    //data namok property te array of object ase
    .then((json)=>displayLessons(json.data));
}

const removeActive=()=>{
    const lessonButtons=document.querySelectorAll('.lesson-btn')
    //console.log(lessonButtons)
    lessonButtons.forEach((btn)=> btn.classList.remove('active'));
};
const loadLevelWord=(id)=>{
    console.log(id);
    const url=`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        removeActive();//remove all active class
        const clickBtn=document.getElementById(`lesson-btn-${id}`)
       // console.log(clickBtn);
       clickBtn.classList.add('active');//add active class
        displayLevelWord(data.data)
    });
} 
const displayLevelWord=(words)=>{
    const wordContainer=document.getElementById('word-container')
    wordContainer.innerHTML='';

    if(words.length == 0){
        wordContainer.innerHTML=`
        <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
        <img class="mx-auto" src='./assets/alert-error.png'/>
        <p class="text-xl font-medium text-gray-600">এই lesson এ এখন কোনো vocabulary যুক্ত করা হয় নি </p>
        <p class="font-bold text-4xl">next lesson এ যান</p>
      </div>
        `;
        return;
    }
    for(const word of words){
    console.log(word);
    const card=document.createElement('div');
    card.innerHTML=`
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4 ">
        <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
        <p class=font-semibold>Meaning/pronounciation</p>
        <div class="text-2xl font-medium font-bangla">${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায়নি"}</div>
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
<button id="lesson-btn-${lesson.level_no}" onClick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
<i class="fa-solid fa-book-open-reader"></i> Lesson-${lesson.level_no}</button>
`
 //4.append into container
 levelContainer.append(btnDiv)
 }
 
}
loadLessons();