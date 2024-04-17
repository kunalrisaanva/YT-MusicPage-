
let arr = [

    {
        songName:"Less then zero",url:"./songs/Y2meta.app - The Weeknd - Less Than Zero (Official Lyric Video) (128 kbps).mp3",img:"./images/3.jpeg"
    },
    {
        songName:"StarBoy",url:"./songs/Starboy (Speed Up Reverb)-(PagalSongs.Com.IN).mp3",img:"./images/_.jpeg"
    },
    {
        songName:"Pahle bhi main",url:"./songs/Pehle Bhi Main - Animal 128 Kbps.mp3",img:"./images/4.jpeg"
    },
    {
        songName:"After Hour",url:"./songs/The_Weeknd_-_After_Hours.mp3",img:"./images/afterHour2.jpeg"
    },


]


const audio = new Audio()
let selectedSong = 0;

let poster = document.querySelector("#left")
let play = document.querySelector("#play")
let forward = document.querySelector("#forward")
let backward = document.querySelector("#backward")

function mainFuntion (){
    let clutter = ""

    arr.forEach((data,index) => {
    clutter +=  `  


    <div id="${index} " class="song flex w-[33rem] content-center items-center py-3 px-2 hover:bg-sky-900 justify-between ">
            <div class="song-left flex content-center items-center">
                <img class="img h-[62px]  w-12 overflow-hidden object-cover "
                src="${data.img}"
                alt="song poster">
                <h3 class=" song-name text-white text-1xl font-normal pl-6 whitespace-nowrap "> ${data.songName} </h3>
            </div>
        <span class="text-white text-sm font-light    whitespace-nowrap  ">2:25</span>
    </div>


 <div class="border-t border-gray-600 w-[33rem] "></div> 

`
document.querySelector('#all-song').innerHTML = clutter

audio.src = arr[selectedSong].url
console.log(arr[selectedSong].img);

poster.style.backgroundImage = `url(${arr[selectedSong].img})`



})

}



mainFuntion()



document.querySelector('#all-song').addEventListener("click",function(val){
    const id = val.target.id
    const int = Number(id)
   
    // audio.src = arr[int].url
    selectedSong = int
   
    mainFuntion()
    play.innerHTML = `<i class="ri-pause-mini-line"></i>`
   
    audio.play()
})


var flag = 0

play.addEventListener("click",function(val){
    if(flag === 0 ){
        play.innerHTML = `<i class="ri-pause-mini-line"></i>`
        mainFuntion()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-mini-line"></i>`
        mainFuntion()
        audio.paplayuse()
        flag = 0
    }
})


forward.addEventListener("click",function(val){
    if(selectedSong < arr.length -1){
        selectedSong++
        mainFuntion()
        audio.play()

    }
})


backward.addEventListener("click",function(val){
    if(selectedSong > 0){
        selectedSong--
        mainFuntion()
        audio.play()

    }
})