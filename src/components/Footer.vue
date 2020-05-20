<template>
    <div id="footer" class="deep-blue-bg">
        <div class="sec1">
            <div class="links">
                <ul>
                    <li>HOME</li>
                    <li>CONTACT US</li>
                    <li>ABOUT</li>
                    <li>SOLUTIONS</li>
                </ul>
            </div>
            <hr />
            <div class="address">
                <ul>
                    <li>&copy; Novus, <span>Epok Technologies</span></li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div class="scroll">
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="18" cy="18" r="17.5" fill="#1C17FF" stroke="white" />
                <path
                    d="M11.739 17.9999L12.8425 19.1034L17.2173 14.7364V24.2608H18.7825V14.7364L23.1494 19.1112L24.2608 17.9999L17.9999 11.739L11.739 17.9999Z"
                    fill="white"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
    display: flex;
}
.sec1 {
    width: 100%;
}
.links,
.address {
    max-width: 35%;
    display: block;
    margin: auto;
    padding: 20px 0;
}
.links ul,
.address ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
}
.links ul > li {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.4px;
    color: #ffffff;
}
hr {
    width: 80%;
    color: #ffffff;
}
.address ul > li > span {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.4px;
    color: #ffffff;
}
.address > ul > li {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.4px;
    color: #ffffff;
}
.scroll {
    display: flex;
}
.scroll > svg {
    align-self: center;
    margin-right: 50px;
}
</style>
