<template>
  <v-card color="#F8BBD0" class="mx-auto" max-width="400" title="ใบแสดงเมนู">
    <v-container>
      <v-text-field
        label="ชื่อเมนูไทย"
        bg-color="red-lighten-4"
        variant="solo"
        type="text"
        v-model="menu.nameTH"
      />
      <v-text-field
        label="ชื่อเมนู Eng"
        bg-color="red-lighten-4"
        variant="solo"
        type="text"
        v-model="menu.nameEN"
      />
      <v-text-field
        label="ราคา"
        bg-color="red-lighten-4"
        variant="solo"
        type="number"
        v-model="menu.price"
      />
      <v-text-field
        label="รายละเอียด"
        bg-color="red-lighten-4"
        variant="solo"
        type="text"
        v-model="menu.detail"
      />
    </v-container>
    <v-divider></v-divider>
    <div
      class="d-flex justify-center align-baseline"
      style="gap: 1rem; padding-block: 1rem"
    >
      <v-btn color="secondary" @click="addUserData()">เพิ่มข้อมูล</v-btn>
      <v-btn color="primary" @click="showMenu()">แสดงเมนู</v-btn>
    </div>
  </v-card>
  <div>
    <v-table>
      <thead>
        <tr>
          <th>ชื่อ</th>
          <th>Eng</th>
          <th>ราคา</th>
          <th>รายละเอียด</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(menuItem, index) in allMenu" :key="index">
          <td>{{ menuItem.data.nameTH }}</td>
          <td>{{ menuItem.data.nameEN }}</td>
          <td>{{ menuItem.data.price }}</td>
          <td>
            {{ menuItem.data.detail }}
            <v-menu location="end">
              <template v-slot:activator="{ props }">
                <v-btn
                  size="small"
                  v-bind="props"
                  :icon="show ? 'mdi-chevron-right' : 'mdi-chevron-left'"
                  @click="show = !show"
                ></v-btn>
              </template>
              <div v-show="show" transition="slide-x-transition">
                <v-btn color="error" @click="deleteMenu(menuItem.id)">ลบ</v-btn>
              </div>
            </v-menu>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { doc, addDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "@/main.js";

const menu = ref({ nameTH: "", nameEN: "", price: 0, detail: "" });
const allMenu = ref([]);

async function addUserData() {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "menu"), {
    nameTH: menu.value.nameTH,
    nameEN: menu.value.nameEN,
    price: menu.value.price,
    detail: menu.value.detail,
  });
  console.log("Document written with ID: ", docRef.id);
}

async function showMenu() {
  const querySnapshot = await getDocs(collection(db, "menu"));
  querySnapshot.forEach((doc) => {
    //doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    const myDoc = ref({ id: doc.id, data: doc.data() });
    // allMenu.value.push(doc.data());
    // console.log(myDoc);
    allMenu.value.push(myDoc.value);
    // console.log("allMenu "+allMenu);
  });
}

async function deleteMenu(id) {
  await deleteDoc(doc(db, "menu", id));
  location.reload();
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
