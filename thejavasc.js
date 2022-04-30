let icon=document.getElementById("icon")
let mysong=document.getElementById("song")
icon.onclick=function(){
  if(mysong.paused){
      bubbles()
      mysong.play()
      icon.src="images/pause.jpg"
  }
  else{
      bubbles()
      mysong.pause()
      icon.src="images/8788.png"
  }
}
function bubbles(){
    let count=200
    let section=document.querySelector("section")
    let i=0
    while(i<count){
        let bubble=document.createElement("i")
        let x=Math.floor(Math.random()* window.innerWidth)
       let y=Math.floor(Math.random()*window.innerHeight)
       let size=Math.random()*10
       bubble.style.left=x+"px";
       bubble.style.top=y+"px";
       bubble.style.width=1+size+"px";
       bubble.style.height=1+size+"px"
       section.appendChild(bubble);
       i++

        
       

    }
}

