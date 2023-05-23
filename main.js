let contenerQuiz=document.querySelector(".contener-quiz")

function serach(){
    let inputQuiz=document.querySelector(".quiz").value.trim()
    // let result=document.querySelector(".result")
    let exam=document.querySelector(".exam")
    let thequiz=document.querySelectorAll(".thequiz")
    let theanser=document.querySelectorAll(".anser")
for(let i=0;i<=thequiz.length;i++){
    console.log(thequiz[i].textContent)
    if(thequiz[i].innerHTML.trim().indexOf(inputQuiz)>=0){
        thequiz[i].style.display=""
        theanser[i].style.display=""
    }else{
        thequiz[i].style.display="none"
        theanser[i].style.display="none"

    }
}}

// let answer=new XMLHttpRequest();
// answer.open("GET","quiz.json")
// answer.send()

// answer.onreadystatechange= function(){
//     if(this.status===200&&this.readyState===4){
//         let myAnswer=JSON.parse(this.responseText)
//         let corectOrFulse=myAnswer[ "صح او خطا"]

        

//             for(let i = 0; i <= corectOrFulse.length; i++){
//                 let allQuiz=corectOrFulse[i].quiz
//                 let arrarQuiz=Array.from(allQuiz)
//             }}}

