$(function(){
var d1, d2, doubles, diceTotal; 

$("#rollDice").click(function(){
      var die1 = document.getElementById("die1");
      var die2 = document.getElementById("die2");
      var status = document.getElementById("status");
       d1 = Math.floor(Math.random() * 6) + 1; 
       d2 = Math.floor(Math.random() * 6) + 1; 
       diceTotal = d1 + d2;
      die1.innerHTML = d1;
      die2.innerHTML = d2;
      status.innerHTML = "You rolled"+diceTotal+"."
      if(d1===d2){
        doubles=true;
        status.innerHTML +="DOUBLES! YOU GET A FREE TURN!!!";
   }else{
    doubles=false;
   }

});



  $("#game").click(function(){



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


  var intro = "So you are Han's nephew, a Wookie, flying a gazillion milles per hour on a golden cloud with Chewie, crazymonkey and Goham, passing fast next to planets... but Chewie felt off in a planet... inside a Jungle and while looking for him you topped with a FEMA(Federal Emergency MAnagment Agency) whom they took Chewie! Oh NO! Your Broda!!!! Do you Kung-Fu, Will you M134, maybe beat them with Nunchucks, or why not got easy with a light Saber".toUpperCase();
  var fema = prompt(intro).toLowerCase();


  





  switch(fema) {

                              /////////case with Kung FU////////////

  case 'kung-fu':
    var amazing = prompt("oOok budy, let's see what you got! Are you really good in Kung-Fu (YES or NO)?").toUpperCase();
    var good = prompt("Are you good?. These monkeys looks like they talk the walk!").toUpperCase();
    
if(diceTotal === 2|| diceTotal===3){
  var k1 = prompt("You missed/ FEMA attacked you first...Pow! Pow! POw! Can't judge the FEMA by the cover!!!! You tried to face the Republic but Ya' got wacked!").toUpperCase();
}
else if (diceTotal === 4|| diceTotal===5 || diceTotal===6){
  var k2 = prompt("People laught at your moves. You are no match. I dont fight kids and I will take your money as well, they say!").toUpperCase(); 
}
else if (diceTotal === 7|| diceTotal===8 || diceTotal===9){
  var k3 = prompt("You kick and punch ou-kay. Not Today boyya!").toUpperCase();
}
else if (diceTotal === 10|| diceTotal===11){
  var k4 = prompt("You fight like IpMan").toUpperCase();
}
else if (diceTotal === doubles){
  var doubles = prompt("You knock people the F* out of their flesh!.you Kung-Fu so crazy you are like God's little pinky.. wait wait lol ...You knocked them the F* out. They never saw it coming!").toUpperCase();
}
    
                                    

     if (diceTotal === 2|| diceTotal===3){
       console.log("Pow! Pow! POw! Can't judge the FEMA by the cover!!!! You tried to face the Republic but Ya' got wacked!");
     } else if (diceTotal === 4|| diceTotal===5 || diceTotal===6){
       console.log("I dont fight kids and I will take your money as well, they say!");
     } else if (diceTotal === 7|| diceTotal===8 || diceTotal===9){
       console.log("Not Today boyya!");
     } else if (diceTotal === 10|| diceTotal===11){
       console.log("you Kung-Fu so crazy you are like God's little pinky");
     } else if (diceTotal === doubles) {
       console.log("You knocked them the F* out. They never saw it coming!");
    }
    break;

                /////////case with Nunchucks/////////////////////////////////



  case 'nunchucks':

    if (diceTotal === 2|| diceTotal===3){
    var n1 = prompt("You missed/ FEMA attacked you first..Pow! Pow! POw! Can't judge FEMA by the cover!!!! You tried to face the FEMA but Ya' got wacked!").toUpperCase();
    }
    
    else if (diceTotal === 4|| diceTotal===5 || diceTotal===6){
    var n2 = prompt("You hit yourself/ FEMA laughts at your moves...FEMA took your nunchucks your money as well!").toUpperCase();
    }
    else if (diceTotal === 7|| diceTotal===8 || diceTotal===9){

    var n3 = prompt("Bruce Lee ain't got nothin' on you!...FEMA retreats you are a bad ass!").toUpperCase();
    }
    else if (diceTotal === 10|| diceTotal===11){

    var n4 = prompt("First they saw you then they died...Excuse me Mr Lee, may I have your autograph?").toUpperCase();
    }
    else if (diceTotal === doubles){

    var doubles = prompt("A thunderbolt looks like slow-motion!...You knocked them the F* out. They never saw it coming!").toUpperCase();

    }


     if (diceTotal === 2|| diceTotal===3) {
       console.log("Pow! Pow! POw! Can't judge FEMA by the cover!!!! You tried to face the FEMA but Ya' got wacked!");
     } else if (diceTotal === 4|| diceTotal===5 || diceTotal===6){
       console.log("FEMA took your nunchucks your money as well!");
     } else if (diceTotal === 7|| diceTotal===8 || diceTotal===9){
       console.log("FEMA retreats you are a bad ass!");
     } else if (diceTotal === 10|| diceTotal===11){
       console.log("Excuse me Mr Lee, may I have your autograph?");
     } else if (diceTotal === doubles){
       console.log("You knocked them the F* out. They never saw it coming!");
     }
    break;


               /////////////case with M134/////////////////////////////////

  case 'm134':
    
    if (diceTotal === 2|| diceTotal===3){

    var m1 = prompt("You missed/ cant handle a m134...Pow! Pow! POw! Can't judge FEMA by the cover!!!! You tried to face the FEMA but Ya' got wacked!").toUpperCase();
    }

    else if (diceTotal === 4|| diceTotal===5 || diceTotal===6){

    var m2 = prompt("You can shoot at everyone, even your friends FEMA laughts!...FEMA shot you, took your money as well. Nice try!").toUpperCase();
    }
    else if (diceTotal === 7|| diceTotal===8 || diceTotal===9){

    var m3 = prompt("Rambo!...FEMA retreats you are a bad ass!").toUpperCase();
    }
    else if (diceTotal === 10|| diceTotal===11){

    var m4 = prompt("Is like hunting Predator...Excuse me Mr Terminator, may I have your autograph?").toUpperCase();
    }
    else if (diceTotal === doubles){

    var doubles = prompt("Shredding them into pieces!...You turned them into powder. They never saw it coming!").toUpperCase();
    }

     if (diceTotal === 2|| diceTotal===3){
       console.log("Pow! Pow! POw! Can't judge FEMA by the cover!!!! You tried to face the FEMA but Ya' got wacked!");
     } else if (diceTotal === 4|| diceTotal===5 || diceTotal===6){
       console.log("FEMA shot you, took your money as well. Nice try!");
     } else if (diceTotal === 7|| diceTotal===8 || diceTotal===9){
       console.log("FEMA retreats you are a bad ass!");
     } else if (diceTotal === 10|| diceTotal===11){
       console.log("Excuse me Mr Terminator, may I have your autograph?");
     } else if (diceTotal === doubles){
       console.log("You turned them into powder. They never saw it coming!");
     }
    break;

               /////////////case with lightsaber/////////////////////////////////


  case 'light saber':
     

     if (diceTotal === 2|| diceTotal===3){
    var l1 = prompt("You missed/ cant deal with a lightsaber...Pow! Pow! POw! Can't judge FEMA by the cover!!!! You tried to face the FEMA but Ya' got wacked!").toUpperCase();
    }
    else if (diceTotal === 4|| diceTotal===5 || diceTotal===6){
    var l2 = prompt("Maybe you can control the lightsaber, but FEMA laughts!").toUpperCase();
    }
    else if (diceTotal === 7|| diceTotal===8 || diceTotal===9){
    var l3 = prompt("Barbie with a lightsaber!...FEMA shot you, & took your money as well. Nice try!").toUpperCase();
    }
    else if (diceTotal === 10|| diceTotal===11){

    var l4 = prompt("Is a fancy way to cut cheese...FEMA retreats you are a bad ass!").toUpperCase();
    }
    else if (diceTotal === doubles){

    var doubles = prompt("Do or do not there is no try!...You turned them into tiny pieces. They never saw it coming!").toUpperCase();
    }

     if (diceTotal === 2|| diceTotal===3){
       console.log("Pow! Pow! POw! Can't judge FEMA by the cover!!!! You tried to face the FEMA but Ya' got wacked!");
     } else if (diceTotal === 4|| diceTotal===5 || diceTotal===6){
       console.log("FEMA shot you, took your money as well. Nice try!");
     } else if (diceTotal === 7|| diceTotal===8 || diceTotal===9){
       console.log("FEMA retreats you are a bad ass!");
     } else if (diceTotal === 10|| diceTotal===11){
       console.log("Excuse me Mr Vader, may I have your autograph?");
     } else if (diceTotal === doubles){
       console.log("You turned them into tiny pieces. They never saw it coming!");
     }
    break;




  default:
    console.log("I didn't understand the lingo. Let me try again, this time picking Kung-Fu, Nunchucks, lightsaber or M134!");


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

  });
});




















