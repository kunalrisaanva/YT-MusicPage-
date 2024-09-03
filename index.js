let arr = [
  {
    songName: "StarBoy",
    url: "./songs/Starboy (Speed Up Reverb)-(PagalSongs.Com.IN).mp3",
    img: "./images/b1fb9792-56c2-4352-85df-0f24839f57bd.jpeg",
  },
  {
    songName: "Pahle bhi main",
    url: "./songs/Pehle Bhi Main - Animal 128 Kbps.mp3",
    img: "./images/4.jpeg",
  },
  {
    songName: "After Hour",
    url: "./songs/The_Weeknd_-_After_Hours.mp3",
    img: "./images/afterHour2.jpeg",
  },
  {
    songName: "Pride",
    url: "./songs/Y2meta.app - ",
    img: "https://i.pinimg.com/474x/9b/10/c3/9b10c312d07ff9a97683029fbfb8b987.jpg",
  },
];


const audio = new Audio();
let selectedSong = 0;


let poster = document.querySelector("#left");
let play = document.querySelector("#play");
let forward = document.querySelector("#forward");
let backward = document.querySelector("#backward");


function mainFuntion() {
  let clutter = "";

  arr.forEach((data, index) => {
    // console.log(data);
    clutter += `
        
       
        <div id="${index}" class="song-left flex content-center items-center px-3 py-3 lg:py-3  justify-between lg:hover:bg-sky-900">
            
         <div class="flex content-center items-center " >
            <img class="img h-[62px]  w-13 overflow-hidden justify-around "
            src="${data.img}"
            alt="song poster">
            <h3 class=" song-name text-white text-1xl font-normal  whitespace-nowrap pl-5 "> ${data.songName} </h3> 
            </div>
            <span class="text-white "> 3.3 </span>
        </div>

        <div class="border-t border-gray-600 "></div> 

      
        
        `;

    document.querySelector("#all-song").innerHTML = clutter;


    audio.src = arr[selectedSong].url
    console.log(arr[selectedSong].img);

   poster.style.backgroundImage = `url(${arr[selectedSong].img})`

    
  });
}

mainFuntion();

document.querySelector("#all-song").addEventListener("click", function (val) {
  const id = val.target.id;
  const int = Number(id);

  audio.src = arr[int].url
  selectedSong = int;

  mainFuntion();
  play.innerHTML = ` <i class="fa-solid fa-pause"></i> `;

  audio.play();
});

var flag = 0;


play.addEventListener("click", function (val) {
  if (flag === 0) {
    play.innerHTML = ` <i class="fa-solid fa-pause"></i>`;
    mainFuntion();
    audio.play();
    flag = 1;
  } else if ( flag ===1){
    play.innerHTML = ` <i class="fa-solid fa-play"></i>`;
    mainFuntion();
    audio.pause();
    flag = 0;
  }
});


forward.addEventListener("click", function (val) {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFuntion();
    audio.play();
  }
});


backward.addEventListener("click", function (val) {
  if (selectedSong > 0) {
    selectedSong--;
    mainFuntion();
    audio.play();
  }
});
