import { txClient, queryClient, MissingWalletError, registry } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { AddressBears } from "./module/types/bears/address_bears";
import { AirHistory } from "./module/types/bears/air_info";
import { AirInfo } from "./module/types/bears/air_info";
import { ApiaryParams } from "./module/types/bears/apiaries";
import { CycleHistory } from "./module/types/bears/apiaries";
import { Apiaries } from "./module/types/bears/apiaries";
import { BearNames } from "./module/types/bears/bear_names";
import { BearOwner } from "./module/types/bears/bears";
import { Bears } from "./module/types/bears/bears";
import { BeeParams } from "./module/types/bears/bees";
import { ApiaryHouse } from "./module/types/bears/bees";
import { Bees } from "./module/types/bears/bees";
import { DecorationParams } from "./module/types/bears/decorations";
import { Decorations } from "./module/types/bears/decorations";
import { FieldRows } from "./module/types/bears/fields";
import { ItemPosition } from "./module/types/bears/fields";
import { FieldParams } from "./module/types/bears/fields";
import { Fields } from "./module/types/bears/fields";
import { Params } from "./module/types/bears/params";
import { QueryShowApiariesInfoByBearIdResponse_ApiaryInfo } from "./module/types/bears/query";
import { QueryShowTreesInfoByBearIdResponse_TreeInfo } from "./module/types/bears/query";
import { QueryShowDecorationsInfoByBearIdResponse_DecorationInfo } from "./module/types/bears/query";
import { Tiles } from "./module/types/bears/tiles";
import { Tiles_Items } from "./module/types/bears/tiles";
import { TreeParams } from "./module/types/bears/trees";
import { Trees } from "./module/types/bears/trees";
export { AddressBears, AirHistory, AirInfo, ApiaryParams, CycleHistory, Apiaries, BearNames, BearOwner, Bears, BeeParams, ApiaryHouse, Bees, DecorationParams, Decorations, FieldRows, ItemPosition, FieldParams, Fields, Params, QueryShowApiariesInfoByBearIdResponse_ApiaryInfo, QueryShowTreesInfoByBearIdResponse_TreeInfo, QueryShowDecorationsInfoByBearIdResponse_DecorationInfo, Tiles, Tiles_Items, TreeParams, Trees };
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function mergeResults(value, next_values) {
    for (let prop of Object.keys(next_values)) {
        if (Array.isArray(next_values[prop])) {
            value[prop] = [...value[prop], ...next_values[prop]];
        }
        else {
            value[prop] = next_values[prop];
        }
    }
    return value;
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Params: {},
        BearNames: {},
        BearNamesAll: {},
        Bears: {},
        BearsAll: {},
        AddressBears: {},
        AddressBearsAll: {},
        Fields: {},
        FieldsAll: {},
        Trees: {},
        TreesAll: {},
        Decorations: {},
        DecorationsAll: {},
        Apiaries: {},
        ApiariesAll: {},
        Bees: {},
        BeesAll: {},
        CalculateHoneyInApiary: {},
        AirInfo: {},
        ShowLastAirInfo: {},
        ShowApiariesInfoByBearId: {},
        ShowHoneyPowerByApiaryId: {},
        ShowHoneyPowerByBeeType: {},
        ShowHoneyPowerByBearId: {},
        ShowTreesInfoByBearId: {},
        ShowDecorationsInfoByBearId: {},
        _Structure: {
            AddressBears: getStructure(AddressBears.fromPartial({})),
            AirHistory: getStructure(AirHistory.fromPartial({})),
            AirInfo: getStructure(AirInfo.fromPartial({})),
            ApiaryParams: getStructure(ApiaryParams.fromPartial({})),
            CycleHistory: getStructure(CycleHistory.fromPartial({})),
            Apiaries: getStructure(Apiaries.fromPartial({})),
            BearNames: getStructure(BearNames.fromPartial({})),
            BearOwner: getStructure(BearOwner.fromPartial({})),
            Bears: getStructure(Bears.fromPartial({})),
            BeeParams: getStructure(BeeParams.fromPartial({})),
            ApiaryHouse: getStructure(ApiaryHouse.fromPartial({})),
            Bees: getStructure(Bees.fromPartial({})),
            DecorationParams: getStructure(DecorationParams.fromPartial({})),
            Decorations: getStructure(Decorations.fromPartial({})),
            FieldRows: getStructure(FieldRows.fromPartial({})),
            ItemPosition: getStructure(ItemPosition.fromPartial({})),
            FieldParams: getStructure(FieldParams.fromPartial({})),
            Fields: getStructure(Fields.fromPartial({})),
            Params: getStructure(Params.fromPartial({})),
            QueryShowApiariesInfoByBearIdResponse_ApiaryInfo: getStructure(QueryShowApiariesInfoByBearIdResponse_ApiaryInfo.fromPartial({})),
            QueryShowTreesInfoByBearIdResponse_TreeInfo: getStructure(QueryShowTreesInfoByBearIdResponse_TreeInfo.fromPartial({})),
            QueryShowDecorationsInfoByBearIdResponse_DecorationInfo: getStructure(QueryShowDecorationsInfoByBearIdResponse_DecorationInfo.fromPartial({})),
            Tiles: getStructure(Tiles.fromPartial({})),
            Tiles_Items: getStructure(Tiles_Items.fromPartial({})),
            TreeParams: getStructure(TreeParams.fromPartial({})),
            Trees: getStructure(Trees.fromPartial({})),
        },
        _Registry: registry,
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(JSON.stringify(subscription));
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(JSON.stringify(subscription));
        }
    },
    getters: {
        getParams: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Params[JSON.stringify(params)] ?? {};
        },
        getBearNames: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.BearNames[JSON.stringify(params)] ?? {};
        },
        getBearNamesAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.BearNamesAll[JSON.stringify(params)] ?? {};
        },
        getBears: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Bears[JSON.stringify(params)] ?? {};
        },
        getBearsAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.BearsAll[JSON.stringify(params)] ?? {};
        },
        getAddressBears: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AddressBears[JSON.stringify(params)] ?? {};
        },
        getAddressBearsAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AddressBearsAll[JSON.stringify(params)] ?? {};
        },
        getFields: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Fields[JSON.stringify(params)] ?? {};
        },
        getFieldsAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.FieldsAll[JSON.stringify(params)] ?? {};
        },
        getTrees: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Trees[JSON.stringify(params)] ?? {};
        },
        getTreesAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.TreesAll[JSON.stringify(params)] ?? {};
        },
        getDecorations: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Decorations[JSON.stringify(params)] ?? {};
        },
        getDecorationsAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.DecorationsAll[JSON.stringify(params)] ?? {};
        },
        getApiaries: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Apiaries[JSON.stringify(params)] ?? {};
        },
        getApiariesAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ApiariesAll[JSON.stringify(params)] ?? {};
        },
        getBees: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Bees[JSON.stringify(params)] ?? {};
        },
        getBeesAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.BeesAll[JSON.stringify(params)] ?? {};
        },
        getCalculateHoneyInApiary: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.CalculateHoneyInApiary[JSON.stringify(params)] ?? {};
        },
        getAirInfo: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AirInfo[JSON.stringify(params)] ?? {};
        },
        getShowLastAirInfo: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ShowLastAirInfo[JSON.stringify(params)] ?? {};
        },
        getShowApiariesInfoByBearId: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ShowApiariesInfoByBearId[JSON.stringify(params)] ?? {};
        },
        getShowHoneyPowerByApiaryId: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ShowHoneyPowerByApiaryId[JSON.stringify(params)] ?? {};
        },
        getShowHoneyPowerByBeeType: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ShowHoneyPowerByBeeType[JSON.stringify(params)] ?? {};
        },
        getShowHoneyPowerByBearId: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ShowHoneyPowerByBearId[JSON.stringify(params)] ?? {};
        },
        getShowTreesInfoByBearId: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ShowTreesInfoByBearId[JSON.stringify(params)] ?? {};
        },
        getShowDecorationsInfoByBearId: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ShowDecorationsInfoByBearId[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        },
        getRegistry: (state) => {
            return state._Registry;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: MonetaToday.honeywood.bears initialized!');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach(async (subscription) => {
                try {
                    const sub = JSON.parse(subscription);
                    await dispatch(sub.action, sub.payload);
                }
                catch (e) {
                    throw new SpVuexError('Subscriptions: ' + e.message);
                }
            });
        },
        async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryParams()).data;
                commit('QUERY', { query: 'Params', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: { ...key }, query } });
                return getters['getParams']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryParams', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryBearNames({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryBearNames(key.name)).data;
                commit('QUERY', { query: 'BearNames', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBearNames', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBearNames']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryBearNames', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryBearNamesAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryBearNamesAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryBearNamesAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'BearNamesAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBearNamesAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBearNamesAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryBearNamesAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryBears({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryBears(key.id)).data;
                commit('QUERY', { query: 'Bears', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBears', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBears']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryBears', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryBearsAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryBearsAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryBearsAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'BearsAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBearsAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBearsAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryBearsAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryAddressBears({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryAddressBears(key.address)).data;
                commit('QUERY', { query: 'AddressBears', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAddressBears', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAddressBears']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryAddressBears', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryAddressBearsAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryAddressBearsAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryAddressBearsAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'AddressBearsAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAddressBearsAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAddressBearsAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryAddressBearsAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryFields({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryFields(key.id)).data;
                commit('QUERY', { query: 'Fields', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryFields', payload: { options: { all }, params: { ...key }, query } });
                return getters['getFields']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryFields', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryFieldsAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryFieldsAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryFieldsAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'FieldsAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryFieldsAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getFieldsAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryFieldsAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryTrees({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryTrees(key.id)).data;
                commit('QUERY', { query: 'Trees', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryTrees', payload: { options: { all }, params: { ...key }, query } });
                return getters['getTrees']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryTrees', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryTreesAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryTreesAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryTreesAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'TreesAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryTreesAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getTreesAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryTreesAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryDecorations({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryDecorations(key.id)).data;
                commit('QUERY', { query: 'Decorations', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDecorations', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDecorations']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryDecorations', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryDecorationsAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryDecorationsAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryDecorationsAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'DecorationsAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDecorationsAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDecorationsAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryDecorationsAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryApiaries({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryApiaries(key.id)).data;
                commit('QUERY', { query: 'Apiaries', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryApiaries', payload: { options: { all }, params: { ...key }, query } });
                return getters['getApiaries']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryApiaries', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryApiariesAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryApiariesAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryApiariesAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'ApiariesAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryApiariesAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getApiariesAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryApiariesAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryBees({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryBees(key.id)).data;
                commit('QUERY', { query: 'Bees', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBees', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBees']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryBees', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryBeesAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryBeesAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryBeesAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'BeesAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBeesAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBeesAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryBeesAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryCalculateHoneyInApiary({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryCalculateHoneyInApiary(key.apiaryId)).data;
                commit('QUERY', { query: 'CalculateHoneyInApiary', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCalculateHoneyInApiary', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCalculateHoneyInApiary']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryCalculateHoneyInApiary', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryAirInfo({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryAirInfo()).data;
                commit('QUERY', { query: 'AirInfo', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAirInfo', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAirInfo']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryAirInfo', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryShowLastAirInfo({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryShowLastAirInfo()).data;
                commit('QUERY', { query: 'ShowLastAirInfo', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryShowLastAirInfo', payload: { options: { all }, params: { ...key }, query } });
                return getters['getShowLastAirInfo']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryShowLastAirInfo', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryShowApiariesInfoByBearId({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryShowApiariesInfoByBearId(key.bearId)).data;
                commit('QUERY', { query: 'ShowApiariesInfoByBearId', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryShowApiariesInfoByBearId', payload: { options: { all }, params: { ...key }, query } });
                return getters['getShowApiariesInfoByBearId']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryShowApiariesInfoByBearId', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryShowHoneyPowerByApiaryId({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryShowHoneyPowerByApiaryId(key.apiaryId)).data;
                commit('QUERY', { query: 'ShowHoneyPowerByApiaryId', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryShowHoneyPowerByApiaryId', payload: { options: { all }, params: { ...key }, query } });
                return getters['getShowHoneyPowerByApiaryId']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryShowHoneyPowerByApiaryId', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryShowHoneyPowerByBeeType({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryShowHoneyPowerByBeeType(key.beeType)).data;
                commit('QUERY', { query: 'ShowHoneyPowerByBeeType', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryShowHoneyPowerByBeeType', payload: { options: { all }, params: { ...key }, query } });
                return getters['getShowHoneyPowerByBeeType']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryShowHoneyPowerByBeeType', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryShowHoneyPowerByBearId({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryShowHoneyPowerByBearId(key.bearId)).data;
                commit('QUERY', { query: 'ShowHoneyPowerByBearId', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryShowHoneyPowerByBearId', payload: { options: { all }, params: { ...key }, query } });
                return getters['getShowHoneyPowerByBearId']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryShowHoneyPowerByBearId', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryShowTreesInfoByBearId({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryShowTreesInfoByBearId(key.bearId)).data;
                commit('QUERY', { query: 'ShowTreesInfoByBearId', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryShowTreesInfoByBearId', payload: { options: { all }, params: { ...key }, query } });
                return getters['getShowTreesInfoByBearId']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryShowTreesInfoByBearId', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryShowDecorationsInfoByBearId({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryShowDecorationsInfoByBearId(key.bearId)).data;
                commit('QUERY', { query: 'ShowDecorationsInfoByBearId', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryShowDecorationsInfoByBearId', payload: { options: { all }, params: { ...key }, query } });
                return getters['getShowDecorationsInfoByBearId']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryShowDecorationsInfoByBearId', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgCollectHoneyFromApiary({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCollectHoneyFromApiary(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCollectHoneyFromApiary:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCollectHoneyFromApiary:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgExtendField({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgExtendField(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgExtendField:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgExtendField:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgInitGameAndExtendField({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndExtendField(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndExtendField:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndExtendField:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateApiary({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateApiary(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateApiary:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateApiary:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgInitGameAndCreateDecoration({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndCreateDecoration(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateDecoration:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateDecoration:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgClearApiaryFromBees({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgClearApiaryFromBees(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgClearApiaryFromBees:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgClearApiaryFromBees:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgSetDecorationPosition({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSetDecorationPosition(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSetDecorationPosition:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSetDecorationPosition:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgInitGameAndCreateTree({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndCreateTree(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateTree:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateTree:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgSetApiaryHouseForBee({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSetApiaryHouseForBee(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSetApiaryHouseForBee:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSetApiaryHouseForBee:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUnsetApiaryHouseForBee({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUnsetApiaryHouseForBee(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUnsetApiaryHouseForBee:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUnsetApiaryHouseForBee:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateBee({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateBee(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateBee:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateBee:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateTree({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateTree(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateTree:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateTree:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateDecoration({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateDecoration(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateDecoration:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateDecoration:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgInitGameAndCreateBee({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndCreateBee(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateBee:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateBee:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgInitGameAndCreateApiary({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndCreateApiary(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateApiary:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateApiary:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgSetName({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSetName(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSetName:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSetName:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgInitGameAndSetName({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndSetName(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndSetName:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndSetName:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUnsetDecorationPosition({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUnsetDecorationPosition(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUnsetDecorationPosition:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUnsetDecorationPosition:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteApiary({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteApiary(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteApiary:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteApiary:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgMoveItemOnField({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgMoveItemOnField(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgMoveItemOnField:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgMoveItemOnField:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgCollectHoneyFromApiary({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCollectHoneyFromApiary(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCollectHoneyFromApiary:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCollectHoneyFromApiary:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgExtendField({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgExtendField(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgExtendField:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgExtendField:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgInitGameAndExtendField({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndExtendField(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndExtendField:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndExtendField:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateApiary({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateApiary(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateApiary:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateApiary:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgInitGameAndCreateDecoration({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndCreateDecoration(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateDecoration:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateDecoration:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgClearApiaryFromBees({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgClearApiaryFromBees(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgClearApiaryFromBees:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgClearApiaryFromBees:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgSetDecorationPosition({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSetDecorationPosition(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSetDecorationPosition:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSetDecorationPosition:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgInitGameAndCreateTree({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndCreateTree(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateTree:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateTree:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgSetApiaryHouseForBee({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSetApiaryHouseForBee(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSetApiaryHouseForBee:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSetApiaryHouseForBee:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUnsetApiaryHouseForBee({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUnsetApiaryHouseForBee(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUnsetApiaryHouseForBee:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUnsetApiaryHouseForBee:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateBee({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateBee(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateBee:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateBee:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateTree({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateTree(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateTree:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateTree:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateDecoration({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateDecoration(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateDecoration:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateDecoration:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgInitGameAndCreateBee({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndCreateBee(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateBee:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateBee:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgInitGameAndCreateApiary({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndCreateApiary(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateApiary:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndCreateApiary:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgSetName({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSetName(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSetName:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSetName:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgInitGameAndSetName({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgInitGameAndSetName(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgInitGameAndSetName:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgInitGameAndSetName:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUnsetDecorationPosition({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUnsetDecorationPosition(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUnsetDecorationPosition:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUnsetDecorationPosition:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteApiary({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteApiary(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteApiary:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteApiary:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgMoveItemOnField({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgMoveItemOnField(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgMoveItemOnField:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgMoveItemOnField:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
