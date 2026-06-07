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
      Framework {{ skillTitle.toUpperCase() }}
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
          <span v-if="selected.some(s => s.id === item.id)">🟢
</span>
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
  min-width: 200px;
  width: 50%;
  max-width: 250px;
  margin:5px;
}

.button {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--border-color);
  border-radius:10px;
  background: var(--bg-color-general);
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
}

.button.active {
  border: 2px solid var(--bg-color-logo);
}

.dropdown {
  position: absolute;
  width: 105%;
  background: var(--bg-color-general);
  border: 1px solid var(--border-color);
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
  background: var(--border-color);
}

.checkbox {
  width: 20px;
}

</style>