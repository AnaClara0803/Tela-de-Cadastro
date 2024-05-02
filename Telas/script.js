
//Acrescentar os "." e "-" do campo cpf
document.addEventListener("DOMContentLoaded", function() {
    let inputcpf = document.getElementById('cpf');
    inputcpf.addEventListener('keypress', () => {
      let inputlength = inputcpf.value.length;
      if (inputlength === 3 || inputlength === 7) {
        inputcpf.value += '.';
      } else if (inputlength === 11) {
        inputcpf.value += '-';
      }
    });
  });
  window.onload = function() {
    // Verifica se está na página inicial
    if (window.location.pathname === "/index.html") {
      document.getElementById("radio1").checked = true;
    } 
    // Verifica se está na página email.html
    else if (window.location.pathname === "/email.html") {
      document.getElementById("radio2").checked = true;
    } 
    // Verifica se está na página final.html
    else if (window.location.pathname === "/final.html") {  document.getElementById("radio3").checked = true;  
       confetti({
         particleCount: 200,
         spread: 70,
         origin: { x: 0, y: 1 } 
       });             
        confetti({
         particleCount: 200, 
         spread: 70, 
         origin: { x: 1, y: 1 } 
       });
    }
  };
  //(window.onload) permite a execução de código JavaScript quando uma página web é completamente carregada
  function mostrarSenha(){
    let inputPass = document.getElementById("senha");
    let bntShowPass = document.getElementById("bnt-senha");
  
    if(inputPass.type === "password"){
      inputPass.setAttribute('type', 'text');
      bntShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    }else{
      inputPass.setAttribute('type', 'password');
      bntShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
  }
  