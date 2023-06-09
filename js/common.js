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

	const onScrollHeader = () => { // объявляем основную функцию onScrollHeader
		const header = $('.header') // находим header и записываем в константу
		let prevScroll = $(window).scrollTop() // узнаем на сколько была прокручена страница ранее
		let currentScroll // на сколько прокручена страница сейчас (пока нет значения)
	
		$(window).scroll(() => { // при прокрутке страницы
		  currentScroll = $(window).scrollTop() // узнаем на сколько прокрутили страницу
		  const headerHidden = () => header.hasClass('header_hidden') // узнаем скрыт header или нет
		  if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
			header.addClass('header_hidden') // то скрываем header
		  }
		  if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
			header.removeClass('header_hidden') // то отображаем header
		  }
		  prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
		})
	  }
	  
	onScrollHeader() // вызываем основную функцию onScrollHeader

	const mobileNav = document.querySelector('.mobile__nav')
	const burger = document.querySelector('.burger__control')
	burger.addEventListener('click', (e)=> {
		e.preventDefault()
		if (e.target.closest('.burger__control').classList.contains('active')) {
			e.target.closest('.burger__control').classList.remove('active')
			mobileNav.style.transform = 'translateX(-100%)'
			document.querySelector('body').style.overflow = 'auto'
		} else {
			e.target.closest('.burger__control').classList.add('active')
			mobileNav.style.transform = 'translateX(0%)'
			document.querySelector('body').style.overflow = 'hidden'
		}
	})

	$('.ts__items').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 10000,
		fade: true
	});

	$('.bslider__items').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 15000,
		prevArrow: '.bsc__arrow.prev',
		nextArrow: '.bsc__arrow.next',
		fade: true,
		swipeToSlide: false,
		swipe: false
	});

let i = 1
document.querySelectorAll('.benefits .slick-dots li').forEach(li => {
    li.classList.add(`li_${i++}`)
})

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

(function(){
    var originalAddClassMethod = jQuery.fn.addClass;
    $.fn.addClass = function(){
        var result = originalAddClassMethod.apply(this, arguments);
        $(this).trigger('cssClassChanged');
        return result;
    }
})();

$(function(){
    $(".li_1").bind('cssClassChanged', function(){ 
        document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(225deg, transparent 50%, #F1F1F1 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
		document.querySelector('.circle__white').innerHTML = '3/8'
    });
});

$(function(){
    $(".li_2").bind('cssClassChanged', function(){ 
        document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(270deg, transparent 50%, #F1F1F1 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
		document.querySelector('.circle__white').innerHTML = '4/8'
    });
});

$(function(){
    $(".li_3").bind('cssClassChanged', function(){ 
        document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(135deg, transparent 50%, #0DA7E2 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
		document.querySelector('.circle__white').innerHTML = '5/8'
    });
});

$(function(){
    $(".li_4").bind('cssClassChanged', function(){ 
        document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(180deg, transparent 50%, #0DA7E2 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
		document.querySelector('.circle__white').innerHTML = '6/8'
    });
});

$(function(){
    $(".li_5").bind('cssClassChanged', function(){ 
        document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(225deg, transparent 50%, #0DA7E2 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
		document.querySelector('.circle__white').innerHTML = '7/8'
    });
});

$(function(){
    $(".li_6").bind('cssClassChanged', function(){ 
        document.querySelector('.circle__border').style.backgroundImage = 'linear-gradient(270deg, transparent 50%, #0DA7E2 50%), linear-gradient(90deg, #F1F1F1 50%, transparent 50%)'
		document.querySelector('.circle__white').innerHTML = '8/8'
    });
});

changeCircleProgressSlider(nextArrow)
changeCircleProgressSlider(prevArrow)

// Accordeon

document.querySelectorAll('.faq__header').forEach(faq => {
    faq.addEventListener('click', () => {

        if (faq.closest('.faq__item').querySelector('.faq__body').classList.contains('active__toggle')) {
            document.querySelectorAll('.faq__body').forEach(body => {
                body.classList.remove('active__toggle')
				body.closest('.faq__item').querySelector('.plus__faq').style.transform = 'rotate(0)'
            })
        } else {
            document.querySelectorAll('.faq__body').forEach(body => {
                body.classList.remove('active__toggle')
				body.closest('.faq__item').querySelector('.plus__faq').style.transform = 'rotate(0)'
            })

            faq.closest('.faq__item').querySelector('.faq__body').classList.add('active__toggle')
			faq.closest('.faq__item').querySelector('.plus__faq').style.transform = 'rotate(45deg)'
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

document.querySelectorAll('.top__link').forEach(link => {
    link.addEventListener('click', (btn)=> {
        btn.preventDefault()
        if (btn.target.textContent.trim() === 'Для бизнеса') {
            if (link.classList.contains('active')) {
                link.classList.remove('active')
                    document.querySelector('.submenu').style.opacity = '0'
                    document.querySelector('.full__overlay').style.opacity = '0'
                setTimeout( ()=> {
                    document.querySelector('.submenu').style.display = 'none'
                    document.querySelector('.full__overlay').style.display = 'none'
                }, 500)
            } else {
                link.classList.add('active')
                document.querySelector('.submenu').style.display = 'flex'
                document.querySelector('.full__overlay').style.display = 'flex'
                setTimeout( ()=> {
                    document.querySelector('.submenu').style.opacity = '1'
                    document.querySelector('.full__overlay').style.opacity = '.1'
                }, 100)
            }     
        }
    })
})

document.querySelector('.full__overlay').addEventListener('click', (btn)=> {
    document.querySelectorAll('.top__link').forEach(link => {
        if (link.classList.contains('active')) {
                link.classList.remove('active')
                    document.querySelector('.submenu').style.opacity = '0'
                    document.querySelector('.full__overlay').style.opacity = '0'
                setTimeout( ()=> {
                    document.querySelector('.submenu').style.display = 'none'
                    document.querySelector('.full__overlay').style.display = 'none'
                }, 500)
        }
    })
})

document.querySelector('.footer__link.sub__main').addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active')
        document.querySelector('.footer__submenu').style.opacity = '0'
        setTimeout(()=> {
            document.querySelector('.footer__submenu').style.display = 'none'
        }, 500)
    } else {
        e.target.classList.add('active')
        document.querySelector('.footer__submenu').style.display = 'flex'
        setTimeout(()=> {
            document.querySelector('.footer__submenu').style.opacity = '1'
        }, 100)
    }
})

	  
})