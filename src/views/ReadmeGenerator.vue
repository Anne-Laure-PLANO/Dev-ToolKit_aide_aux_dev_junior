<script>
import ReadmeForm from "../components/ReadmeForm.vue";
import ReadmeMarkdown from "../components/ReadmeMarkdown.vue";
import ReadmeResult from "../components/ReadmeResult.vue";

export default {
  name: "readme",
  components: {
    ReadmeForm,
    ReadmeMarkdown,
    ReadmeResult
  },
  data(){
    return{
      activeComponent : "A",
      status:{
        enCours: "https://img.shields.io/badge/Statut-En%20Cours-orange",
        termine: "https://img.shields.io/badge/Statut-Termin%C3%A9-green",
        maintenance: "https://img.shields.io/badge/Statut-En%20Maintenance-red",
      },
      formKey:0,
      result: {},
      cb : '```',
      markdown : "",


    }
  },
  watch:{
    result:{
      handler(){
        this.generateMarkdown();
      },
      deep: true
    }
  },
  methods:{
    markdownStatus() {
      switch (this.result.status) {
        case "inProgress":
          return `![Statut](${this.status.enCours})  \n`
        case "finished":
          return `![Statut](${this.status.termine})  \n`
        case "maintenance":
          return `![Statut](${this.status.maintenance})  \n`
        default:
          return ""
      }
    },
    markdownSkills(){
      let result= "## Technologies utilisées  \n";
      for (const skill of this.result.skills){
        result += `![${skill.title}](${skill.img}) \n`;
      }
      result += "  \n";
    return result;
    },
    markdownInstall(){
      let result1 = "# Guide d'installation  \n" +
          "## Commandes d'installation  \n" +
          "### Depuis un terminal Linux :  \n\n" +
          this.cb + "bash\n";

      let result2 ="### Depuis un terminal Windows :\n\n" +
          this.cb + "cmd\n";

      let result3 = "## Commandes de lancement :\n\n" +
          this.cb + "\n";

      for (const skill of this.result.skills){
        result1 += skill.installLinux + "  \n";
        result2 += skill.installWindows + "  \n";
        result3 += skill.exec + "  \n";
      }
      return result1 + this.cb + "\n\n" + result2 + this.cb + "\n\n" + result3 + this.cb + "\n\n";
    },
    generateMarkdown(){
      this.markdown = `
${this.result.title? "# " + this.result.title + "  \n" : ""}
${(this.result.description)? this.result.description + "  \n" : ""}
${this.markdownStatus()}
${(this.result.skills && this.result.skills.length >0) ? this.markdownSkills() + this.markdownInstall() :""}

`
    },
    copyMarkdown(){
      navigator.clipboard.writeText(this.markdown);
    },
    resetForm(){
        this.result = {};
        this.markdown= "";
        this.formKey ++;
    }
  },

}

</script>

<template>

  <header>
    <h1>Dev-ToolKit</h1>
    <p>Générateur de README</p>
  </header>
  <main>
    <div class="coloredBlock">
      <p>Créez un README adapté à vos projets</p>
    </div>
    <section class="readmeMenu">
      <div @click="activeComponent = 'A'" >
        Formulaire
      </div>
      <div @click="activeComponent = 'B'" >
        Code
      </div>
      <div @click="activeComponent = 'C'" >
        Résultat
      </div>

    </section>
    <section>

      <ReadmeForm
          :key="formKey"
          v-show="activeComponent === 'A'"
          @formUpdated="result = $event"
      />
      <ReadmeMarkdown v-show="activeComponent === 'B'"
          :md= "markdown"

      />
      <ReadmeResult v-show="activeComponent === 'C'"
          :mdFinal = "markdown"
      />
    </section>

  </main>
  <footer>
      <button @click="resetForm">Réinitialiser</button>
      <button @click="copyMarkdown">Copier</button>
  </footer>
</template>

<style scoped>
footer{
  border-top: 1px solid grey;
  display: flex;
  position: sticky;
  bottom: 0;
  background: blue;
}
footer>button{
  flex:1;
  padding:10px;
  margin:10px;

}
.readmeMenu{
  display: flex;
  border : 1px solid #C5C3C3;
  margin-top:10px;
  background: #ffffff;
}
.readmeMenu>div{
  flex:1;
  text-align: center;
  margin : 10px 0 10px 0;
}
.readmeMenu>div:hover{
  color:red;

}


</style>