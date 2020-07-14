<template>
  <div id="usersTable">
    <label class="table-search-label" for="table-search-input">Search</label>
    <input id="table-search-input"
      v-if="search"
      type="text"
      v-model="query"
    >
    <table>
      <thead>
      <tr>
        <th
          v-for="(col, index) in columns"
          :key="index"
          :class="{'align-right': col.type === 'number'}"
        >
          {{ col.title }}
          <button
            v-if="col.sortable"
            @click="changeSort(col)"
          >
            <i :class="col.currentSortIcon"></i>
          </button>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="(item, itemIndex) in sortedItems"
        :key="itemIndex"
      >
        <td
          v-for="(col, colIndex) in columns"
          :key="colIndex"
          :class="{'align-right': col.type === 'number'}"
        >
          {{ col.value === '_index' ? +itemIndex + 1 : item[col.value] }}
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
      items: {
        type: Array,
        required: true,
      },
      columns: {
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
        sortByColumn: null,
        query: '',
      };
    },
    methods: {
      sortBy(items, column, query) {
        if (query !== '') {
          return items.filter((item) => {
            return this.search.fields.filter((field) => {
              return this.search.filters.filter((searchFilter) => {
                return searchFilter(item[field] + '').includes(searchFilter(this.query));
              }).length
            }).length
          });
        }
        if (column !== null) {
          const copiedItems = [...items];
          const coef = column.currentSortIcon.includes('up') ? 1
            : column.currentSortIcon.includes('down') ? -1
              : 0;
          if (column.type === 'number') {
            return copiedItems.sort((u1, u2) => (u1[column.value] - u2[column.value]) * coef);
          } else {
            return copiedItems.sort((u1, u2) => (u1[column.value].localeCompare(u2[column.value])) * coef);
          }
        }
        return items;
      }
    },
    computed: {
      sortedItems() {
        return this.sortBy(this.items, this.sortByColumn, this.query);
      }
    },
  });
</script>

<style scoped lang="less">
@thead-color: rgba(255, 99, 71, 0.6);
@border-color: rgb(120, 120, 120);
@tcell-color: rgba(255, 99, 71, 0.2);
@tcell-hover-color: rgba(255, 99, 71, 0.4);

#usersTable {
  margin-left: 25%;
  #table-search-input {
    height: 20px;
    width: 190px;
    background-color: LightGray;
    &:focus {
      background-color: white;
    }
  }
  .table-search-label {
    margin-right: 25px;
    font-size: 25px;
  }
  font-family: 'Balsamiq Sans', cursive;
  .table-search {
    margin-left: 20%;
    display: flex;
    flex-direction: row;
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

@media (max-width: 767px) {
  table {
    margin-left: 0;
  }
}
</style>
