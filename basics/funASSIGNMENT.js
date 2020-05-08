const marks =[]

marks.push(80)
marks.push(89)
marks.push(50)
marks.push(99)
marks.push(97)


let totalMarks = function(marks){
    let sum =0
    for (let i =0; i< marks.length ; i++){
        sum = sum + marks[i]
    }
    return sum
}

let tMarks = totalMarks(marks)

let calPercentage = function(tMarks){
    return (tMarks/marks.length)
}
let percent = calPercentage(tMarks)
//console.log(percent)

if (percent > 90){
    console.log("GRADE ==A")
}else if (percent >80 && percent <90){
    console.log("GRADE==B")
}else if (percent > 70 && percent <80){
    console.log("GRADE==C")
}else if (percent > 60 && percent < 70){
    console.log("GRADE==D")
}else{
    console.log("FAIL")
}
