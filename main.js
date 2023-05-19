let theQuiz=document.querySelector(".quiz")
let result=document.querySelector(".result")
let exam=document.querySelector(".exam")

let answer=new XMLHttpRequest();
answer.open("GET","quiz.json")
answer.send()

answer.onreadystatechange= function(){
    if(this.status===200&&this.readyState===4){
        let myAnswer=JSON.parse(this.responseText)
        let corectOrFulse=myAnswer[ "صح او خطا"]
        
        result.onclick=function(){

            for(let i = 0; i <= corectOrFulse.length; i++){
                let allQuiz=corectOrFulse[i].quiz

                if(theQuiz.value.trim()==allQuiz.trim()){
                    if(document.querySelector(".myResult")){
                        document.querySelector(".myResult").remove()
                    }
                    let myResult=document.createElement("div")
                    myResult.className="myResult"
                    myResult.innerText=corectOrFulse[i].anser
                    exam.appendChild(myResult)
                }
            
        }
    }}}
