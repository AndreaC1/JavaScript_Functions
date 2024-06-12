console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printodds(count){


    if(count < 0){
        for(let i = 0; i >= count; i--){
            if(i % 2 != 0){
                console.log(i);
            }      
        }    
    }
    for(let i = 1; i <= count; i++){
        if(i % 2 != 0){
            console.log(i);
        }  
    }
}

printodds(6);
printodds(-9);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
     if(userName == undefined){
          return console.log("Missing username and age");
      }
      if(age == undefined){
        return console.log("missing age")
      }
let aboveSixteen = `Congrats ${userName}, you can drive!"`
let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
  
if(age < 16){
    console.log(belowSixteen);
}
else{
    console.log(aboveSixteen);
}
}

 checkAge("Bandit", 10);
checkAge("stark");
checkAge();


//Exercise 3
function cartesianPlane(x, y){
   
    if(x == 0){
        console.log("y axis")
    }
    else if(y == 0){
        console.log("x axis");
    }
    else if(x > 0 && y > 0){
        console.log("Quadrant 1");
    }
    else if(x < 0 && y > 0){
        console.log("Quadrant 2");
    }
    else if(x < 0 && y < 0){
        console.log("Quadrant 3");
    }
    else if(x > 0 && y <0){
        console.log("Quadrant 4");
    }
}

cartesianPlane(0,2);
cartesianPlane(1,0);
cartesianPlane(1,2);
cartesianPlane(6,0);
cartesianPlane(-6,-18);
cartesianPlane(0,0);

//Exercise 4
function triangle(a, b, c){
    console.log(a, b, c)
    console.log(a + b);
    if(a + b <= c || a + c <= b || c + b <= a  ){
        return console.log("invalid triangle");
     }
    if(a == b && b == c && c == a){
        return console.log("equilateral: all side lengths equal");
    }
    else if(a != b && b !=c && c != a){
        return console.log("scalene: all different side lenghts");
    }
    else{
        return console.log("isosceles: only two side lengths equal");
    }

}


triangle(3, 4, 5);
triangle(1, 1, 1);
triangle(2, 4, 2);
triangle(2, 2, 3);
triangle(5, 6, 7);

//exercise 5
function dataPlan(planLimit, day, usage){
console.log(`${day} days used, ${day} days remaining `)
let avgDailyUse = usage/day;
console.log(avgDailyUse.toFixed(2), "average daily use");
//allowed by plan
let avgPlanDailyUse = planLimit/30;
let projectedDataUsed = avgDailyUse * 30;
let exceedPlan = projectedDataUsed - planLimit;
let actualDataUsed = avgDailyUse * day;
let remainingData = planLimit - actualDataUsed;
let remainingDailyAvg = remainingData/day;

if(avgDailyUse > avgPlanDailyUse){
    console.log(`You are EXCEEDING your average daily use (${avgDailyUse.toFixed(2)}) GB/day, continuing this high usage, you'll exceed your data plan by ${exceedPlan} GB. To stay below your plan, use no more than ${remainingDailyAvg.toFixed(2)} GB/day`);
}
}

dataPlan(100, 15, 56);