<template>
  <div class="table">
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
            <button
              v-if="col.sortable"
              @click="sorting(col, index)"
            >
            <i :class="{
              'fas fa-sort': koef[index] === 1 || koef[index] === undefined,
              'fas fa-sort-up': koef[index] === -1,
              'fas fa-sort-down': koef[index] === 0}"
            >
            </i>
            </button>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface IColumnConfig {
  title: string;
  value: string;
  type?: string;
  sortable?: boolean;
}

interface ITableItem {
  [key: string]: string | number;
}

interface ISearchConfig {
  fields: string[];
  filters: Filter[];
}

type Filter = (key: string | number) => string;

export default Vue.extend({
  name: 'MyDataTable',
  props: {
    users: {
      type: Array as () => ITableItem[],
      required: true,
    },
    config: {
      type: Array as () => IColumnConfig[],
      required: true,
    },
    search: {
      type: Object as () => ISearchConfig,
      default: null,
    },
  },
  data() {
    return {
      value: '',
      sortData: Array.from(this.users),
      koef: [0],
    };
  },
  methods: {
    sorting(column: IColumnConfig, index: number): void {
      if (this.koef[index] === 0 || this.koef[index] === undefined) {
        this.sortData = Array.from(this.users);
        this.koef[index] = 1;
        return;
      }
      if (column.type === 'number') {
        this.sortData.sort((u1: ITableItem, u2: ITableItem): number =>
          (+u1[column.value] - +u2[column.value] ) * this.koef[index]);
      } else {
        this.sortData.sort((u1: ITableItem, u2: ITableItem): number =>
          (u1[column.value] as string).localeCompare((u2[column.value] as string)) * this.koef[index]);
      }
      if (this.koef[index] === 1) {
        this.koef[index] = -1;
        return;
      }
      if (this.koef[index] === -1) {
        this.koef[index] = 0;
        return;
      }
    },
  },
  computed: {
    searchItem(): ITableItem[] {
      if (!this.search) {
        return this.sortData;
      }
      const searchUser: ITableItem[] = [];
      this.sortData.forEach((item) => {
        for (const index of Object.keys(item)) {
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
      return searchUser;
    },
  },
});
</script>

<style lang="less">
@thead-color: rgba(255, 99, 71, 0.6);
@border-color: rgb(120, 120, 120);
@tcell-color: rgba(255, 99, 71, 0.2);
@tcell-hover-color: rgba(255, 99, 71, 0.4);
.table {
  display: flex;
  justify-content: center;
}
.usersTable {
  font-family: 'Balsamiq Sans', cursive;
  #table-search-input {
    height: 30px;
    width: 150px;
    border-radius: 5px;
    background-color: LightGray;
    &:focus {
      background-color: white;
    }
  }
  & table {
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
      padding: 10px;
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
</style>
