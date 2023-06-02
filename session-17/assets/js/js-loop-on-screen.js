let dom = document

let outputZone = dom.getElementById("output")

outputZone.innerHTML = "Hello"

let outputHTML = ""

for (let i=0; i<10; i++){
  outputHTML += `<p>Count is ${i}</p>`
}

outputZone.innerHTML=outputHTML

// Using an array to store the output
const results = new Array(20)

for (let i=0; i<10; i++){
  results[i] = `<p>With an array is ${i}</p>`
}
outputZone.innerHTML="";
for (const index in results) {
  outputZone.innerHTML+=results[index]
}


