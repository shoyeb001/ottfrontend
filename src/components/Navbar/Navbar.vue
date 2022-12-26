<template>
    <div class="nav">
        <nav class="navbar">
            <img src="../../assets/img/logo.png" class="brand-logo" alt="">
            <ul class="nav-links">
                <li class="nav-items"><a href="#">TV</a></li>
                <li class="nav-items"><a href="#">movies</a></li>
                <li class="nav-items"><a href="#">sports</a></li>
                <li class="nav-items"><a href="#">premium</a></li>
                <li class="nav-items"><a href="#">Kids</a></li>
            </ul>
            <div class="right-container">
                <input type="text" class="search-box" placeholder="search">
                <button class="sub-btn">subscribe</button>
                <a href="#" class="login-link">login</a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style scoped>
.navbar{
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 4%;
    background: #0c111b;
    z-index: 9;
    display: flex;
    align-items: center;
}

.brand-logo{
    height: 70px;
}

.nav-links{
    margin-top: 10px;
    display: flex;
    list-style:none;
}

.nav-items a{
    text-decoration: none;
    margin-left: 20px;
    text-transform: capitalize;
    color: #fff;
    opacity: 0.9;
}

.right-container{
    display: block;
    margin-left: auto;
}

.search-box{
    border: none;
    border-bottom: 1px solid #aaa;
    background: transparent;
    outline: none;
    height: 30px;
    color:#fff;
    width: 250px;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 500;
    transition: .5s;
}

.search-box:focus{
    width: 400px;
    border-color: #1f80e0;
}

.sub-btn{
    background: #1f80e0;
    height: 30px;
    padding: 0 20px;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    margin: 0 10px;
}

.login-link{
    color: #fff;
    opacity: 0.9;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
}
</style>
