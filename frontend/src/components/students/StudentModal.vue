<script>

import StudentService from "@/services/Students.service";

export default {
    name: "student-modal",

    data: () => ({
        showDialog: false,
        student: {},

        genderList: [
            { label: "Masculino", value: "M"},
            { label: "Feminino", value: "F"},
        ]
    }),

    methods: {
        async clearForm() {
            this.student = {};
        },

        async edit (student) {
            this.student = student;
            this.showDialog = true;
        },
        
        async createStudent() {
            this.clearForm();
            this.showDialog = true;
        },

        async handleSave() {
            const id = this.student.id;
            if(id) {
                delete this.student.id;
                await StudentService.update(id, this.student)
            } else {
                await StudentService.create(this.student)
            }

            this.$emit("success");
            this.showDialog = false;
         }
    },
};
</script>

<template>
    <v-dialog v-model="showDialog">
        <v-card>
            <v-container>
                <h2> {{ student.id ? "ALTERANDO" : "CADASTRANDO NOVO" }} ALUNO </h2>
                <v-text-field v-if="student.id" label="#ID" disabled outlined v-model="student.id" dense />
                <v-text-field label="NOME" outlined v-model="student.name" dense />
                <v-text-field label="IDADE" type="number" outlined v-model="student.age" dense />
                <v-select v-model="student.sex" :items="genderList" item-value="value" item-text="label" filled label="GÊNERO"> </v-select>

                <v-btn @click="handleSave"> SALVAR </v-btn>
            </v-container>
        </v-card>
    </v-dialog>
</template>