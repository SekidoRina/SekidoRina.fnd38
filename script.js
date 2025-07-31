'use strict'
// 1行目に記載している 'use strict' は削除しないでください


// let list = [code,main,sub1,sub2,sub3]
   const A = document.getElementsByTagName("h1")[0]
   console.log(A)
   let neko = document.createElement("p")
   neko.textContent = "neko"
   console.log(neko)
//    const rowNum =document.getElementsByClassName("inputRow")
//    console
//     const cells = rowNum[rowNum.length-1].cells
//     const firstcell = cells[0].querySelector("input")
//     const shisancode = firstcell.value
//     shisancode = ""


function addRow(){
    let rowNum =document.getElementsByClassName("inputRow");
    let inputRow = rowNum[rowNum.length-1];
    const cells = rowNum[rowNum.length-1].cells;
    const firstcell = cells[0].querySelector("input");
    const shisancode = firstcell.value;
    const newRow = rowNum[rowNum.length-1].cloneNode(true);
    const newcells =newRow.cells;
    for (const num of newcells){
    num.querySelector("input").value=""}

    if ( shisancode !== ""){
        console.log(newRow)
        inputRow.parentNode.insertBefore(newRow,inputRow.nextSibling);
        document.getElementsByClassName("inputRow")[document.getElementsByClassName("inputRow").length - 1].addEventListener("input",addRow)
}   
}

document.getElementsByClassName("inputRow")[document.getElementsByClassName("inputRow").length - 1 ].addEventListener("input",addRow)

let rowNum =document.getElementsByClassName("inputRow");
    let LastRow = rowNum[rowNum.length-1];
    const newRow = LastRow.cloneNode(true);
    console.log(newRow)
    const newcells =newRow.cells;
    console.log(newcells)

    for (const cell of newcells){ 
    cell.querySelector("input").value=""
    console.log(cell.querySelector("input").value)}

    LastRow.parentNode.insertBefore(newRow,LastRow.nextSibling);
    document.getElementsByClassName("inputRow")[document.getElementsByClassName("inputRow").length - 1].addEventListener("input",addRow2)

function addRow2(){

    let rowNum =document.getElementsByClassName("inputRow");
    let LastRow = rowNum[rowNum.length-1];
    const newRow = LastRow.cloneNode(true);
    console.log(newRow)
    const newcells =newRow.cells;
    console.log(newcells)

    for (const cell of newcells){ 
    cell.querySelector("input").value = ""}

    LastRow.parentNode.insertBefore(newRow,LastRow.nextSibling);
    document.getElementsByClassName("inputRow")[document.getElementsByClassName("inputRow").length - 1].addEventListener("input",addRow2)
}   

const tableBody = document.querySelector("#input")

function csvpaste(e){
  const pasetedText = e.clipboardData.getData("text")
  console.log(pasetedText)
  const row = pasetedText.split("\n").filter(function(mini){
    return mini.trim() !== ""
  })
  console.log(row)
  const table = row.map(function(element){return element.split("\t").map(function(mini){
    return mini.trim()
  })})
  console.log(table)
  let k = 0
  let rowNum = tableBody.querySelectorAll(".inputRow")[k].cells[0].querySelector("input").value
  for (k = 0; rowNum !== ""; k ++){
     rowNum = tableBody.querySelectorAll(".inputRow")[k].cells[0].querySelector("input").value
  } 
  console.log(k)
  
  const pasetedcell = e.target;
  console.log(pasetedcell.value)
  pasetedcell.value = ""
  console.log(pasetedcell.value)
  
  for (let i = 0; i < table.length ; i ++){
    const element = table[i];
    console.log(element)
    for (let j = 0 ; j < element.length ; j ++){
       const data = element[j]
       console.log(data)
       console.log(tableBody.querySelectorAll(".inputRow")[k+i].cells[j])
          tableBody.querySelectorAll(".inputRow")[k+i].cells[j].querySelector("input").value = data
       }addRow2()
    }
  }

tableBody.addEventListener("paste",csvpaste)




// let setubi = document.getElementsByClassName("inputRow")
//     console.log(setubi)
//     for (let k = 0;k < setubi.length;k++){
//         let setubivalue = setubi[k]
//         console.log(setubivalue)
//         for (let i = 0;i < setubivalue.length;i++){
//          let value = setubivalue[i].querySelector("input").value
//          console.log(value)
//         if (i === 0){
//             const code = document.createElement("tr")
//             code.textContent = value
//             console.log(code)
//             document.getElementById("main").appendChild(code)
// function(data)


function makelist(){
    let setubi = document.getElementsByClassName("inputRow")
    console.log(setubi)
    for (let k = 0;k < setubi.length;k++){
        let setubivalue = setubi[k]
        console.log(setubivalue)
        for (let i = 0;i < setubivalue.cells.length;i++){
         let value = setubivalue.cells[i].querySelector("input").value
         console.log(value)
         if(value !== ""){
        if (i === 0){
            const code = document.createElement("tr")
            code.textContent = value
            console.log(code)
            if(setubivalue.cells[1].querySelector("input").value === "大"){
               document.getElementById("main").appendChild(code)
            } else if (setubivalue.cells[1].querySelector("input").value === "小"){
               document.getElementById("main-s").appendChild(code.cloneNode(true))
            }
            document.getElementById("sub").appendChild(code.cloneNode(true))
            document.getElementById("sub-2").appendChild(code.cloneNode(true))
            document.getElementById("subcode").appendChild(code.cloneNode(true))
            console.log(document.getElementById("main").cells)

        } else if (i === 2){
            if(setubivalue.cells[1].querySelector("input").value === "大"){
            const code = document.createElement("th")
            code.textContent = value
            console.log(code)
            document.getElementById("main").getElementsByTagName("tr")[k+1].appendChild(code)
           } else if (setubivalue.cells[1].querySelector("input").value === "小"){
            const code = document.createElement("th")
            code.textContent = value
            console.log(code)
            document.getElementById("main-s").getElementsByTagName("tr")[k+1].appendChild(code)
           }
               
        } else if (i === 3){
            if(setubivalue.cells[1].querySelector("input").value === "大"){
             const code = document.createElement("th")
             code.textContent = value
             console.log(code)
             document.getElementById("main").getElementsByTagName("tr")[k+1].appendChild(code)
           } else if (setubivalue.cells[1].querySelector("input").value === "小"){
             const code = document.createElement("th")
             code.textContent = value
             console.log(code)
             document.getElementById("main-s").getElementsByTagName("tr")[k+1].appendChild(code)
           }

        } else if (i === 4){
            const code = document.createElement("th")
            code.textContent = value
            console.log(code)
            document.getElementById("sub").getElementsByTagName("tr")[k+1].appendChild(code)
        
        } else if (i === 5){
            const code = document.createElement("th")
            code.textContent = value
            console.log(code)
            document.getElementById("sub-2").getElementsByTagName("tr")[k+1].appendChild(code)

        } else if (i === 6){
          const code = document.createElement("th")
          code.textContent = value
          console.log(code)
          document.getElementById("subcode").getElementsByTagName("tr")[k+1].appendChild(code)

}   console.log("aaa")
}
}
}
}



document.getElementById("button2").addEventListener("click",makelist)
