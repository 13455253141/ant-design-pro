import { Effect } from 'dva';
import { Reducer } from 'redux';
import { getTableData } from '@/services/demo';


export default {
  namespace: 'demo',
  state: {
    tableData: [],
  },

  effects: {
    *getTableData({ payload }, { call, put }) {
      const response = yield call(getTableData, payload);
      yield put({
        type: 'changeTableStatus',
        payload: response.result,
      });
    },

  },

  reducers: {
    changeTableStatus(state, payload) {
      return {
        ...state,
        tableData: payload.payload || [],
      };
    },
  }
}

