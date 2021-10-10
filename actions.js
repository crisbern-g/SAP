let sequence_number = 1

const pcSideArrow = document.getElementById('pcSideArrow')
const marSideArrow = document.getElementById('marSideArrow')
const marValue = document.getElementById('marValue')
const marDownArrow = document.getElementById('marDownArrow')
const ramValue = document.getElementById('ramValue')
const pcValue = document.getElementById('pcValue')
const ramSideArrow = document.getElementById('ramSideArrow')
const irArrow8 = document.getElementById('irArrow8')
const irValue = document.getElementById('irValue')
const irDownArrow = document.getElementById('irDownArrow')
const controllerValue = document.getElementById('controllerValue')
const irArrow4 = document.getElementById('irArrow4')

setTimeout(()=>{pcSideArrow.classList.add('slide-right')}, 1000)

setTimeout(()=>{marSideArrow.classList.add('slide-left')}, 2000)

setTimeout(()=>{
    marValue.innerText = '0000'
    marValue.classList.add('zoom-in')
}, 3000)

setTimeout(()=>{
    marDownArrow.classList.add('slide-down')
}, 4000)

setTimeout(()=>{
    ramValue.innerText = '0000 1001'
    ramValue.classList.add('zoom-in')
    pcValue.classList.remove('zoom-in')
}, 5000)

setTimeout(()=>{
    pcValue.innerText = '0001'
    pcValue.classList.add('zoom-in')
    ramValue.classList.remove('zoom-in')
},6000)

setTimeout(()=>{
    ramValue.classList.add('slide-right')
}, 7000)

setTimeout(()=>{
    ramValue.innerText = '---- ----'
    ramSideArrow.classList.add('slide-right')
}, 8000)

setTimeout(()=>{
    irArrow8.classList.add('slide-left')
}, 9000)

setTimeout(()=>{
    irValue.innerText = '0000 1001'
    irValue.classList.add('zoom-in')
}, 10000)

setTimeout(()=>{
    irDownArrow.classList.add('slide-down')
},11000)

setTimeout(()=>{
    controllerValue.innerText = '0000'
    controllerValue.classList.add('zoom-in')
}, 12000)

setTimeout(()=>{
    irArrow4.classList.add('slide-right')
}, 13000)