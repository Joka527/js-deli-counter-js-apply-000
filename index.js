var katzDeli=[];
var counter=0;
function takeANumber(katzDeliLine){
    katzDeliLine.push(counter);
    let string="Welcome, you are number "+counter+" in line.";
    counter++;
    return string;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    let string="Currently serving "+katzDeliLine[0]+".";
    katzDeliLine.shift();
    return string;
  }else return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length>0){
    let finalString="The line is currently: ";
    for(let i=0; i<katzDeliLine.length; i++){
      finalString+=i+1+". "+katzDeliLine[i];
      if(i+1<katzDeliLine.length)finalString+=", "
    }
    return finalString;
  }else return "The line is currently empty."
}