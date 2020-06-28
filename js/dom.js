 const menu = [
     {
         id: 1,
         title: "buttermilk pancakes",
         category: "breakfast",
         price: 15.99,
         img: "images/img1.jpg",
         desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.`,
     },

     {
        id: 2,
        title: "Country Delight",
        category: "breakfast",
        price: 20.99,
        img: "images/img2.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`,
     },

     {
        id: 3,
        title: "Bacon Overflow",
        category: "breakfast",
        price: 8.99,
        img: "images/img3.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird.`,
     },

     {
        id: 4,
        title: "Diner Double",
        category: "lunch",
        price: 13.99,
        img: "images/img4.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats.`,
     },

     {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 22.99,
        img: "images/img5.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up.`,
     },

     {
        id: 6,
        title: "American Classic",
        category: "lunch",
        price: 12.99,
        img: "images/img6.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut.`,
     },

     {
        id: 7,
        title: "Godzilla Milkshake",
        category: "shakes",
        price: 6.99,
        img: "images/img7.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
     },

     {
        id: 8,
        title: "Oreo Dream",
        category: "shakes",
        price: 18.99,
        img: "images/img8.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.`,
     },

     {
        id: 9,
        title: "Quarantine Buddy",
        category: "shakes",
        price: 16.99,
        img: "images/img9.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
     },

     {
        id: 10,
        title: "Bison Steak",
        category: "dinner",
        price: 22.99,
        img: "images/img10.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
     },
 ];


 const sectionCenter = document.querySelector('.section-center');
 const btnsContainer = document.querySelector('.btn-container');

//load items
 window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu);
    displayMenuButtons();
 });




 function displayMenuItems(menuItems){
      let displayMenu = menuItems.map(function(item){
         //console.log(item);
         return ` <article class="menu-item">
                    <img src=${item.img} class="photo">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text">
                            ${item.desc}
                        </p>
                    </div>
                </article>`;
     });
     displayMenu = displayMenu.join('');
     sectionCenter.innerHTML = displayMenu;
 };


 function displayMenuButtons(){
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },['all']);
    
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join('');

    btnsContainer.innerHTML = categoryBtns;
    const filterBtns = btnsContainer.querySelectorAll('.filter-btn');

    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem;
                }
            });
    
            if(category === 'all'){
                displayMenuItems(menu)
            }else{
                displayMenuItems(menuCategory);
            }
        })
    })
 }