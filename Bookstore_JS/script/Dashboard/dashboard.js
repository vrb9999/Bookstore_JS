function displayAllBooks(Booksdata) {
    let counter = 0;
    for (let i = 0; i < Booksdata.length; i++) {
      counter++;
    }
    document.getElementById('books-count').innerHTML=`(${counter} Items)`;
    document.getElementById('display').innerHTML = Booksdata.map((Book) =>
        `<div class="view-book">
        <div class="displayBook">
            <div class="display-content">
                <div class="book-img">
                    <img id="b-img" src="${Book.bookImg}" alt="Book image">
                </div>

                <div class="book-title">
                    <p id="b-title">${Book.bookName}</p>
                </div>

                <div class="book-author">
                    <p id="b-byauthor">by</p>
                    <p id="b-author">${Book.authorName}</p>
                </div>

                <div class="book-rating">
                    <div class="dr">
                        <p id="b-rating">${Book.avgRating}</p>
                        <i><img src="../../assets/Dashboard/star.svg"></i>
                    </div>
                    <p id="b-rcount">(${Book.ratingCount})</p>
                </div>

                <div class="book-price">
                    <p id="b-original">Rs. ${Book.discountPrice}</p>
                    <a href="#" id="b-discount">Rs. ${Book.originalPrice}</a>
                </div>
            </div>
        </div>

        <div class="quick-view">
            <a id="quick-view" href="#">Quick View</a>
        </div>
    </div>
    `     
).join(' ');
};