<script>
export default {
  name: "navMobile",
  data(){
    return{
      mobileMenu : false
    }
  },
  methods:{
    closeMenuOutside(){
      this.mobileMenu = false;
      window.removeEventListener("click", this.closeMenuOutside);

    },
    displayMenu(event){
      event.stopPropagation();
      this.mobileMenu = !this.mobileMenu;

      if (this.mobileMenu){
        window.addEventListener("click", this.closeMenuOutside)
      }else{
        window.removeEventListener("click", this.closeMenuOutside)
      }
    }
  }
}
</script>

<template>
  <div class="navPC">
    <div class="navMobile">
      <img class="logo" src="@/assets/logo.png" alt="logo">
      <img class="menuLogo" @click="displayMenu($event)" src="@/assets/burger-blanc.png" alt="menu">
    </div>
    <nav v-show="mobileMenu">
      <router-link to="/">
        <div class="onglet"> 🏠 Accueil </div>
      </router-link>
      <router-link to="/readme">
        <div class="onglet">📄 Générateur de README</div>
      </router-link>
      <router-link to="/git">
        <div class="onglet">
          🔀 Aide Git
        </div>
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
.navMobile{
  display:flex;
  justify-content: space-between;
  padding-top : 15px;
  padding-bottom : 10px;
  position: sticky;
  top:0;
}
.logo{
  display: block;
  width:15%;
  max-width: 80px;
  margin-left: 15px;
}
.menuLogo{
  display: block;
  flex-direction: row-reverse;
  width:10%;
  min-width: 44px;
  max-width: 50px;
  margin: auto 15px;
}
nav{
  background: #1A1C26;
  position: absolute;
  right:15px;
  min-width:160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  padding:10px;
}

.onglet{
  color:white;
  border: 1px solid #2E3345;
  padding : 10px 0 10px 15px;
  margin : 5px 0 5px 0;
}
.onglet:active {
  background: #2E3345;
}
.navPC{
  background: #1A1C26;
  position: sticky;
  top:0;

}
@media screen and (min-width: 1200px){
  nav{
    display: block !important;
    min-width: 250px;
    box-shadow: none;
    position: relative;
    right : 0;
  }
.navMobile{
  display: block;
}
  .logo{
    width:50%;
    margin: 20px auto;
  }

  .menuLogo{
    display: none;
  }

  .navPC{
    width: 270px;
    min-height: 100vh;
    padding: 0 5px 0 5px;

    align-self: flex-start;
  }
  .onglet:hover {
    background: #2E3345;
  }
}






</style>