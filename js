js


// var crazymonkey = prompt("So you are flying a gazillion milles per hour on a golden cloud 
//                         with Chewie and Goku, but Chewie, was drunk and he felt off in a
//                        planet inside a Jungle and you top with a crazymonkey who just took
//                       Chewie's Joda's light Saber! Do you Kung-Fu him, PAY him, or Shoot him?").toUpperCase();

// switch(crazymonkey) {
//   case 'Kung-Fu':
//     var amazing = prompt("oOok budy, let's see what you got! Are you really good in Kung-Fu (YES or NO)?").toUpperCase();
//     var good = prompt("Are you good?. This monkey looks like he talks the walk!").toUpperCase();
//     var k1 = prompt("Monkey says, I dont fight with babies").toUpperCase();
//     var k2 = prompt("Monkey says, is that all ya' got?!lol").toUpperCase();    
//     var k3 = prompt("Monkey says, Ok ok ! Damn son!").toUpperCase();
//     var k4 = prompt("Monkey says, plese sir dont kill me ouch it hurts!").toUpperCase();
//     var doubles = prompt("You knocked him the F* out of his flesh!").toUpperCase();

///////////////////////////////////////////////////////////////////////////
//     if(amazing === 'YES' || good === 'YES') {
//       console.log("You only need one of the two! You beat the crazymonkey--nice work!");
//     } 
///////////////////////////////////////////////////////////////////////////
//     else {
//       console.log("Pow! Pow! POw! Can't judge the monkey by the cover!!!! You tried to face the crazymonkey but Ya got battered!");
//     }
//     break;
  /////////////////
// if (k1){
//   console.log("");
// } else if (k2){
//   console.log("");
// } else if (k3){
//   console.log("");
// } else if (k4){
//   console.log("");
// } else if(doubles){
//   console.log("");



var fema = prompt("So you are Han's nephew flying a gazillion milles per hour on a golden cloud 
                  with Chewie, crazymonkey and Goku, passing fast next to planets...
                  but Chewie felt off in a planet... inside a Jungle and 
                  while looking for him you topped with a FEMA(Federal Emergency MAnagment Agency)
                  whom they took Chewie! Oh NO! Your Broda!!!! Do you Kung-Fu (k1, k2, k3, k4, or
                  doubles), Will you M134 (m1, m2, m3, m4, or doubles), maybe beat them with 
                  Nunchucks (n1, n2, n3, n4, or doubles), or why not got easy with a 
                  light Saber (l1, l2, l3, l4, or doubles)").toUpperCase();


switch(fema) {

                            /////////case with Kung FU////////////

case 'Kung-Fu':
var amazing = prompt("oOok budy, let's see what you got! Are you really good in Kung-Fu (YES or NO)?").toUpperCase();
var good = prompt("Are you good?. These monkeys looks like they talk the walk!").toUpperCase();
var k1 = prompt("You missed/ FEMA attacked you first").toUpperCase();
var k2 = prompt("People laught at your moves. You are no match").toUpperCase();    
var k3 = prompt("You kick and punch ou-kay").toUpperCase();
var k4 = prompt("You fight like IpMan").toUpperCase();
var doubles = prompt("You knock people the F* out of their flesh!").toUpperCase();
                            

if (k1){
console.log("Pow! Pow! POw! Can't judge the FEMA by the cover!!!! You tried to face the Republic but Ya' got wacked!");
} else if (k2){
console.log("I dont fight kids and I will take your money as well!");
} else if (k3){
console.log("Not Today boyya!");
} else if (k4){
console.log("you Kung-Fu so crazy you are like God's little pinky");
} else (doubles){
console.log("You knocked them the F* out. They never saw it coming!");
break;

              /////////case with Nunchucks/////////////////////////////////



case 'nunchucks':
var n1 = prompt("You missed/ FEMA attacked you first").toUpperCase();
var n2 = prompt("You hit yourself/ FEMA laughts at your moves").toUpperCase();
var n3 = prompt("Bruce Lee ain't got nothin' on you!").toUpperCase();
var n4 = prompt("First they saw you then they died").toUpperCase();
var doubles = prompt("A thunderbolt looks like slow-motion!").toUpperCase();




if (n1){
console.log("Pow! Pow! POw! Can't judge FEMA by the cover!!!! You tried to face the FEMA but Ya' got wacked!");
} else if (n2){
console.log("FEMA took your nunchucks your money as well!");
} else if (n3){
console.log("FEMA retreats you are a bad ass!");
} else if (n4){
console.log("Excuse me Mr Lee, may I have your autograph?");
} else (doubles){
console.log("You knocked them the F* out. They never saw it coming!");
break;


             /////////////case with M134/////////////////////////////////

case 'm134':
var m1 = prompt("You missed/ cant handle a m134").toUpperCase();
var m2 = prompt("You can shoot at everyone, even your friends FEMA laughts!").toUpperCase();
var m3 = prompt("Rambo!").toUpperCase();
var m4 = prompt("Is like hunting Predator").toUpperCase();
var doubles = prompt("Shredding them into pieces!").toUpperCase();


if (m1){
console.log("Pow! Pow! POw! Can't judge FEMA by the cover!!!! You tried to face the FEMA but Ya' got wacked!");
} else if (m2){
console.log("FEMA shot you, took your money as well. Nice try!");
} else if (m3){
console.log("FEMA retreats you are a bad ass!");
} else if (m4){
console.log("Excuse me Mr Terminator, may I have your autograph?");
} else (doubles){
console.log("You turned them into powder. They never saw it coming!");
break;

             /////////////case with lightsaber/////////////////////////////////


case 'lightsaber':
var l1 = prompt("You missed/ cant deal with a lightsaber").toUpperCase();
var l2 = prompt("Maybe you can control the lightsaber, but FEMA laughts!").toUpperCase();
var l3 = prompt("Barbie with a lightsaber!").toUpperCase();
var l4 = prompt("Is a fancy way to cut cheese").toUpperCase();
var doubles = prompt("Do or do not there is no try!").toUpperCase();


if (l1){
console.log("Pow! Pow! POw! Can't judge FEMA by the cover!!!! You tried to face the FEMA but Ya' got wacked!");
} else if (l2){
console.log("FEMA shot you, took your money as well. Nice try!");
} else if (l3){
console.log("FEMA retreats you are a bad ass!");
} else if (l4){
console.log("Excuse me Mr Vader, may I have your autograph?");
} else (doubles){
console.log("You turned them into tiny pieces. They never saw it coming!");
break;




default:
console.log("I didn't understand the lingo. Hit Run and try again, this time picking Kung-Fu, Nunchucks, lightsaber or M134!");


}






  // case 'PAY':
  //   var money = prompt("All right, we'll pay the crazymonkey. Do you have any money (YES or NO)?").toUpperCase();
  //   var bitcoin = prompt("Is your money in bitcoin?").toUpperCase();
  //   if(money === 'YES' && dollars === 'YES') {
  //     console.log("Great! You pay the crazymonkey and continue on your merry way.");
  //   } else {
  //     console.log("Dang! This crazymonkey only takes bitcoin. You get whomped!");
  //   }
  //   break;
  // case 'Shoot':
  //   var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
  //   var headStart = prompt("Did you get a head start?").toUpperCase();
  //   if(fast === 'YES' || headStart === 'YES') {
  //     console.log("You got away--barely! You live to stroll through the forest another day.");
  //   } else {
  //     console.log("You're not fast and you didn't get a head start? You never had a chance! The crazymonkey eats you.");
  //   }
  //   break;
  // default:
  //   console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}





