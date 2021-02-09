import 'bootstrap'
import './custom.scss'
import $ from "expose-loader?exposes=$,jQuery!jquery";
window.onload=function(){
    let btn=document.querySelector('button')
    btn.addEventListener('click',function(){
        $("#exampleModal").modal()
        
    })
}