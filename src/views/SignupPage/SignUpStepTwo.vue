<template>
    <div class="signup">
        <div class="header">
            <div class="overly"></div>
            <div class="container">
                <div class="header-nav">
                    <div class="nav-container">
                        <div class="logo">
                            <img src="../../assets/img/logo.png" class="img">
                        </div>
                        <div class="nav-right">
                            <a class="btn singin">Sign In</a>
                        </div>
                    </div>
                </div>
                <div class="singin card">
                    <div class="container">
                        <div class="panel pricing-table">

                            <div class="pricing-plan">
                                <img src="https://preview.redd.it/gj1t3nckxyx61.png?auto=webp&s=a0925041ccf11f7453ba4b27cfec24afa0f34594"
                                    alt="" class="pricing-img">
                                <h2 class="pricing-header">Premium</h2>
                                <ul class="pricing-features">
                                    <li class="pricing-features-item">HD 1080P Video</li>
                                    <li class="pricing-features-item">All Content</li>
                                    <li class="pricing-features-item">Watch on Tv or Laptop</li>
                                </ul>
                                <span class="pricing-price">RS 299/Mo</span>
                                <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey"
                                    :line-items="lineItems" :success-url="successURL" :cancel-url="cancelURL"
                                    @loading="v => loading = v" />
                                <button @click="ContinueOne()" class="pricing-button">Continue</button>
                            </div>

                            <div class="pricing-plan">
                                <img src="https://preview.redd.it/gj1t3nckxyx61.png?auto=webp&s=a0925041ccf11f7453ba4b27cfec24afa0f34594"
                                    alt="" class="pricing-img">
                                <h2 class="pricing-header">Super Yearly</h2>
                                <ul class="pricing-features">
                                    <li class="pricing-features-item">HD 720P Video</li>
                                    <li class="pricing-features-item">All Content</li>
                                    <li class="pricing-features-item">Watch on Mobile</li>
                                </ul>
                                <span class="pricing-price">RS 899/Yr</span>
                                <button @click="ContinueTwo()" class="pricing-button">Continue</button>
                            </div>

                            <div class="pricing-plan">
                                <img src="https://preview.redd.it/gj1t3nckxyx61.png?auto=webp&s=a0925041ccf11f7453ba4b27cfec24afa0f34594"
                                    alt="" class="pricing-img">
                                <h2 class="pricing-header">Premium</h2>
                                <ul class="pricing-features">
                                    <li class="pricing-features-item">HD 1080P Video</li>
                                    <li class="pricing-features-item">All Content</li>
                                    <li class="pricing-features-item">Watch on Tv or Laptop</li>
                                </ul>
                                <span class="pricing-price">RS 1599/Yr</span>
                                <a @click="ContinueThree()" class="pricing-button">Continue</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
    name: "SignUpStepTwo",
    components:{
        StripeCheckout,
    },
    data() {
        this.publishableKey= "pk_test_51IfK2tSIW2IngVquO4aCYw9P6TwzoyIBiZl75euDhL7I2FaonvY5p7vDYuY88KwKISUn5cW39eYTNjfjHSTNUpbd00PA44BuxT";
        return {
            loading: false,
            lineItems: [
                {
                    price: '', // The id of the one-time price you created in your Stripe dashboard
                    quantity: 1,
                },
            ],
            successURL: 'http://localhost:5173/payment/success',
            cancelURL: 'http://localhost:5173/payment/cancel',
        };
    },
    methods: {
        ContinueOne() {
            this.lineItems[0].price='price_1Mf3WgSIW2IngVquaxY1DW06';
            localStorage.setItem("price",299);
            localStorage.setItem("valid",30);
            this.$refs.checkoutRef.redirectToCheckout();

        },
        ContinueTwo(){
            this.lineItems[0].price='price_1Mf3WgSIW2IngVquaxY1DW06';
        },
        ContinueThree(){
            this.lineItems[0].price='price_1Mf3WgSIW2IngVquaxY1DW06';
        }
    }
}
</script>

<style scoped>
.container {
    width: 400px;
}

.header {
    width: 100%;
    height: 1300px;
    background-image: url("../../assets/img/landing_bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-bottom: 8px solid #222;
}

.header .overly {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
    background-image: linear-gradient(0deg, rgba(0, 0, 0, .8) 0, transparent 60%, rgba(0, 0, 0, .8));
}

.header .header-nav {
    width: 95%;
    margin: auto;
    height: 1300px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.header .nav-container {
    display: flex;
}

.nav-right {
    width: 80%;
}

.logo {
    width: 20%;
}

.logo .img {
    max-width: 150px;
    overflow: hidden;
}

.signin {
    line-height: 1.3rem;
    float: right;
    margin-top: 23px;
    margin-right: 20px;
    background-color: #e50914;
    position: absolute;
    right: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    padding: 7px 17px;
    color: #fff;
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 500;
}

.card {
    margin-top: 75px !important;
    padding-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: transparent;
    color: #fff;
    padding-bottom: 60px;
}

.container {
    margin: 0 auto;
    padding: 50px 0 0;
    max-width: 960px;
    width: 100%;
}

.panel {
    background: #e50914;
    border-radius: 10px;
    padding: 15px 25px;
    position: relative;
    width: 100%;
    z-index: 10;
}

.pricing-table {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
}

@media (min-width: 900px) {
    .pricing-table {
        flex-direction: row;
    }
}

.pricing-table * {
    text-align: center;
    text-transform: uppercase;
}

.pricing-plan {
    border-bottom: 1px solid #e1f1ff;
    padding: 25px;
}

.pricing-plan:last-child {
    border-bottom: none;
}

@media (min-width: 900px) {
    .pricing-plan {
        border-bottom: none;
        border-right: 1px solid #e1f1ff;
        flex-basis: 100%;
        padding: 25px 50px;
    }

    .pricing-plan:last-child {
        border-right: none;
    }
}

.pricing-img {
    margin-bottom: 25px;
    max-width: 100%;
}

.pricing-header {
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
}

.pricing-features {
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 50px 0 25px;
}

.pricing-features-item {
    border-top: 1px solid #e1f1ff;
    font-size: 12px;
    line-height: 1.5;
    padding: 15px 0;
}

.pricing-features-item:last-child {
    border-bottom: 1px solid #e1f1ff;
}

.pricing-price {
    color: #fff;
    display: block;
    font-size: 32px;
    font-weight: 700;
}

.pricing-button {
    border: 1px solid #9dd1ff;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    margin: 25px 0;
    padding: 15px 35px;
    text-decoration: none;
    transition: all 150ms ease-in-out;
}

.pricing-button:hover,
.pricing-button:focus {
    background-color: #269aff;
}

.pricing-button.is-featured {
    background-color: #48aaff;
    color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
    background-color: #269aff;
}
</style>