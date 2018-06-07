let arr = []

let obj = {
    a: '',
    b: ''
}
obj.a = 'a'
obj.b = 'b'
arr.push(obj)
console.log(arr[0])


arr['a212'] = 3
arr['b2g2'] = 3
arr['c412'] = 3
arr.forEach(function(el) {

    console.log(el)
})