<template>
    <div class="footer">
        <div class="footer-box">
            <div class="row">
                <p>Questions? Call 000-800-040-1843</p>
                <div class="col-md-3">
                    <ul>
                        <li><router-link to="/home">Home</router-link></li>
                        <li><a class="links" href="#">FAQ</a></li>
                        <li><a class="links" href="#">Investor Relations</a></li>
                        <li><a class="links" href="#">Privacy</a></li>
                        <li><a class="links" href="#">Speed Test</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul>
                        <li><a class="links" href="#">Help Center</a></li>
                        <li><a class="links" href="#">Jobs</a></li>
                        <li><a class="links" href="#">Cookie Preferences</a></li>
                        <li><a class="links" href="#">Legal Notices</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul>
                        <li><a class="links" href="#">Account</a></li>
                        <li><a class="links" href="#">Ways to Watch</a></li>
                        <li><a class="links" href="#">Corporate Information</a></li>
                        <li><a class="links" href="#">Only on Netflix</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <ul>
                        <li><a class="links" href="#">Media Centre</a></li>
                        <li><a class="links" href="#">Terms of Use</a></li>
                        <li><a class="links" href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
.footer {
    background: #000;
    padding-bottom: 70px;
}

.footer-box {
    max-width: 1000px;
    margin: 0 auto;
    color: #fff;
}

.row{
    padding-top: 70px;
}
.footer-box p{
    color: #737373;
}
ul{
    list-style: none;
}
ul li{
    margin-bottom: 16px;
}
ul li a{
    text-decoration: none;
    color: #737373;
}
</style>
