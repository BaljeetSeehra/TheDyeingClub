const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = 
        `<div class="nav">
            <img src="images/Free_Sample_By_Wix.jpg" class="brand-logo" alt=""></img>
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search products"></input>
                            <button class="search-btn">search</button>
                        </div>
                    <a href="#"><img src="images/user.png" alt=""></img></a>
                    <a href="#"><img src="images/cart.png" alt=""></img></a>
                </div>
                </div>
                <ul class="links-container">
                <li class="link-item"><a href="#" class="link">Home</a></li>

                <li class="link-item"><a href="#" class="link">Women</a></li>

                <li class="link-item"><a href="#" class="link">Mens</a></li>

                <li class="link-item"><a href="#" class="link">Accessories</a></li>

                <li class="link-item"><a href="#" class="link">Dinning</a></li>
            </ul></> 
            `;
}
createNav();