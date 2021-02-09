import 'bootstrap'
import './custom.scss'
import $ from "expose-loader?exposes=$,jQuery!jquery";
//bootstrap-icons组件
import 'bootstrap-icons/font/bootstrap-icons.css'

window.onload=function(){
    let btn=document.querySelector('button')
    btn.addEventListener('click',function(){
        $("#exampleModal").modal()
        
    })
}