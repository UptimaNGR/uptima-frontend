<template>
    <div id="nav">
        <div class="nav font">
            <div class="logo">
                <img src="../assets/images/svg/logo.svg" alt="logo" />
            </div>
            <div class="routes">
                <div class="links">
                    <ul class="link">
                        <li><router-link to="/">HOME</router-link></li>
                        <li><router-link to="#">ABOUT</router-link></li>
                        <li><router-link to="/solutions">SOLUTIONS</router-link></li>
                    </ul>
                </div>
                <div class="buttons">
                    <ul>
                        <li>
                            <router-link to="#"><button class="login">Login</button></router-link>
                        </li>
                        <li>
                            <router-link to="#"
                                ><button class="try deep-blue-bg">TRY FOR FREE</button></router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
    padding: 20px 100px;
}
.nav {
    display: flex;
    justify-content: space-between;
}
.routes {
    display: flex;
    align-items: center;
}
ul {
    display: flex;
}
li {
    list-style: none;
    margin-left: 40px;
}
.link li a {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
}
.link li a:hover {
    border-bottom: 4px solid #360efc;
}
.link > li > .router-link-exact-active {
    border-bottom: 4px solid #360efc;
}
a {
    text-decoration: none;
    cursor: pointer;
}
button {
    cursor: pointer;
}
.login {
    padding: 10px 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.4px;
    color: #000000;
    background: transparent;
    border: 2px solid #f9bc0a;
    box-sizing: border-box;
    border-radius: 5px;
}
.try {
    padding: 10px 20px;
    border-radius: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.4px;
    color: #ffffff;
    border: 1px solid #360efc;
}
</style>
