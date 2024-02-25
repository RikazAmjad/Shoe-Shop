let images = [
    {
        name: "img1",
        price: "$200",
        id: "img1",
        img: "images/1.png"
    },
    {
        name: "img2",
        price: "$210",
        id: "img2",
        img: "../Images/5.png"
    },
    {
        name: "img3",
        price: "$200",
        id: "img3",
        img: "./images/3.png"
    },
    {
        name: "img4",
        price: "$150",
        id: "img4",
        img: "../Images/17.png"
    },
    {
        name: "img5",
        price: "$200",
        id: "img5",
        img: "../Images/13.png"
    },
    {
        name: "img6",
        price: "$110",
        id: "img6",
        img: "../Images/men-casual-4.png"
    },
    {
        name: "img7",
        price: "$120",
        id: "img7",
        img: "../Images/men-boot-3.png"
    },
    {
        name: "img8",
        price: "$150",
        id: "img8",
        img: "../Images/men-formal-1.png"
    },
    {
        name: "img9",
        price: "$350",
        id: "img9",
        img: "../Images/Women-heel-5.png"
    },
    {
        name: "img10",
        price: "$320",
        id: "img10",
        img: "../Images/Women-heel-2.png"
    },
    {
        name: "img11",
        price: "$380",
        id: "img11",
        img: "../Images/Women-heel-3.png"
    },
    {
        name: "img12",
        price: "$400",
        id: "img12",
        img: "../Images/Women-heel-4.png"
    },
    {
        name: "img13",
        price: "$350",
        id: "img13",
        img: "../Images/joggers-4.png"
    },
    {
        name: "img14",
        price: "$300",
        id: "img14",
        img: "../Images/joggers-3.png"
    },
    {
        name: "img15",
        price: "$250",
        id: "img15",
        img: "../Images/joggers-5.png"
    },
    {
        name: "img16",
        price: "$220",
        id: "img16",
        img: "../Images/joggers-9.png"
    },
    {
        name: "img17",
        price: "$80",
        id: "img17",
        img: "../Images/kids-1.png"
    },
    {
        name: "img18",
        price: "$120",
        id: "img18",
        img: "../Images/kids-2.png"
    },
    {
        name: "img19",
        price: "$100",
        id: "img19",
        img: "../Images/kids-3.png"
    },
    {
        name: "img20",
        price: "$120",
        id: "img20",
        img: "../Images/kids-4.png"
    }
];

// In this code, we first select all containers using querySelectorAll and iterate over them using forEach. Inside the loop, we calculate the starting index for images based on the container index (startIndex). Then, we extract a slice of four images from the images array using slice, starting from startIndex and ending at startIndex + 4. Finally, we iterate over these container-specific images and populate each container with four cards, each representing an image.
let containers = document.querySelectorAll("[id^='imageContainer']");

// Iterate over each container
containers.forEach((container, index) => {
    // Calculate the starting index for images array based on container index
    let startIndex = index * 4;
    // Get the slice of images for this container
    let containerImages = images.slice(startIndex, startIndex + 4);

    // Iterate over the images for this container
    containerImages.forEach(image => {
        container.innerHTML += `
            <div class="card">
                <div class="label">New</div>
                <div class="img"><img src="${image.img}" alt="${image.name}"></div>
                <div class="card-bottom animate__flipInX">
                    <p>${image.price}</p>
                    <a href="view.html?id=${image.id}&img=${image.img}&name=${image.name}&price=${image.price}" class="view" style="margin-left: 15px;"><span style="margin-right: 5px;">View</span><i class="fa-solid fa-eye"></i></a>
                    <a href="wish.html?id=${image.id}&img=${image.img}&name=${image.name}&price=${image.price}"  class="addToWish" style="width: 100px;"><span style="margin-right: 5px;">Wish List</span><i class="fa-solid fa-heart"></i></a>
                </div>
            </div>
            `;
    });
});


