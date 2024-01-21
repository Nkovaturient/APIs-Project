// CAT FACT API

let btns=document.querySelector("#btns");

btns.addEventListener("click", async ()=>{
   let blockquote= document.querySelector("#facts");
   let catFact= await getFact(); 
   console.log(catFact);
   blockquote.innerText= catFact;
   
});

let factUrl= "https://catfact.ninja/fact";

async function getFact(){ 
   try{
      let res= await axios.get(factUrl); 
      return res.data.fact;
      
   }
   catch(e){
      console.log("ERROR 404: ", e);
      return "No Fact Found";
   }
}





//random activity api


let btn=document.querySelector("#act");


btn.addEventListener("click", async ()=>{ //isko bhi async func to retrieve data from async getActivity
   let p= document.querySelector("#activity");
   let facts= await getActivity(); //async func hai
   console.log(facts);
   p.classList.add(".act");
   p.innerText= facts;
   
});

let urll= "https://www.boredapi.com/api/activity";

async function getActivity(){ 
   try{
      let res= await axios.get(urll); //returns promise
      return res.data.activity;
      
   }
   catch(error){
      console.log("ERROR 404: ", error);
      return "No Activity Found";
   }
}


//RANDOM JOKES API
let btnn=document.querySelector("#dimg");
let blockquote= document.querySelector(".jokes");
let ul=document.querySelector(".twopart");

let url3= "https://v2.jokeapi.dev/joke/ANY?safe-mode";

btnn.addEventListener("click", async()=>{
   console.log("button clicked");

  getJokes();
});


async function getJokes(){
   let res3= await axios.get(url3);
   let resDatajoke= res3.data;
   console.log(resDatajoke);

   let list1=document.querySelector(".joke1");
   let list2=document.querySelector(".joke2");
   ul.innerHTML= "";
   
   if(resDatajoke.type == "single"){
      console.log(resDatajoke.joke);
      blockquote.innerHTML= resDatajoke.joke;
   } else if(resDatajoke.type == "twopart"){
      console.log(resDatajoke.setup);
      list1.innerHTML= resDatajoke.setup;
      console.log(resDatajoke.delivery);
      list2.innerHTML= resDatajoke.delivery;

      ul.appendChild(list1);
      ul.appendChild(list2);

   }


}
