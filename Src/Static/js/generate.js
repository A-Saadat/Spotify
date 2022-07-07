const listInfo =[
    {title: "liked Songs", src: "./Static/Img/LikedSong.PNG", state: "pause"},
    {title: "My Fav Classical", src: "./Static/Img/MyFavClassical.jpg", state: "pause"},
    {title: "Francisco Tárrega Mix", src: "./Static/Img/Frans-Mix.jpg", state: "pause"},

    {title: "Mercury - Acts 1 & 2", src: "./Static/Img/Mercury.jpg", state: "pause"},
    {title: "Chill Hits", src: "./Static/Img/ChillHit.jpg", state: "pause"},
    {title: "Rapfa", src: "./Static/Img/RapFa.jpg", state: "pause"},
]


function generateLibraryPreview(infoArr, contaienr){
    contaienr.innerHTML = "";
    infoArr.forEach(infoObj => {
        let { title, src } = infoObj;
        contaienr.insertAdjacentHTML('beforeend', `
        <div class="__library-preview-item__ flex items-center rounded bg-itemBG hover:bg-itemBGHover transition-all duration-150 w-full pr-4 justify-between">
            <div class="flex items-center gap-4">
                <div class="w-20 h-20">
                    <img src="${src}" class="w-full h-full object-cover rounded" alt="${title}">
                </div>
                <h1 class="font-semibold text-primetyWhite">${title}</h1>
            </div>
            <div class="__item-play-btn__ transition-opacity duration-200 bg-primetyGreen invisible opacity-0 w-fit p-3 rounded-full shadow-md shadow-primetyBlack cursor-pointer">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 EQkJl">
                    <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
            </div>
        </div>
        ` )
    })
}
export { generateLibraryPreview , listInfo }