//1
var human = ['name', 'John', 'lastname', 'Black', 'age', '23' ]
var object = {}

for (var i = 0; i < human.length;) {
    var objectKey = human[i]
    var keyValue = human[i + 1]
    object[objectKey] = keyValue
    i += 2

}

console.log(object)

//2

function makeAverageMean(...number) {
    var someNumbers = 0
    for (var i = 0; i < number.length; i++) {
        someNumbers += number[i]
    }
    var avarageMean = someNumbers / number.length
    return avarageMean
}

console.log(makeAverageMean(17,17,4,6))

//3

var name = 'Zirek'
function getName(value){
    return typeof value
}

console.log(getName(name))

//4

var plusBtn = document.querySelector('.plus')
var counter = document.querySelector('.counter')
var minusBtn = document.querySelector('.minus')
var count = 0

plusBtn.addEventListener('click', function (){
    count++
    counter.value = count
})

minusBtn.addEventListener('click', function (){
    count--
    counter.value = count
})
