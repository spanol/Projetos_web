let img = document.querySelector('.img-responsive')
let explosao = new Audio("./assets/Sound/BOOOM.mp3")
function kaboom(){
    let texto = document.querySelector('#texto')
    
    explosao.play()
    setTimeout(()=>{
    texto.innerText = 'TSSSSSSS'
    },2000)
    setTimeout(()=>{
    img.src='./assets/img/ax.png'
    },3000)
    setTimeout(()=>{
    texto.innerText = 'BOOOM'
    img.src='./assets/img/ax2.png'
    },5000)
    setTimeout(()=>{
    img.src='./assets/img/gameover.png'
    },2000)
}