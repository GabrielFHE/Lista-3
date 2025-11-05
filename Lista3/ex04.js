function reduceDivs(){
  const div = Array.from(document.querySelectorAll("div"))

  return div.reduce((a,b)=>{
   return a+b.textContent
  }, "")

}