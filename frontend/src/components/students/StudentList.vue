<script>
import StudentService from "@/services/Students.service";

  export default { 
    name: "student-list",

    components: {
      StudentModal: () => import("@/components/students/StudentModal.vue"),
    },

    data: () => ({
      header: [
        { text: "#ID", value: "id" },
        { text: "NOME", value: "name" },
        { text: "IDADE", value: "age" },
        { text: "GÊNERO", value: "sex" },
        { text: "AÇÕES", value: "actions" },
      ],
      students: [],

      genderList: {
        F: "Feminino",
        M: "Masculino",
      },
    }),

    created() {
      this.getStudents()
    },

    methods: {
      async getStudents() {
        const result = await StudentService.select();
        this.students = result.data;
        console.log(this.students);
      },

      async deleteItem(item) {
        await StudentService.remove(item.id)
        this.getStudents();
      },

      async editItem(item) {
        this.$refs.studentModal.edit(item);
      },

      async createStudent() {
        this.$refs.studentModal.createStudent();
      },
    },
  };
</script>

<template>
  <v-container>
    <v-card>
      <v-btn @click="createStudent"> CADASTRAR NOVO ALUNO </v-btn>
      <v-data-table :headers="header" :items="students" hide-default-footer>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small @click="editItem(item)" color="blue"> mdi-pencil </v-icon>
          <v-icon small @click="deleteItem(item)" color="red"> mdi-delete </v-icon>
        </template>
        <template v-slot:[`item.sex`]="{ item }">
          {{ genderList[item.sex] || "--" }}
        </template>
        <template v-slot:[`item.age`]="{ item }">
          {{ item.age  || "--" }}
        </template>
        <template v-slot:no-data>
          <i>SEM DADOS PARA EXIBIR</i>
        </template>
       </v-data-table>
    </v-card>
    <StudentModal @success="getStudents" ref="studentModal"> </StudentModal>
  </v-container>
</template>