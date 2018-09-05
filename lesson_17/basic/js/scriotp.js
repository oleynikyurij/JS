(function () {
	$(function () {
		//табы
		$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});
//Карусель
		$(".owl-carousel").owlCarousel({
			loop: true,
			autoWidth: true,
			margin: 20,
			autoplay: true,
			autoplayTimeout: 3000,
			nav: true,
			center: true,
			responsiveClass: true,
			responsive: {
				500: {
					items: 1,
					nav: false
				},
				800: {
					items: 3,
					margin: 15
				},
				1000: {
					items: 4

				}
			}
		});

	});
})();


//Калькулятор
(function() {
  "use strict";

  // Shortcut to get elements
  var el = function(element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

  // Variables
  var viewer = el("#viewer"), // Calculator screen where result is displayed
    equals = el("#equals"), // Equal button
    nums = el(".num"), // List of numbers
    ops = el(".ops"), // List of operators
    theNum = "", // Current number
    oldNum = "", // First number
    resultNum, // Result
    operator; // Batman

  // When: Number is clicked. Get the current number selected
  var setNum = function() {
    if (resultNum) { // If a result was displayed, reset number
      theNum = this.getAttribute("data-num");
      resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      theNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = theNum; // Display current number

  };

  // When: Operator is clicked. Pass number to oldNum and save operator
  var moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); // Reset result in attr
  };

  // When: Equals is clicked. Calculate result
  var displayNum = function() {

    // Convert string input to numbers
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    // Perform operation
    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "times":
        resultNum = oldNum * theNum;
        break;

      case "divided by":
        resultNum = oldNum / theNum;
        break;

        // If equal is pressed without an operator, keep number and continue
      default:
        resultNum = theNum;
    }

    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
        resultNum = "You broke it!";
      } else { // If result is infinity, set off by dividing by zero
        resultNum = "Look at what you've done";
        el('#calculator').classList.add("broken"); // Break calculator
        el('#reset').classList.add("show"); // And show reset button
      }
    }

    // Display result, finally!
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Now reset oldNum & keep result
    oldNum = 0;
    theNum = resultNum;

  };

  // When: Clear button is pressed. Clear everything
  var clearAll = function() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };

  /* The click events */

  // Add click event to numbers
  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  // Add click event to operators
  for (var i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
  }

  // Add click event to equal sign
  equals.onclick = displayNum;

  // Add click event to clear button
  el("#clear").onclick = clearAll;

  

}());

//Игра

(function () {
	const game = document.querySelector('.game');
var arrFactory = [];
var arrTree = [];
var newFactory;
var interval = 800;
//var counter = 1;

function createGame() {
    for (let i = 0; i < 30; i++) {
        let a = document.querySelector('.game');
        let b = document.createElement('div');
        b.classList.add('box');
        b.setAttribute('data-value', i);
        a.appendChild(b);   
    }
    
}

function replay() {
    var replay = document.querySelector('.replay');
    replay.addEventListener('click', function() {
        box.forEach(function(box) {
            box.classList.remove('green');
            box.classList.remove('tree');

        });
        //counter += 1;
        //document.querySelector('.counter').innerHTML = 'Level: ' + counter;
        document.querySelector('.hidden').classList.add('levelUp')
        let bang = document.querySelector('.won');
        newFactory = setInterval(randomFactory, 600);
        bang.style.animation = 'start .6s ease-in-out';
        bang.style.top = '100%';
    });
}

function addTree(e) {
    let c = e.target;
    
    if(arrTree.indexOf(c.dataset.value) == -1) {
        arrTree.push(c.dataset.value);
        if(arrTree.length == 30) {
            clearInterval(newFactory);
            
            document.querySelector('.hidden').classList.remove('levelUp');
            let bang = document.querySelector('.won');
            bang.style.animation = 'won .6s ease-in-out';
            bang.style.top = '30%';
            replay();
        }
    } 
    

    if(arrFactory.indexOf(c.dataset.value) != -1) {
        arrFactory.splice(arrFactory.indexOf(c.dataset.value) ,1);
    }
    c.classList.remove('red');
    c.classList.remove('factory');
    c.classList.add('green');
    c.classList.add('tree');
    console.log(arrTree);
}

function randomFactory() {
    let e = Math.random() * 30;
    let g = Math.floor(e);
    
    if(arrFactory.indexOf(box[g].dataset.value) == -1) {
        arrFactory.push(box[g].dataset.value);
        box[g].classList.add('red');
        box[g].classList.remove('green');
        box[g].classList.add('factory');
        if(arrFactory.length == 30) {
            clearInterval(newFactory);
        }
    } 
    
    if(arrTree.indexOf(box[g].dataset.value) != -1) {
        arrTree.splice(arrTree.indexOf(box[g].dataset.value), 1);
    }
    
}

var yol = document.querySelector('.yolo');

createGame();

var box = document.querySelectorAll('.box');
// console.log(box);
var start = document.querySelector('.floating');
start.addEventListener('click', function() {
    let init = document.querySelector('.init');
    init.style.animation = 'start .5s ease-in';
    init.style.top = '100%';
    newFactory = setInterval(randomFactory, interval);
});

box.forEach(function(box) {
    box.addEventListener('click', addTree, false);
}, false);

function fire(e) {
    console.log(e.target);
    let trg = e.target;
    
    const itemDim = this.getBoundingClientRect(),
    itemSize = {
      x: itemDim.right - itemDim.left,
      y: itemDim.bottom - itemDim.top,
    };
    
    let burst = new mojs.Burst({
        left: itemDim.left + (itemSize.x/2),
        top: itemDim.top + (itemSize.y/1.7),
        count: 9,
        radius: {50 : 90},
    });
    burst.play();
};


box.forEach(function(box) {
    box.addEventListener('click', fire);
});
	
}());