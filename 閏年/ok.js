var year = 2001

if(year % 4 != 0 || year % 100 !=0 && year % 400 == 0){
    console.log("不是閏年")
} else {
    console.log("是閏年")
} 