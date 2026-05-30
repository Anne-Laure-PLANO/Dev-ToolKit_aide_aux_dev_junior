<script>
export default {
  name: "MultiSelectDropDown",

  props: {
    skillTitle: String,
    options: Array
  },
  emits:["DropDownComponent"],

  data() {
    return {
      open: false,
      selected: [],
    }
  },

  computed: {
    hasSelection() {
      return this.selected.length > 0
    }



  },

  methods: {
    toggle(skill) {
      const index = this.selected.findIndex(item => item.id === skill.id);
      if (index !== -1) {
        this.selected.splice(index,1);
    } else {
        this.selected.push(skill)
      }
      this.$emit("DropDownComponent", skill)

    },
    closeList(event){
      if (this.$el.querySelector('.dropdown').contains(event.target)){
        return;
      }
      this.open = false;
      window.removeEventListener("click", this.closeList);

    },
    displayList(event){
      event.stopPropagation();

      if (!this.open) {
        this.open = true;
        window.removeEventListener("click", this.closeList);
        window.addEventListener("click", this.closeList);
      } else{
        this.closeList(event);
      }
    }

  }
}
</script>

<template>
  <div class="multiSelect">

    <!-- Bouton -->
    <div
        class="button"
        :class="{ active: hasSelection }"
        @click="displayList($event)"
    ><span class="checkbox">
          <span v-if="hasSelection">🟢</span>
          <span v-else>⚪</span>
        </span>
      Framework {{ skillTitle }}
    </div>

    <!-- List -->
    <div v-show="open"  class="dropdown">

      <div
          v-for="item in options"
          :key="item.id"
          class="option"
          @click="toggle(item)"
      >

        <!-- Checkbox -->
        <span class="checkbox">
          <span v-if="selected.some(s => s.id === item.id)">🟢</span>
          <span v-else>⚪</span>
        </span>

        {{ item.title }}

      </div>

    </div>

  </div>
</template>




<style scoped>



.multiSelect {
  position: relative;
  width: 220px;
  margin:5px;
}

.button {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius:10px;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.button.active {
  border: 2px solid green;
}

.dropdown {
  position: absolute;
  width: 105%;
  background: white;
  border: 1px solid #ccc;
  margin-top: 5px;
  z-index:10;
}

.option {
  padding: 6px;
  cursor: pointer;
  display: flex;
  gap: 8px;
}

.option:hover {
  background: #f3f3f3;
}

.checkbox {
  width: 20px;
}

</style>