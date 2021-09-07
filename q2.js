let multiplesSum = (num) => {

    let counter = 0;
    let i;
  // for loop to loop through the numbers from 1 to 1000 "or any sepecific num"
    for (i = 0; i < num; i ++){
  
      // check If either the number is  multiple of 3 or 5
      if (i % 3 === 0 || i % 5 === 0){
        // add the number to the counter
        counter = counter += i;
      }
    }
  
    // Return the counter
    return counter;
  
  }
  console.log(multiplesSum(1000));