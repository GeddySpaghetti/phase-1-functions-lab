const hq = 42
const block = 264
function distanceFromHqInBlocks(pickup) {
    //returns the number of blocks given a value
   if (pickup > hq){
   return pickup - hq;
   }else if (pickup < hq){
       return hq - pickup;
   }
  }



function distanceFromHqInFeet(destination) {
  if (hq > destination)
    return (hq - destination) * 264;
    else (hq < destination)
    return (destination - hq) * 264;
}


function distanceTravelledInFeet(start, destination) {
    if (start > destination)
    return (start - destination) * 264;
    else (start < destination)
    return (destination - start) * 264;
  }


  function calculatesFarePrice(start, destination) {
 let blockDistance = Math.abs(start - destination);
 let distanceTraveled = blockDistance * 264;
 if (distanceTraveled <= 400){
   console.log ('give customers a free sample');
   return 0
 }
else if (distanceTraveled >= 2500)
return 'cannot travel that far';

else if (2000 <= distanceTraveled && distanceTraveled <= 2500)
return 25;

 else if (400 <= distanceTraveled && distanceTraveled <= 2000) {
  let ridecost =  (0.02 * (distanceTraveled - 400));
 return (distanceTraveled -400)*0.02;
}



/*else if (distanceTraveled => 401 && distanceTraveled <=2000)
return (distanceTraveled - 400)*0.02;*/
  


  }