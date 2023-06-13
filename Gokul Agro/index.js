// mathc the links
// let links = document.links;
// let mylink = "https://web.whatsapp.com/";
// let i;
// for(i = 0; i <links.length;i++)
//   {
//     if(links[i].href == mylink)
//        console.log(links[i].href);
//        console.log('');
//   }

// traget three ships by random location
//   let loc1 = Math.floor((Math.random()*10)+1);
//   let loc2 = Math.floor((Math.random()*10)+1);
//   let loc3 = Math.floor((Math.random()*10)+1);
//   let hit = 0;
//   let i = 0;
//   let counter = true;
//   let guess;
  
//   while (counter) {
//     guess = Number(prompt("Enter your guess"));
//     if (guess <= 0 || guess > 16)
//       alert("Enter a valid number");
//     else {
//       i++;
//       if (guess == loc1) 
//       {
//         hit++;
//         loc1 = 0;
//       }
//      if (guess == loc2) 
//      {
//         hit++;
//         loc2 = 0;
//       }
      
//       if (guess == loc3) 
//       {
//         hit++;
//         loc3 = 0;
//       }
//     }

//     if (hit == 3)
//       counter = false;

//   }

//   alert("Total count ="+i);


// check the Number?
// let elem = document.getElementById('search');
// elem.setAttribute("value","search");
// let att = elem.getAttribute('value');
// console.log(validatation('112-4355'));
// function validatation(number)
// {
//   if(number.length != 8)
//   {
//     console.log(number)
//     return false;
//    }
//    else
//    {
//      for(let i = 0;i < number.length; i++ )
//      {
//        if(i == 3)
//        {
//          if(number[i] !=  '-')
//          return false;
//        }
       
//        else if (isNaN(number[i]))
//        {
//         return false;
//        }
//       }
//       return true;
//    }
// }


function hfun(id)
{
  let home = document.getElementById(id);
  home.style = "color: rgb(235,220,220); text-decoration: underline;";
}
  
function hout(id)
{
   let home = document.getElementById(id);
   home.style = "color: snow; text-decoration: none";
}
