export const addBtnSound = () =>{
    const btns = document.querySelectorAll("#btn1");
    const audio = new Audio("https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Button%20Switch%20Click%201/ES_Button%20Switch%20Click%201.mp3")

    btns.forEach((btn)=>{
      (btn as HTMLButtonElement).onclick = () =>{
        audio.play();
      }
    })
}
