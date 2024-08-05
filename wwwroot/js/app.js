function animate(obj, initVal, lastVal, duration) {
    let startTime = null;
  
    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();
  
    //pass the current timestamp to the step function
    const step = (currentTime) => {
      //if the start time is null, assign the current time to startTime
      if (!startTime) {
        startTime = currentTime;
      }
  
      //calculate the value to be used in calculating the number to be displayed
      const progress = Math.min((currentTime - startTime) / duration, 1);
  
      //calculate what to be displayed using the value gotten above
      obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
  
      //checking to make sure the counter does not exceed the last value (lastVal)
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
    };
  
    //start animating
    window.requestAnimationFrame(step);
  }
  
  let text1 = document.getElementById("t1");
  let text2 = document.getElementById("t2");
  let text3 = document.getElementById("t3");
  
  const load = () => {
    animate(text1, 0, 98, 3000);
    animate(text2, 0, 89, 3000);
    animate(text3, 0, 99, 3000);
  };
  let counter = document.getElementById("counter");
  let hasRun = true;
  function isInViewPort(element) {
    // Get the bounding client rectangle position in the viewport
    var bounding = element.getBoundingClientRect();
  
    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      // console.log("In the viewport! :)");
      return true;
    } else {
      // console.log("Not in the viewport. :(");
      return false;
    }
  }
  window.addEventListener(
    "scroll",
    function (event) {
      if (isInViewPort(counter) && hasRun) {
        load();
        hasRun = false;
      }
    },
    false
  );