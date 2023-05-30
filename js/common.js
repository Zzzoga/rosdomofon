$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


document.addEventListener('DOMContentLoaded', () => {

	$('.ts__items').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: false,
  		autoplaySpeed: 3000,
		fade: true
	});

	$('.bslider__items').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		autoplay: false,
		prevArrow: '.bsc__arrow.prev',
		nextArrow: '.bsc__arrow.next',
		fade: true,
		swipeToSlide: false,
		swipe: false
	});


const nextArrow = document.querySelector('.bsc__arrow.next')
const prevArrow = document.querySelector('.bsc__arrow.prev')

function changeCircleProgressSlider(btn) {
	btn.addEventListener('click', btn => {
		document.querySelectorAll('.benefits__slider .slick-dots li').forEach(li => {
			if (li.classList.contains('slick-active')) {
				let currentPercent = 0
				currentPercent = li.querySelector('button').textContent * 1
				console.log(currentPercent)
	
				switch(currentPercent) {
					case 1: setTimeout( ()=> {
						document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(225deg, transparent 50%, #F1F1F1 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
						document.querySelector('.circle__white').innerHTML = '3/8'
				}, 500)
					break;
	
					case 2: setTimeout( ()=> {
						document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(270deg, transparent 50%, #F1F1F1 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
						document.querySelector('.circle__white').innerHTML = '4/8'
					}, 500)
					break;
	
					case 3: setTimeout( ()=> {
						document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(135deg, transparent 50%, #0DA7E2 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
						document.querySelector('.circle__white').innerHTML = '5/8'
					}, 500)
					break;
	
					case 4: setTimeout( ()=> {
						document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(180deg, transparent 50%, #0DA7E2 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
						document.querySelector('.circle__white').innerHTML = '6/8'
					}, 500)
					break;
	
					case 5: setTimeout( ()=> {
						document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(225deg, transparent 50%, #0DA7E2 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
						document.querySelector('.circle__white').innerHTML = '7/8'
					}, 500)
					break;
	
					case 6: setTimeout( ()=> {
						document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(270deg, transparent 50%, #0DA7E2 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
						document.querySelector('.circle__white').innerHTML = '8/8'
					}, 500)
					break;
				}
			}
		})
	})
}

changeCircleProgressSlider(nextArrow)
changeCircleProgressSlider(prevArrow)

// Accordeon

document.querySelectorAll('.faq__header').forEach(faq => {
    faq.addEventListener('click', () => {

        if (faq.closest('.faq__item').querySelector('.faq__body').classList.contains('active__toggle')) {
            document.querySelectorAll('.faq__body').forEach(body => {
                body.classList.remove('active__toggle')
            })
        } else {
            document.querySelectorAll('.faq__body').forEach(body => {
                body.classList.remove('active__toggle')
            })

            faq.closest('.faq__item').querySelector('.faq__body').classList.add('active__toggle')
        }
        
    })
})

document.querySelectorAll('.modal__btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
		e.preventDefault()
		document.querySelector('.qr__modal').style.display = 'flex'
		setTimeout( ()=> {
			document.querySelector('.qr__modal').style.opacity = '1'
		}, 500)
	})
})

document.querySelector('.qr__close').addEventListener('click', () => {
	document.querySelector('.qr__modal').style.opacity = '0'
	setTimeout( ()=> {
		document.querySelector('.qr__modal').style.display = 'none'
	}, 500)
})

document.querySelector('.qr__overlay').addEventListener('click', () => {
	document.querySelector('.qr__modal').style.opacity = '0'
	setTimeout( ()=> {
		document.querySelector('.qr__modal').style.display = 'none'
	}, 500)
})

	  
})