function generateLibraryPreview(infoArr, container){
    container.innerHTML = "";
    infoArr.forEach(infoObj => {
        let { title, src } = infoObj;
        container.insertAdjacentHTML('beforeend', `
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

function generateRecommendation(infoArr, container){
    container.innerHTML = "";
    infoArr.forEach(infoObj => {
        let { title, src } = infoObj;
        container.insertAdjacentHTML('beforeend', `
        <div class="__MIX-ITEM__ w-full p-5 bg-[#171717] hover:bg-[#262626] rounded-lg">
            <div class="relative">
                <img src="${src}" alt="${title}-Mix" class="w-full mb-5 rounded-lg">
                <div class="__item-play-btn__ invisible opacity-0 translate-y-10 absolute right-0 bottom-0 m-4 transition-all duration-300 bg-primetyGreen w-fit p-3 rounded-full shadow-md shadow-primetyBlack cursor-pointer">
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 EQkJl">
                        <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                    </svg>
                </div>
            </div>
            <h3 class="text-primetyWhite">${title}</h3>
            <p class="text-customLightGray text-sm truncate">
                <a href="#">Elizabeth Joy Roe,</a>
                <a href="#">Lady Gaga,</a>
                <a href="#">Celil Refik Keya and more</a>
            </p>
        </div>
        `)
    })
}


export { generateLibraryPreview , generateRecommendation }