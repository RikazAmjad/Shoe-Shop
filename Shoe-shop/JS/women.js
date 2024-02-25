// Array of objects for men's boots
const womenHeels = [
    {
        image: "../Images/Women-heel-1.png",
        id: "heel1",
        price: "$250",
        name: "heel1"
    },
    {
        image: "../Images/Women-heel-2.png",
        id: "heel2",
        price: "$280",
        name: "heel2"
    },
    {
        image: "../Images/Women-heel-3.png",
        id: "heel3",
        price: "$270",
        name: "heel3"
    },
    {
        image: "../Images/Women-heel-4.png",
        id: "heel4",
        price: "$300",
        name: "heel4"
    },
    {
        image: "../Images/Women-heel-5.png",
        id: "heel5",
        price: "$320",
        name: "heel5"
    },
    {
        image: "../Images/Women-heel-6.png",
        id: "heel6",
        price: "$250",
        name: "heel6"
    },
    {
        image: "../Images/Women-heel-7.png",
        id: "heel7",
        price: "$350",
        name: "heel7"
    },
    {
        image: "../Images/Women-heel-8.png",
        id: "heel8",
        price: "$400",
        name: "heel8"
    }
];









// .........................................................................................................\\
// Casual wears
const womenJoggers = [
    {
        image: "../Images/joggers-1.png",
        id: "Women-joggers1",
        price: "$80",
        name: "Women-joggers1"
    },
    {
        image: "../Images/joggers-2.png",
        id: "Women-joggers2",
        price: "$100",
        name: "Women-joggers2"
    },
    {
        image: "../Images/joggers-3.png",
        id: "Women-joggers3",
        price: "$90",
        name: "Women-joggers3"
    },
    {
        image: "../Images/joggers-10.png",
        id: "Women-joggers4",
        price: "$120",
        name: "Women-joggers4"
    },
    {
        image: "../Images/joggers-5.png",
        id: "Women-joggers5",
        price: "$110",
        name: "Women-joggers5"
    },
    {
        image: "../Images/joggers-11.png",
        id: "Women-joggers6",
        price: "$95",
        name: "Women-joggers6"
    },
    {
        image: "../Images/10.png",
        id: "Women-joggers7",
        price: "$85",
        name: "Women-joggers7"
    },
    {
        image: "../Images/joggers-13.png",
        id: "Women-joggers8",
        price: "$130",
        name: "Women-joggers"
    }
];




// .........................................................................................................\\

    // const menJoggerShoes = [
    //     {
    //     image: "../Images/1.png",
    //     id: "jogger1",
    //     price: "$60",
    //     name: "jogger1"
    //     },
    //     {
    //     image: "../Images/5.png",
    //     id: "jogger2",
    //     price: "$70",
    //     name: "jogger2"
    //     },
    //     {
    //     image: "../Images/6.png",
    //     id: "jogger3",
    //     price: "$80",
    //     name: "jogger3"
    //     },
    //     {
    //     image: "../Images/17.png",
    //     id: "jogger4",
    //     price: "$90",
    //     name: "jogger4"
    //     },
    //     {
    //     image: "../Images/joggers-4.png",
    //     id: "jogger5",
    //     price: "$80",
    //     name: "jogger3"
    //     },
    //     {
    //     image: "../Images/banner_image.png",
    //     id: "jogger6",
    //     price: "$80",
    //     name: "jogger3"
    //     },
    //     {
    //     image: "../Images/joggers-8.png",
    //     id: "jogger7",
    //     price: "$80",
    //     name: "jogger3"
    //     },
    //     {
    //     image: "../Images/13.png",
    //     id: "jogger8",
    //     price: "$80",
    //     name: "jogger3"
    //     }
    // ];
    





// .........................................................................................................\\







// // Array of objects for men's formal shoes
// const menFormalShoes = [
//     {
//         image: "../Images/men-formal-1.png",
//         id: "formal1",
//         price: "$120",
//         name: "formal1"
//     },
//     {
//         image: "../Images/men-formal-2.png",
//         id: "formal2",
//         price: "$150",
//         name: "formal2"
//     },
//     {
//         image: "../Images/men-formal-3.png",
//         id: "formal3",
//         price: "$130",
//         name: "formal3"
//     },
//     {
//         image: "../Images/men-formal-4.png",
//         id: "formal4",
//         price: "$160",
//         name: "formal4"
//     },
//     {
//         image: "../Images/men-formal-5.png",
//         id: "formal5",
//         price: "$140",
//         name: "formal5"
//     },
//     {
//         image: "../Images/men-formal-6.png",
//         id: "formal6",
//         price: "$170",
//         name: "formal6"
//     },
//     {
//         image: "../Images/men-formal-7.png",
//         id: "formal7",
//         price: "$180",
//         name: "formal7"
//     },
//     {
//         image: "../Images/men-formal-8.png",
//         id: "formal8",
//         price: "$200",
//         name: "formal8"
//     }
// ];




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
generateCards(womenHeels, "#Heels-row1", 0);
generateCards(womenHeels, "#Heels-row2", 1);

// Generate HTML for men's Jogger Shoes
generateCards(womenJoggers, "#Jogger-row1", 0);
generateCards(womenJoggers, "#Jogger-row2", 1);

// // Generate HTML for men's casual shoes
// generateCards(menCasualShoes, "#casual-row1", 0);
// generateCards(menCasualShoes, "#casual-row2", 1);

// // Generate HTML for men's formal shoes
// generateCards(menFormalShoes, "#formal-row1", 0);
// generateCards(menFormalShoes, "#formal-row2", 1);


