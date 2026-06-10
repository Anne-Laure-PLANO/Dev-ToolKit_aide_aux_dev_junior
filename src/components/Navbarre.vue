<script>
export default {
  name: "NavBarre",
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
      <router-link to="/">
        <img class="logo" src="@/assets/logo.png" alt="logo">
      </router-link>
      <img class="burger" @click="displayMenu($event)" src="@/assets/burger-blanc.png" alt="ouvrir le menu de navigation">
    </div>
    <nav aria-label="Menu principal" v-show="mobileMenu">
      <router-link to="/">
        <div class="onglet"> 🏠 Accueil </div>
      </router-link>
      <router-link to="/readme">
        <div class="onglet"> 📄 Générateur de README </div>
      </router-link>
      <router-link to="/git">
        <div class="onglet"> 🔀 Aide Git </div>
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

}
.logo{
  display: block;
  width:60px;
  margin-left: 15px;
}
.burger{
  display: block;
  flex-direction: row-reverse;
  width:44px;
  margin: auto 15px;
  cursor: pointer;
}
nav{
  background: var(--bg-color-navbarre);
  position: absolute;
  right:15px;
  min-width:130px;
  box-shadow: 0 8px 16px 0 var(--shadow);
  padding:10px;
}
a:-webkit-any-link{
  text-decoration: none;
}
.onglet{
  color:var(--font-color-white);
  border: 1px solid var(--bg-color-menu-hover);
  padding : 10px 0 10px 15px;
  margin : 5px 0 5px 0;
}
.onglet:hover{
  background: var(--bg-color-menu-hover) ;
}
.onglet:active {
  background: var(--bg-color-menu-hover);
}
.navPC{
  background: var(--bg-color-navbarre);
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

  .burger{
    display: none;
  }

  .navPC{
    width: 270px;
    min-height: 100vh;
    padding: 0 5px 0 5px;
    position:sticky;
    top:0;
    height: 100vh;
    overflow-y: auto;

  }

}

</style>