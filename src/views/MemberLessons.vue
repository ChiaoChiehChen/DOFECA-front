<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-btn class="subtitle-1 a" text >
        About Us
        <v-expand-transition>
          <v-btn
            text
            v-if="hover"
            class="d-flex transition-fast-in-fast-out btn_reveal"
          >關於我們</v-btn>
        </v-expand-transition>
      </v-btn>
    </v-hover>
  </div>
</template>
