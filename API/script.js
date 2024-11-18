fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        let store = data.map((e) => `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
            <div class="card d-flex me-3 h-100">
                <img src=${e.image} alt=${e.title} class="card-img-top pt-2" style="object-fit: contain; max-with:100%; max-height: 150px;">
               <div class="card-body">
                 <h3 class-"card-title">Title : ${e.title}</h3>
                <h3>Price : ${e.price}</h3>
                <p class="card-text"><strong>Description</strong>: ${e.description}</p>
                <p class="card-text"><strong>Category</strong>: ${e.category}</p>
               </div>
            </div>
        </div>
    `)

    document.getElementById("container").innerHTML = `
        <div class="row">
            ${store.join("")}
        </div>
    `
    })