<script>
import { skills }  from "../services/skills.js";
import MultiSelectDropDown from "../components/MultiSelectDropDown.vue";

export default {
  name: "ReadmeForm",
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
      },
      deep: true
    }
  },
  methods:{
    sendDataToParent(){
      this.$emit("formUpdated",this.dataToReturn)
    },

    // Toggles a skill in the selected skills list and updates the text areas
    toggleSkill(data) {
      const skill = data;
      const index = this.dataToReturn.skills.findIndex(s => s.id === skill.id);
      if (index === -1) {
        this.dataToReturn.skills.push(skill);
      } else {
        this.dataToReturn.skills.splice(index, 1);
      }
        this.updateTextAreas();

    },

    // Rebuilds the text areas content from skills, sorted by priority
    updateTextAreas() {
      this.dataToReturn.installLinux = "";
      this.dataToReturn.installWindows = "";
      this.dataToReturn.exec = "";

      const sorted = [...this.dataToReturn.skills]
          .filter(skill => skill.installLinux)
          .sort((a, b) =>a.priority - b.priority);

      for (let i = 0; i < sorted.length; i++) {
        this.dataToReturn.installLinux += sorted[i].installLinux + "\n";
        this.dataToReturn.installWindows += sorted[i].installWindows + "\n";
        this.dataToReturn.exec += sorted[i].exec + "\n";
      }
    }
  }
}
</script>

<template>
  <form>
      <div class="title">
        <label for="title">Titre du projet :</label><br>
        <input type="text" class="text" v-model="dataToReturn.title" id="title">
      </div>
      <div class="desc">
        <label for="description">Description courte :</label><br>
        <textarea v-model="dataToReturn.description" id="description"></textarea>
      </div>
    <fieldset class="radioButton">
      <legend>Statut </legend>
          <div>
            <input type="radio" name="status" v-model="dataToReturn.status" value ="inProgress" id="inProgress">
            <label for="inProgress">En cours </label>
          </div>
          <div>
            <input type="radio" name="status" v-model="dataToReturn.status" value ="finished" id="finished">
            <label for="finished">Terminé </label>
          </div>
          <div>
              <input type="radio" name="status" v-model="dataToReturn.status" value ="maintenance" id="maintenance">
              <label for="maintenance">En révision </label>
          </div>
    </fieldset>
    <fieldset>
      <legend>Technologies utilisées</legend>
      <div class="column">
        <div v-for="skill in skills.static"
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
form{
  width:90%;
  margin:1rem auto;
}
fieldset{
  border: none;
  display:flex;
  margin:0;
  padding:0;
}
.title, .desc{
  padding-top:10px;
}
legend{
  color: var(--bg-color-logo);
  padding-top:1rem;
  padding-bottom : 0.5rem;

}
p{
  font-style: italic;
  color: var(--bg-color-reset-button);
  font-size: 0.7rem;
}

textarea, .text{
  width:100%;
  border: var(--border-color) 1px solid;
  border-radius: 5px;
}
.text{
  height: 1.5rem;
}
textarea{
  height: 3rem;
}
.column{
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}


.radioButton>div{
  flex:1;
}
.radioButton>div:hover{
  color:var(--bg-color-logo);

}

.install{
  display:block;
}
input[type="checkbox"], input[type="radio"] {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  vertical-align: middle;
  accent-color: var(--bg-color-logo);
}

@media screen and (min-width: 1200px) {
  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
  }
}

</style>