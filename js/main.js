let offset = 0;
const sliderLine = document.querySelector('.slider__line')
const sliderNext = document.querySelector('.slider__next')
const sliderPrev = document.querySelector('.slider__prev')

sliderNext.addEventListener('click',function(){
    offset -= 257;
    if(offset<-1542) {
        offset = 0;
    }
    sliderLine.style.left = offset +'px';
})
sliderPrev.addEventListener('click',function(){
    offset += 257;
    if(offset>0) {
        offset = -1542;
    }
    sliderLine.style.left = offset +'px';
})


// const time = 4000; //ms
// const step = 1;

// function outNum(num,elem){
//     let l = document.querySelector('#' + elem);
//     n = 0;
//     let t = Math.round(time/(num/step));
//     let interval = setInterval(()=> {
//         n= n + step;
//         if(n == num){
//             clearInterval(interval);
//         }
//         l.innerHTML = n;

//     },
//      t);

// }
// outNum(6, 'out__1');
// function outNum2(num2,elem2){
//     let l2 = document.querySelector('#' + elem2);
//     n2 = 0;
//     let t2 = Math.round(time/(num2/step));
//     let interval2 = setInterval(()=> {
//         n2= n2 + step;
//         if(n2 == num2){
//             clearInterval(interval2);
//         }
//         l2.innerHTML = n2;

//     },
//      t2);

// }
// outNum2(10, 'out__2');
// function outNum3(num3,elem3){
//     let l3 = document.querySelector('#' + elem3);
//     n3 = 0;
//     let t3 = Math.round(time/(num3/step3));
//     let interval3 = setInterval(()=> {
//         n3= n3 + step3;
//         if(n3 == num3){
//             clearInterval(interval3);
//         }
//         l3.innerHTML = n3;

//     },
//      t3);

// }
// const step2=25;
// const step3=3;
// outNum3(1500, 'out__3')
// function outNum4(num4,elem4){
//     let l4 = document.querySelector('#' + elem4);
//     n4 = 0;
//     let t4 = Math.round(time/(num4/step2));
//     let interval4 = setInterval(()=> {
//         n4= n4 + step2;
//         if(n4 == num4){
//             clearInterval(interval4);
//         }
//         l4.innerHTML = n4;

//     },
//      t4);

// }
// outNum4(6000, 'out__4')


// функция определяет нахождение элемента в области видимости
// если элемент видно - возвращает true
// если элемент невидно - возвращает false
function isOnVisibleSpace(element) {
	var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset   = elemRect.top;// - bodyRect.top;
  if(offset<0) return false;
  if(offset>bodyHeight) return false;
  return true;
}

// глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости
var listenedElements = [];
// обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements 
// на предмет попадания(выпадения) в зону видимости
window.onscroll = function() {
	listenedElements.forEach(item=>{
    // проверяем находится ли элемент в зоне видимости
  	var result = isOnVisibleSpace(item.el);
    
    // если элемент находился в зоне видимости и вышел из нее
    // вызываем обработчик выпадения из зоны видимости
    if(item.el.isOnVisibleSpace && !result){
    	item.el.isOnVisibleSpace = false;
      item.outVisibleSpace(item.el);
      return;
    }
    // если элемент находился вне зоны видимости и вошел в нее
    // вызываем обработчик попадания в зону видимости
    if(!item.el.isOnVisibleSpace && result){
    	item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
}

// функция устанавливает обработчики событий 
// появления элемента в зоне видимости и
// выхода из нее
function onVisibleSpaceListener(elementId, cbIn, cbOut) {
	// получаем ссылку на объект элемента
  var el = document.getElementById(elementId);
  // добавляем элемент и обработчики событий 
  // в массив отслеживаемых элементов
  listenedElements.push({
  	el: el,
    inVisibleSpace: cbIn,
    outVisibleSpace: cbOut    
  });
}

// устанавливаем обработчики для элемента "video"
onVisibleSpaceListener("out__1", 
	el=>{
		// функция вызываемая при попадании элемента в зону видимости
    // тут вставляем код запуска анимации
    el.innerHTML = "0";
    const time = 4000; //ms
const step = 1;

function outNum(num,elem){
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(()=> {
        n= n + step;
        if(n == num){
            clearInterval(interval);
        }
        l.innerHTML = n;

    },
     t);

}
outNum(6, 'out__1');
function outNum2(num2,elem2){
    let l2 = document.querySelector('#' + elem2);
    n2 = 0;
    let t2 = Math.round(time/(num2/step));
    let interval2 = setInterval(()=> {
        n2= n2 + step;
        if(n2 == num2){
            clearInterval(interval2);
        }
        l2.innerHTML = n2;

    },
     t2);

}
outNum2(10, 'out__2');
function outNum3(num3,elem3){
    let l3 = document.querySelector('#' + elem3);
    n3 = 0;
    let t3 = Math.round(time/(num3/step3));
    let interval3 = setInterval(()=> {
        n3= n3 + step3;
        if(n3 == num3){
            clearInterval(interval3);
        }
        l3.innerHTML = n3;

    },
     t3);

}
const step2=25;
const step3=3;
outNum3(1500, 'out__3')
function outNum4(num4,elem4){
    let l4 = document.querySelector('#' + elem4);
    n4 = 0;
    let t4 = Math.round(time/(num4/step2));
    let interval4 = setInterval(()=> {
        n4= n4 + step2;
        if(n4 == num4){
            clearInterval(interval4);
        }
        l4.innerHTML = n4;

    },
     t4);

}
outNum4(6000, 'out__4')
    
    
	},
	el=>{
		// функция вызываемая при выпадении элемента из зоны видимости
    // тут вставляем код остановки анимации

	}
);

const headers = document.querySelectorAll('[data-name="accordion"]');
headers.forEach(function(item){
    item.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('hidden');
    })
});

AOS.init();

