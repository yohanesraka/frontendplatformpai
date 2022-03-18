<template>
<modal v-model:show="modals.classic">
              <template #header>
                <h6 class="modal-title">Type your modal title</h6>
              </template>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>

              <template #footer>
                <base-button type="primary">Save changes</base-button>
                <base-button
                  type="link"
                  class="ml-auto"
                  @click="modals.classic = false"
                  >Close</base-button
                >
              </template>
            </modal>
</template>
<script>
import Modal from '@/components/ModalComp.vue';

export default {
  components: {
    Modal,
  },
};
</script>
