// Array of objects for men's boots
const kidsShoe = [
    {
        image: "../Images/kids-1.png",
        id: "kids1",
        price: "$250",
        name: "kids1"
    },
    {
        image: "../Images/kids-2.png",
        id: "kids2",
        price: "$280",
        name: "kids2"
    },
    {
        image: "../Images/kids-3.png",
        id: "kids3",
        price: "$270",
        name: "kids3"
    },
    {
        image: "../Images/kids-4.png",
        id: "kids4",
        price: "$300",
        name: "kids4"
    }
];





// .........................................................................................................\\





function generateCards(shoeArray, containerQuerySelector, rowIndex) {
    const container = document.querySelector(containerQuerySelector);
    const startIndex = rowIndex * 4;
    const endIndex = startIndex + 4;
    const containerShoes = shoeArray.slice(startIndex, endIndex);
    
        containerShoes.forEach((shoe) => {
        container.innerHTML += `
            <div class="card">
                <div class="img"><img src="${shoe.image}" alt="${shoe.name}"></div>
                <div class="card-bottom animate__flipInX">
                    <p>${shoe.price}</p>
                    <a href="view.html?id=${shoe.id}&img=${shoe.image}&price=${shoe.price}&name=${shoe.name}" class="view" style="margin-left: 15px;"><span style="margin-right: 5px;">View</span><i class="fa-solid fa-eye"></i></a>
                    <a href="wish.html?id=${shoe.id}&img=${shoe.image}&price=${shoe.price}&name=${shoe.name}" class="addToWish" style="width: 100px;"><span style="margin-right: 5px;">Wish List</span><i class="fa-solid fa-heart"></i></a>
                </div>
            </div>
        `;
        });
    }


  // Generate HTML for men's boots
generateCards(kidsShoe, "#kids-row1", 0);
generateCards(kidsShoe, "#kids-row2", 1);



