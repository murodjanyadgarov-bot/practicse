"use strict"

import loader from './modules/loader'
import tabs from './modules/tabs'
import timer from './modules/timer'
import modal, { openModal } from './modules/modal'
import classCard from './modules/class'
import forms from './modules/forms'
import slider from './modules/slider'

window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(
		() => openModal('.modal__content', '.modal', modalTimerId),
	50000
	)
     tabs('.tabheader__item', '.tab_content', '.tabheader__items');
	 loader('.loader-wrapper');
	 timer('2027-01-01', '.timer');
	 modal('[data-modal]', '.modal', '.modal__content', modalTimerId);
	 classCard('.offers-items');
	 forms('form', modalTimerId)
     slider() 

})

	// Tabs
 

	// Loader

	// Timer

	// Modal


	// Class

	
	// FORM



	// SLIDER 

// 	const slides = document.querySelectorAll(".offer__slide"),
// 	  prev = document.querySelector(".offer__slider-prev"),
// 	  next = document.querySelector(".offer__slider-next"),
// 	  total = document.querySelector("#total"),
// 	  current = document.querySelector("#current"),
// 	  slidesWrapper = document.querySelector(".offer__slider-wrapper"),
//       slidesInner = document.querySelector(".offer__slider-inner"),
// 	  width = window.getComputedStyle(slidesWrapper).width

//     let slideIndex = 1,
// 	offset = 0

// 	 if (slides.length < 10) {
//   	  total.textContent = `0${slides.length}`
//      } else {
//   	  total.textContent = slides.length
// 	  current.textContent = slideIndex
//      }

// 	slidesInner.style.width = 100 * slides.length + "%"
// 	slidesInner.style.display = "flex"
// 	slidesInner.style.transition = "all .5s ease"

// 	slidesWrapper.style.overflow ="hidden"

// 	slides.forEach(slide => {
// 		slide.style.width = width
// 	})

// 	next.addEventListener("click", () =>{
// 		if(offset === +width.replace(/\D/g, "") * (slides.length - 1)) {
// 			offset = 0
// 		} else {
// 			offset += +width.replace(/\D/g, "")
// 		}
// 		slidesInner.style.transform = `translateX(-${offset}px)`

// 		if (slideIndex === slides.length) {
// 			slideIndex = 1
// 		} else {
// 			slideIndex++
// 		}

// 	 if (slides.length < 10) {
// 		current.textContent = `0${slideIndex}`
// 	 } else {
// 		current.textContent = slideIndex
// 	 }
// 	})

// 	prev.addEventListener("click", () => {
// 		if(offset === 0) {
// 			// width = 900px
// 			offset = +width.replace(/\D/g, "") * (slides.length - 1) 
//  		} else {
// 			offset -= width.replace(/\D/g, "")
// 		}
// 		slidesInner.style.transform = `translateX(-${offset}px)`

		
// 		if (slideIndex === 1) {
// 			slideIndex = slides.length
// 		} else {
// 			slideIndex--
// 		}

// 	 if (slides.length < 10) {
// 		current.textContent = `0${slideIndex}`
// 	 } else {
// 		current.textContent = slideIndex
// 	 }
// 	}) 
// })










//     showSlides(slideIndex)

//     if (slides.length < 10) {
//  	  total.textContent = `0${slides.length}`
//     } else {
//  	  total.textContent = slides.length
//     }
   
//    function showSlides(index) {
// 	if (index > slides.length) {
// 		slideIndex = 1
// 	}

// 	if (index < 1) {
// 		slideIndex = slides.length
// 	}

// 	slides.forEach(slide => slide.style.display = "none")

// 	slides[slideIndex - 1].style.display = "block"

// 	 if (slides.length < 10) {
// 		current.textContent = `0${slideIndex}`
// 	 } else {
// 		current.textContent = slideIndex
// 	 }
//     }

//    function moveSlides(index) {
// 	showSlides(slideIndex += index)
//    }

//    prev.addEventListener("click", () => {
// 	moveSlides(-1)
//    })

//     next.addEventListener("click", () => {
//      moveSlides(1)
//     })   
