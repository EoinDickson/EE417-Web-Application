
const galleryData = [
    { title: "Card1", imageSrc: "image_1.webp", description: "Lorem ipsum dolor sit amet", like: true },
    { title: "Card2", imageSrc: "image_2.jpeg", description: "Consectetur adipiscing elit", like: false },
    { title: "Card3", imageSrc: "image_3.jpeg", description: "Sed do eiusmod tempor incididunt", like: true },   
    { title: "Card4", imageSrc: "image_1.webp", description: "Lorem ipsum dolor sit amet", like: true },
    { title: "Card5", imageSrc: "image_2.jpeg", description: "Consectetur adipiscing elit", like: false },
    { title: "Card6", imageSrc: "image_3.jpeg", description: "Sed do eiusmod tempor incididunt", like: true }

];

const container = document.getElementById("gallery_grid");

galleryData.forEach((card) => {
    let heart = "fa fa-heart-o";
    if(card.like == true){
        heart = "fa fa-heart"
    }
    const cardHTML = `       
        <div class="card">
            <div class="card-image">
                <img src="imgs/${card.imageSrc}" alt="image">
            </div>
            <div class="container">
                <h4 style="display: inline-block;"><b>${card.title}</b></h4>
                <i onclick="toggle_like('${card.title}')" id="${card.title}" style="display: inline-block; float: right;" class="${heart}"></i>
                <p>${card.description}</p>

            </div>
        </div>
    `;
    container.innerHTML += cardHTML;
});


function toggle_like(title){
    var like = document.getElementById(title);

    if(like.classList.contains("fa-heart-o")){
        like.classList.remove("fa-heart-o");
        like.classList.add("fa-heart");

    }
    else{
        like.classList.remove("fa-heart");
        like.classList.add("fa-heart-o");

    }
}
