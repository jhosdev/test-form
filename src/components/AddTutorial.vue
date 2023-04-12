<template>
    <Panel header="Add Tutorial" class="panel">
        <div class="input-container">
            <label for="code">Code: </label>
            <InputText id="code" v-model="value" placeholder="99-9999"/>
            <pv-button>Validate</pv-button>
        </div>
        <div class="input-container">
            <label for="name">Name: </label>
            <InputText id="name" v-model="valueN" placeholder="Producto Name"/>
        </div>
        <div class="input-container">
            <label for="category">Category: </label>
            <Dropdown id="category" v-model="selectedCategory" :options="categories" optionLabel="name" placeholder="Category 1"/>
        </div>
        <div class="input-container">
            <label for="date">Date added: </label>
            <Calendar id="date" v-model="date" placeholder="05/01/2023"/>
        </div>
        <div class="input-container">
            <label for="qtt">Quantity: </label>
            <InputText id="qtt" v-model="valueQ" placeholder="50"/>
        </div>
        <div class="input-container">
            <label for="desc">Description: </label>
            <Textarea v-model="valueD" rows="5" cols="30" />
        </div>
        <div class="input-container">
            <Checkbox v-model="checked" :binary="true" />
            <label for="dig">Digital Version </label>
        </div>
        <div class="input-container">
            <div>Status:</div>
            <div class="radiob">
                <RadioButton v-model="valueR" inputId="stat1" name="status" value="Active" />
                <label for="stat1">Active</label>
            </div>
            <div class="radiob">
                <RadioButton v-model="valueR" inputId="stat2" name="status" value="Suspended" />
                <label for="stat2">Suspended</label>
            </div>
            <div class="radiob">
                <RadioButton v-model="valueR" inputId="stat3" name="status" value="Inactive" />
                <label for="stat3">Inactive</label>
            </div>
        </div>
        <div class="button-container">
            <pv-button>Save</pv-button>
            <pv-button>Cancel</pv-button>
        </div>
    </Panel>
</template>

<script setup>
import { ref } from "vue";
const selectedCategory = ref();
const categories = ref([
    { name: 'Category 1', code: 'c1' },
    { name: 'Category 2', code: 'c2' },
    { name: 'Category 3', code: 'c3' },
    { name: 'Category 4', code: 'c4' },
    { name: 'Category 5', code: 'c5' }
]);
const checked = ref(false);
const date = ref();
const value = ref(null);
const valueQ = ref(null);
const valueN = ref(null);
const valueD = ref(null);
const valueR = ref(null);
</script>

<script>

export default {
    name: "AddTutorial",
}

</script>

<style scoped>
  .panel {
      margin: 10px 100px 10px 100px;
      width: 80%;
  }
  .input-container {
      display: flex;
      align-items:center;
      justify-content:center;
      gap:0.5rem;
      margin-bottom:10px;
  }
  .radiob label{
      margin-left:5px;
      margin-right:10px;
  }
  .button-container {
      display: flex;
      align-items:center;
      justify-content:center;
      gap:0.5rem;
      margin-top:40px;
  }

</style>