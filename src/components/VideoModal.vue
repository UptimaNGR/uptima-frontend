<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <h1 class= "deep-blue"> DEMO</h1>
        <v-btn
          replace
          to="/"
          @click.prevent = "close"
          class = "red-color"
        ><span >Close</span>
        <v-icon medium>mdi-close</v-icon></v-btn>
      </header>
      <section class="modal-body">
        <youtube  v-if = 'play' video-id ="AyeGWOk9J28"></youtube>
      </section>
      <footer>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video',
  props: ['play'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    max-width: 100%;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }
  .modal-body {
    position: relative;
    padding: 20px 10px;
    max-width: 100%;
    display: flex;
  }
  .red-color {
    color: red;
  }
</style>
