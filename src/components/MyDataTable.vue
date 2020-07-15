<template>
  <div class="usersTable">
    <input id="table-search-input" placeholder="Search"
      v-if="search"
      type="text"
      v-model="value"
    >
    <table>
      <thead>
      <tr>
        <th
          v-for="(col, index) in config"
          :key="index"
        >
        {{ col.title }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="(item, searchInd) in searchItem"
        :key="searchInd"
      >
        <td
          v-for="(col, configInd) in config"
          :key="configInd"
          :class="{'align-right': col.type === 'number'}"
        >
        {{ col.value === '_index' ? searchInd + 1 : item[col.value] }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default Vue.extend({
    name: 'MyDataTable',
    props: {
      users: {
        type: Array,
        required: true,
      },
      config: {
        type: Array,
        required: true,
      },
      search: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        value: '',
      };
    },
    computed: {
      searchItem() {
        const searchUser = [];
        if (this.value !== '') {
          this.users.forEach((item) => {
            for (const index in item) {
              this.search.fields.forEach((field) => {
                if (index === field) {
                  this.search.filters.forEach((filter) => {
                     if (filter(item[index]).includes(filter(this.value)) && !searchUser.includes(item)) {
                        searchUser.push(item);
                     }
                  });
                }
              });
            }
          });
        } else {
            return this.users;
        }
        return searchUser;
      },
    },
  });
</script>

<style scoped lang="less">
@thead-color: rgba(255, 99, 71, 0.6);
@border-color: rgb(120, 120, 120);
@tcell-color: rgba(255, 99, 71, 0.2);
@tcell-hover-color: rgba(255, 99, 71, 0.4);

.usersTable {
  @table-width: 300px;
  margin-left: 35%;
  font-family: 'Balsamiq Sans', cursive;
  #table-search-input {
    height: 30px;
    width: @table-width - 7px;
    border-radius: 5px;
    background-color: LightGray;
    &:focus {
      background-color: white;
    }
  }
  & table {
    width: @table-width;
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
  @media (max-width: 767px) {
    margin-left: 0;
  }
}
</style>
