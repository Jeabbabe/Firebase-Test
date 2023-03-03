<template>
  <v-sheet width="350" class="mx-auto">
    <v-form ref="form">
      <v-text-field label="Email" type="email" v-model="email" />
      <v-text-field label="Password" name="pwd" id="" type="password" v-model="pwd" />
      <v-container width="200">
        <v-btn color="primary" class="mt-4" block @click="login()">Login</v-btn>
        <v-btn color="secondary" class="mt-4" block @click="register()">Register</v-btn>
        <v-btn color="white" class="mt-4" block @click="GoogleLogin()"
          >Google Login</v-btn
        >
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const email = ref("");
const pwd = ref("");

function login() {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, pwd.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User = " + user);
      router.push("about");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
}

function register() {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, pwd.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User = " + user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      // ..
    });
}
function GoogleLogin() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      console.log("token =" + token + "" + user);
      router.push("about");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
</script>

<style scoped></style>
