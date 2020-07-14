<template>
  <div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'MyDataTable',
    props: {

    },
    methods: {

    },
    computed: {

    },
  });
</script>

<style scoped lang="less">
@thead-color: rgba(255, 99, 71, 0.6);
@border-color: rgb(120, 120, 120);
@tcell-color: rgba(255, 99, 71, 0.2);
@tcell-hover-color: rgba(255, 99, 71, 0.4);

#usersTable {
  font-family: 'Balsamiq Sans', cursive;
  .table-search {
    margin-left: 20%;
    display: flex;
    flex-direction: row;
    .table-search-input {
      height: 30px;
      width: 350px;
      background-color: LightGray;
      &:focus {
        background-color: white;
      }
    }
    .table-search-label {
      margin-right: 25px;
      font-size: 30px;
    }
    .table-add-button {
      margin-left: 20px;
    }
  }
  & table {
    margin-left: 20%;
    margin-top: 30px;
    margin-bottom: 30px;
    border-collapse: collapse;
    & thead {
      background-color: @thead-color;
      & button {
        background-color: lighten(@thead-color, 10%);
        border: none;
        &:hover {
          cursor: pointer;
        }
      }
    }
    & td, th {
      border: 1px solid @border-color;
      padding: 10px 10px;
      background-color: @tcell-color;
      text-align: center;
    }
    & tbody tr:hover {
      background-color: @tcell-hover-color;
      cursor: pointer;
    }
    & .align-right { text-align: right; }
  }
}

.table-add-button {
  margin: 0;
}

.modal-form {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 100px;
  & input {
    margin-bottom: 10px;
    height: 20px;
  }
}


@media (max-width: 767px) {
  table {
    margin-left: 0;
  }
}
</style>
