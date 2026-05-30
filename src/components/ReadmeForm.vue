<script>
import { skills }  from "../services/skills.js";
import MultiSelectDropDown from "../components/MultiSelectDropDown.vue";

export default {
  name: "Form",
  computed: {
    skills() {
      return skills
    }
  },
  emits:["formUpdated"],
  data() {
    return {
      dataToReturn : {
        title: "",
        description: "",
        status: "",
        skills: [],
        installLinux: "",
        installWindows: "",
        exec: "",
      }
    }
  },
  components:{
    MultiSelectDropDown,
  },
  watch:{ //when something is updated
    dataToReturn:{
      handler()
      {
        this.sendDataToParent();
        console.log("dataToReturn.install : "+ this.dataToReturn.install)
      },
      deep: true
    }
  },
  methods:{
    sendDataToParent(){
      this.$emit("formUpdated",this.dataToReturn)
    },
    toggleSkill(data) {
      const skill = data;
      const index = this.dataToReturn.skills.findIndex(s => s.id === skill.id);
      console.log("skill.install :" + JSON.stringify(skill.install));
      if (index === -1) {
        this.dataToReturn.skills.push(skill);
      } else {
        this.dataToReturn.skills.splice(index, 1);
      }
        this.updateTextAreas();

    },
    updateTextAreas(){
      this.dataToReturn.installLinux = "";
      this.dataToReturn.installWindows = "";
      this.dataToReturn.exec = "";
      for (let i = 0 ; i<this.dataToReturn.skills.length ; i++){
        this.dataToReturn.installLinux += this.dataToReturn.skills[i].installLinux + "\n";
        this.dataToReturn.installWindows += this.dataToReturn.skills[i].installWindows + "\n";
        this.dataToReturn.exec += this.dataToReturn.skills[i].exec + "\n";
      }
    }

  }
}
</script>

<template>
  <form>
    <div>
      <label for="title">Titre du projet :</label><br>
      <input type="text" class="text" v-model="dataToReturn.title" id="title">
    </div>
    <div>
      <label for="description">Description courte :</label><br>
      <textarea v-model="dataToReturn.description" id="description"></textarea>
    </div>
    <fieldset class="radioButton">
      <legend>Statut </legend>
          <div>
            <input type="radio" name="status" v-model="dataToReturn.status" value ="inProgress" id="inProgress">
            <label for="inProgress">en cours </label>
          </div>
          <div>
            <input type="radio" name="status" v-model="dataToReturn.status" value ="finished" id="finished">
            <label for="finished">Terminé </label>
          </div>
          <div>
              <input type="radio" name="status" v-model="dataToReturn.status" value ="maintenance" id="maintenance">
              <label for="maintenance">En maintenance </label>
          </div>
    </fieldset>
    <fieldset>
      <legend>Technologies utilisées</legend>
      <div class="column">
        <div v-for="skill in skills.native"
          :key="skill.id"
        >
          <input  type="checkbox"
                  :name="skill.title"
                  @click="toggleSkill(skill)"
                  :checked = "(dataToReturn.skills.findIndex(s=> s.id === skill.id) !== -1)"
                  :value="skill"
                  :id=" skill.id"
          >
          <label :for=" skill.id ">{{ skill.title }}</label>
        </div>
      </div>

      <div class="column">



        <multi-select-drop-down
              v-for="cat in skills.framework"
                :key="cat.category"
                :skillTitle= "cat.category"
                :options="cat.skills"
                @DropDownComponent="toggleSkill($event)"

        />
        </div>

    </fieldset>
    <fieldset class="install">
      <legend>Guide d'installation</legend>
      <p>Attention : Veillez à bien saisir toutes les technologies utilisées avant d'apporter des modifications aux commandes. <br> Toute modification réalisée avant sélection d'une technologie ne sera pas prise en compte.</p>
      <div>
        <label for="installLinux">Commandes d'installation Linux :</label><br>
        <textarea v-model="dataToReturn.installLinux"  placeholder="commandes pré-saisies modifiables ici" id="installLinux"></textarea>
      </div>
      <div>
        <label for="installWindows">Commandes d'installation Windows :</label><br>
        <textarea v-model="dataToReturn.installWindows"  placeholder="commandes pré-saisies modifiables ici" id="installWindows"></textarea>
      </div>
      <div>
        <label for ="run">Commandes d'exécution : </label><br>
        <textarea v-model="dataToReturn.exec" placeholder="commandes pré-saisies modifiables ici" id="run"></textarea>
      </div>
    </fieldset>
  </form>

</template>

<style scoped>
fieldset{
  border: none;
  display:flex;
}
legend{
  color:blue;
}
.text{
  width:80%;
}
textarea{
  width:80%;
}
.column{
  flex:1;
}
.radioButton>div{
  flex:1;
}
.radioButton>div:hover{
  color:red;
}
.install{
  display:block;
}
</style>