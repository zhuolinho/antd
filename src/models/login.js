import router from 'umi/router';
// import { stringify } from 'qs';
import { userLogin, getFakeCaptcha } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(userLogin, payload);
      // Login successfully
      if (response) {
        yield put({
          type: 'changeLoginStatus',
          payload: { status: 'ok', currentAuthority: response.role, type: 'account' },
        });
        reloadAuthorized();
        router.push('/experiment/list');
      }
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },

    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      yield put({
        type: 'user/saveCurrentUser',
        payload: {},
      });
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};
