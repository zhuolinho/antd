import { getData, chartData } from '@/services/api';

export default {
  namespace: 'chart',

  state: {
    visitData: {},
    salesData: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(getData);
      yield put({
        type: 'save',
        payload: { visitData: response },
      });
    },
    *fetchSalesData({ payload }, { call, put }) {
      const response = yield call(chartData, payload);
      yield put({
        type: 'save',
        payload: {
          salesData: response,
        },
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    clear() {
      return {
        visitData: {},
        salesData: {},
      };
    },
  },
};
