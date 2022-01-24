<template>
      <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-body">
            <slot name="body">
              <img :src="image.frontside" alt="yes" width="300" height="450">
            </slot>
          </div>

            <slot name="footer">
                <center>
              <button class="modal-default-button" @click="throwCard()">
                Throw Card
              </button>
             <button class="modal-default-button" @click="takeCard()">
                Take Card
              </button>
              </center>
            </slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },
        throwCard() {
            this.closeModal();
            this.$emit('throwCard');
        },
        takeCard() {
            this.closeModal();
            this.$emit('takeCard');
        },
    },
    props: {
        image: {
            type: Object,
            required: true,
        },
    }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

</style>