<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add a New Smoothie</h2>
    <form @submit.prevent="addSmoothie">
      <div class="field title">
        <label for="title">Smoothie title:</label>
        <input type="text" name="title" v-model="title" />
      </div>
      <div class="field add-ingredient">
        <div v-for="(ingredient, index) in ingredients" :key="index">
          <label for="ingredient">Ingredient:</label>
          <input type="text" name="ingredient" v-model="ingredients[index]" />
        </div>
        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient" @keydown.enter.prevent="addIng" v-model="another" />
        <p>{{ feedback }}</p>
      </div>
      <div class="field center-align">
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: "",
      ingredients: [],
      another: null,
      feedback: "",
      slug: ""
    };
  },
  methods: {
    addSmoothie() {
      if (this.title && this.ingredients.length > 0) {
        this.feedback = null;
        // create a slug
        this.slug = slugify(this.title, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        db.collection("smoothies")
          .add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug
          })
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          .catch(err => console.log(err));
      } else {
        this.feedback = "You must enter a title and at least one ingredient";
      }
    },
    addIng() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback = "";
      } else {
        this.feedback = "You must enter an ingredient before adding it";
      }
    }
  }
};
</script>
<style>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field {
  margin: 20px auto;
}
</style>