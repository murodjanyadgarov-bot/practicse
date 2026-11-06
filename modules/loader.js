// function loader(loaderSelector) { 
// 	const loaderWrapper = document.querySelector(loaderSelector)

// 	setTimeout(() => {
// 		loaderWrapper.style.display = 'none'
// 	}, 1500)
// }

//  export default loader

function loader(loaderSelector) {
    const loaderWrapper = document.querySelector(loaderSelector);

    if (!loaderWrapper) {
        console.error(`Loader elementi topilmadi: ${loaderSelector}`);
        return;
    }

    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 1500);
}

export default loader;
 


