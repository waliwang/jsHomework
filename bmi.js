// BMI的定義是
// 體重除以身高的平方
// 以公斤/平方公尺為單位表示
// 由體重（公斤）和身高（公尺）

function bmiCalculator(height, weight) {
  var height = height * 0.01
  var weight = weight
  var bmi = weight / (height **2)
  return Math.floor(bmi * 10) / 10
}
  
//   // 身高 170 公分、體重 65 公斤
  console.log(bmiCalculator(170, 65))  // 印出 22.4
