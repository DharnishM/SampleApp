import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RegisterController extends Controller {
  @action
  call() {
    document.getElementById('book').innerHTML="Booked";
    var mes=document.getElementById('message');
    mes.innerHTML="Your ticket has been Confirmed!!! <br>";
    var btn = document.createElement("BUTTON");
    btn.id="btn1";
    btn.innerHTML=("Print your Ticket");
    mes.appendChild(btn);
    btn.addEventListener("click",()=>{
        window.print();
    });
    console.log("hi");
  }
}