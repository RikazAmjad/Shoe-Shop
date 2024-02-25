// Array of objects for men's boots
const menBoots = [
    {
        image: "../Images/men-boot-1.png",
        id: "boot1",
        price: "$250",
        name: "boot1"
    },
    {
        image: "../Images/men-boot-2.png",
        id: "boot2",
        price: "$280",
        name: "boot2"
    },
    {
        image: "../Images/men-boot-3.png",
        id: "boot3",
        price: "$270",
        name: "boot3"
    },
    {
        image: "../Images/men-boot-4.png",
        id: "boot4",
        price: "$300",
        name: "boot4"
    },
    {
        image: "../Images/men-boot-5.png",
        id: "boot5",
        price: "$320",
        name: "boot5"
    },
    {
        image: "../Images/men-boot-6.png",
        id: "boot6",
        price: "$250",
        name: "boot6"
    },
    {
        image: "../Images/men-boot-7.png",
        id: "boot7",
        price: "$350",
        name: "boot7"
    },
    {
        image: "../Images/men-boot-8.png",
        id: "boot8",
        price: "$400",
        name: "boot8"
    }
];







// // Function to generate HTML for a card
// let containers = document.querySelectorAll("[id^='boots-row']");
// // Iterate over each container
// containers.forEach((container, index) => {
//     // Calculate the starting index for menBoots array based on container index
//     let startIndex = index * 4;
//     // Get the slice of menBoots for this container
//     let containerBoots = menBoots.slice(startIndex, startIndex + 4);
//     // Iterate over the menBoots for this container
//     containerBoots.forEach(boot => {
//         container.innerHTML +=  `
//         <div class="card">
//             <div class="img"><img src="${boot.image}" alt="${boot.name}"></div>
//             <div class="card-bottom animate__flipInX">
//                 <p>${boot.price}</p>
//                 <a href="view.html?id=${boot.id}&img=${boot.image}&price=${boot.price}&name=${boot.name}" class="view" style="margin-left: 15px;"><span style="margin-right: 5px;">View</span><i class="fa-solid fa-eye"></i></a>
//                 <a href="wish.html?id=${boot.id}&img=${boot.image}&price=${boot.price}&name=${boot.name}" class="addToWish" style="width: 100px;"><span style="margin-right: 5px;">Wish List</span><i class="fa-solid fa-heart"></i></a>
//             </div>
//         </div>
//     `;
//     });
// });








// .........................................................................................................\\
// Casual wears
const menCasualShoes = [
    {
        image: "../Images/men-casual-1.png",
        id: "shoe1",
        price: "$80",
        name: "shoe1"
    },
    {
        image: "../Images/men-casual-2.png",
        id: "shoe2",
        price: "$100",
        name: "shoe2"
    },
    {
        image: "../Images/men-casual-3.png",
        id: "shoe3",
        price: "$90",
        name: "shoe3"
    },
    {
        image: "../Images/men-casual-4.png",
        id: "shoe4",
        price: "$120",
        name: "shoe4"
    },
    {
        image: "../Images/men-casual-5.png",
        id: "shoe5",
        price: "$110",
        name: "shoe5"
    },
    {
        image: "../Images/men-casual-6.png",
        id: "shoe6",
        price: "$95",
        name: "shoe6"
    },
    {
        image: "../Images/men-casual-7.png",
        id: "shoe7",
        price: "$85",
        name: "shoe7"
    },
    {
        image: "../Images/men-casual-8.png",
        id: "shoe8",
        price: "$130",
        name: "shoe8"
    }
];




// .........................................................................................................\\

    const menJoggerShoes = [
        {
        image: "../Images/1.png",
        id: "jogger1",
        price: "$60",
        name: "jogger1"
        },
        {
        image: "../Images/5.png",
        id: "jogger2",
        price: "$70",
        name: "jogger2"
        },
        {
        image: "../Images/6.png",
        id: "jogger3",
        price: "$80",
        name: "jogger3"
        },
        {
        image: "../Images/17.png",
        id: "jogger4",
        price: "$90",
        name: "jogger4"
        },
        {
        image: "../Images/joggers-4.png",
        id: "jogger5",
        price: "$80",
        name: "jogger3"
        },
        {
        image: "../Images/banner_image.png",
        id: "jogger6",
        price: "$80",
        name: "jogger3"
        },
        {
        image: "../Images/joggers-8.png",
        id: "jogger7",
        price: "$80",
        name: "jogger3"
        },
        {
        image: "../Images/13.png",
        id: "jogger8",
        price: "$80",
        name: "jogger3"
        }
    ];
    





// .........................................................................................................\\







// Array of objects for men's formal shoes
const menFormalShoes = [
    {
        image: "../Images/men-formal-1.png",
        id: "formal1",
        price: "$120",
        name: "formal1"
    },
    {
        image: "../Images/men-formal-2.png",
        id: "formal2",
        price: "$150",
        name: "formal2"
    },
    {
        image: "../Images/men-formal-3.png",
        id: "formal3",
        price: "$130",
        name: "formal3"
    },
    {
        image: "../Images/men-formal-4.png",
        id: "formal4",
        price: "$160",
        name: "formal4"
    },
    {
        image: "../Images/men-formal-5.png",
        id: "formal5",
        price: "$140",
        name: "formal5"
    },
    {
        image: "../Images/men-formal-6.png",
        id: "formal6",
        price: "$170",
        name: "formal6"
    },
    {
        image: "../Images/men-formal-7.png",
        id: "formal7",
        price: "$180",
        name: "formal7"
    },
    {
        image: "../Images/men-formal-8.png",
        id: "formal8",
        price: "$200",
        name: "formal8"
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
generateCards(menBoots, "#boots-row1", 0);
generateCards(menBoots, "#boots-row2", 1);

// Generate HTML for men's casual shoes
generateCards(menCasualShoes, "#casual-row1", 0);
generateCards(menCasualShoes, "#casual-row2", 1);

// Generate HTML for men's formal shoes
generateCards(menFormalShoes, "#formal-row1", 0);
generateCards(menFormalShoes, "#formal-row2", 1);


// Generate HTML for men's Jogger Shoes
generateCards(menJoggerShoes, "#jogger-row1", 0);
generateCards(menJoggerShoes, "#jogger-row2", 1);