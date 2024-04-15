
let arr = [

    {
        songName:"Less then zero",url:"./songs/Y2meta.app - The Weeknd - Less Than Zero (Official Lyric Video) (128 kbps).mp3",img:"./images/dawn fm - the weekend.jpeg"
    },
    {
        songName:"StarBoy",url:"./songs/Y2meta.app - The Weeknd - Less Than Zero (Official Lyric Video) (128 kbps).mp3",img:"./images/_.jpeg"
    },
    {
        songName:"Pahle bhi main",url:"./songs/Y2meta.app - The Weeknd - Less Than Zero (Official Lyric Video) (128 kbps).mp3",img:"./images/Explore a captivating collection of high-definition animal movie wallpapers on Pinterest!.jpeg"
    },
    {
        songName:"After Hour",url:"./songs/Y2meta.app - The Weeknd - Less Than Zero (Official Lyric Video) (128 kbps).mp3",img:"./images/after hours - the weeknd poster.jpeg"
    },


]




// function mainFuntion (){
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
// console.log(data)
})

// }



// mainFuntion()/



document.querySelector('#all-song').innerHTML = clutter
// console.log(clutter)


const audio = new Audio()


document.querySelector('#all-song').addEventListener("click",function(val){
    const id = val.target.id
    const int = Number(id)
   
    audio.src = arr[int].url
   
    audio.play()
})




