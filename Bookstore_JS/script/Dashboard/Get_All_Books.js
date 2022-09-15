var bookArray;
getAllBooks();
function getAllBooks() {
    let token = localStorage.getItem('token');

    $.ajax({
        url: 'https://localhost:44327/api/Book/GetAllBooks',
        type: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        success: function (result) {
            console.log(result);
            bookArray = result.data;
            bookArray.reverse();
        },
        error: function (error) {
            console.log(error);
        }
    })
}