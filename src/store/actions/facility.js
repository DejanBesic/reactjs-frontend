import { fetchSearch, fetchFacilities } from '../../api';

export const GetFacilitiesStart = "GetFacilitiesStart";
export const onGetFacilitesStart = () => 
    ({ type: GetFacilitiesStart })

export const GetFacilitiesSuccess = "GetFacilitiesSuccess";
export const onGetFacilitesSuccess = (faciliteis) => 
    ({ payload: faciliteis, type: GetFacilitiesSuccess })


export const GetFacilitiesFailure = "GetFacilitiesFailure";
export const onGetFacilitesFailure = (error) => 
    ({ payload: error, type: GetFacilitiesFailure })

export const getFacilities = () => (dispatch) => {
    dispatch(onGetFacilitesStart());
    fetchFacilities()
        .then((facilities) => dispatch(onGetFacilitesSuccess(facilities.data)))
        .catch((error) => dispatch(onGetFacilitesFailure(error)));
}

export const search = (form) => (dispatch) => {
    dispatch(onGetFacilitesStart());
    fetchSearch(form)
        .then((faciliteis) => dispatch(onGetFacilitesSuccess(faciliteis.data)))
        .catch((error) => dispatch(onGetFacilitesFailure(error.response.data)));
}