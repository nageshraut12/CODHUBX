const categories = [
"IDE","Compiler","Framework","Learning","Online Compiler","Library","Tool"
];

const languages = [
"JavaScript","Python","Java","C++","C","HTML","CSS","Go","Rust","PHP","C#"
];

function getRandomLanguages(){
let shuffled = [...languages].sort(()=>0.5-Math.random());
return shuffled.slice(0, Math.floor(Math.random()*3)+1);
}

let platforms = [];

for(let i=1;i<=5000;i++){
platforms.push({
id:i,
name:"DevPlatform "+i,
category:categories[Math.floor(Math.random()*categories.length)],
languages:getRandomLanguages(),
description:"Powerful development platform "+i,
url:"https://example.com/"+i
})
}

module.exports = platforms;
