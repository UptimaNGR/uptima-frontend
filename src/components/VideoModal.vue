<template>
  <div class="modal-backdrop">
    <div class="modal">
      <section class="modal-body">
        <youtube  v-if = 'play' video-id ="AyeGWOk9J28"></youtube>
      </section>
      <v-btn
          replace
          to="/"
          @click.prevent = "close"
          class = "close-btn deep-blue"
        >
        <v-icon medium>mdi-close</v-icon></v-btn>
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
    background: transparent;
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
  .modal-body {
    position: relative;
    max-width: 100%;
    display: flex;
  }
  .close-btn {
    border-radius: 0;
    color: red;
    background: #5051db;
  }
</style>
