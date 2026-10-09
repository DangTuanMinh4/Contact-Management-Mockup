
function chia(a, b, callback) 
{
    if (b === 0) {
        callback("Lỗi: chia cho 0", null)
    }
    else {
        callback(null, a / b)

    }
}

chia(2, 0, (error, result) => {console.log(error, result)})