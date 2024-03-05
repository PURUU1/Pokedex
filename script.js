let input = document.querySelector('.input');
let btn = document.querySelector('.sbtn');

var name =input.value.toLowerCase();

var name1 = document.getElementById('name');
var weight = document.getElementById('weight')
var experience = document.getElementById('experience')
var height = document.getElementById('height')
var types1 = document.getElementById('type1')
var types2 = document.getElementById('type2')

var description = document.getElementById('description')
var stat1 = document.getElementById('stat1')
var stat2 = document.getElementById('stat2')
var stat3 = document.getElementById('stat3')
var stat4 = document.getElementById('stat4')
var stat5 = document.getElementById('stat5')




btn.addEventListener("click", () => {
  var name = input.value.toLowerCase().trim();
  name1.innerHTML = name;
  console.log(name);

  

  let img = document.querySelector('.pokeimg'); // Corrected selection
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then(data => {
      /////
    console.log(Response)

//img
      let imgsrc = data.sprites.front_default;
      let img2 = `https://img.pokemondb.net/artwork/${name}.jpg`;


    img.src = img2;
      


      

      console.log("name:",data.name);
      /////
      
      var types1 = document.getElementById('type1')
      var types2 = document.getElementById('type2')

      
      var stat1 = document.getElementById('stat1')
      var stat2 = document.getElementById('stat2')
      var stat3 = document.getElementById('stat3')
      var stat4 = document.getElementById('stat4')
      var stat5 = document.getElementById('stat5')

      //weight
      console.log("weight:",data.weight);
      let we = data.weight;
      weight.innerHTML = `<span><h4>weight </h4><h4>${we}</h4></span>`

      //experinec
      console.log("Experience",data.base_experience);
      // experience.innerHTML = "Experience: " + data.base_experience;
      let ex =data.base_experience;
      experience.innerHTML = `<div class="pb"><div><img src="exp.png" id="exp"></div><h5>Experience</h5><progress value="${ex}" max="100" ></progress><h5>${ex}</h5> </div>`
      //height
      // console.log("height:",data.height);
      let he = data.height;
      height.innerHTML = `<span><h4>Height </h4><h4>${he} CM</h4></span>`
      // height.innerHTML = "height: " + data.height;
///
      fetch(data.species.url)
      .then(response => response.json())
      .then(speciesData => {
        // Extract description text
        console.log(speciesData)
        let descriptionText = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text;
        console.log("Description:", descriptionText);
        description.innerHTML = descriptionText;
      })
      .catch(error => {
        console.error("Error fetching species data:", error);
      });
      //stats
      
      
      // stat1.innerHTML = data.stats[0].stat.name + ":" + data.stats[0].base_stat
      
      let s1 = data.stats[0].base_stat;
      let s12 = data.stats[0].stat.name;
      stat1.innerHTML = `<div class="pb"><div><img src="heart.png" id="exp"></div><h5>${s12}</h5><progress value="${s1}" max="100" ></progress><h5>${s1}</h5></div>`
      
      // stat2.innerHTML = data.stats[1].stat.name + ":" + data.stats[1].base_stat
      let s2 = data.stats[1].base_stat;
      let s22 = data.stats[1].stat.name;
      stat2.innerHTML = `<div class="pb"><div><img src="attack.png" id="exp"></div><h5>${s22}</h5><progress value="${s2}" max="100" ></progress><h5>${s2}</h5></div>`
      

      let s0 = data.stats[2].base_stat;
      let s02 = data.stats[2].stat.name;
      stat3.innerHTML = `<div class="pb"><div><img src="defence.png" id="exp"></div><h5>${s02}</h5><progress value="${s0}" max="100" ></progress><h5>${s0}</h5></div>`
      
      // stat3.innerHTML = data.stats[3].stat.name,":",data.stats[3].base_stat;  
      let s3 = data.stats[3].base_stat;
      let s32 = data.stats[3].stat.name;
      stat4.innerHTML = `<div class="pb"><div><img src="skull.png" id="exp"></div><h5>${s32}</h5><progress value="${s3}" max="100" ></progress><h5>${s3}</h5></div>`
      
      // stat4.innerHTML = data.stats[3].stat.name + ":" + data.stats[3].base
      // let s4 = data.stats[4].base_stat;
      // let s42 = data.stats[4].stat.name;
      // stat5.innerHTML = `<div class="pb"><div><img src="speed-1.png" id="exp"></div><h5>${s42}</h5><progress value="${s4}" max="100" ></progress><h5>${s4}</h5></div>`

      
      
      // stat5.innerHTML = data.stats[4].stat.name + ":" + data.stats[4].base_stat
      let s5 = data.stats[5].base_stat;
      let s52 = data.stats[5].stat.name;
      stat5.innerHTML = `<div class="pb"><div><img src="speed-1.png" id="exp"></div><h5>${s52}</h5><progress value="${s5}" max="100" ></progress><h5>${s5}</h5></div>`
      
      
      
      //type
      
      

      // types1.innerHTML = "types: " + data.types[0].type.name;
      let t1 = data.types[0].type.name;
      types1.innerHTML = `<span><h4>Type </h4><h4>${t1} </h4></span>`
      

      // types2.innerHTML = "types: " + data.types[1].type.name;
      let t2 = data.types[1].type.name;
      types2.innerHTML = `<span><h4>Type </h4><h4>${t2} </h4></span>`

      
  

      //disc
    

    })
  
    
    .catch(error => {
      console.error("Error is:", error);
      
      img.src= imgsrc;
      types2.innerHTML = ''
      types2.display = 'none';
      
    });
});