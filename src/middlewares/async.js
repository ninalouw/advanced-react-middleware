export default function({ dispatch }){
    return next => action => {
        //if action does not have payload, or
        //payload does not have a .then property
        //we dont care about it, send it on
        if(!action.payload || !action.payload.then){
            return next(action);
        }
        //make sure the action's promise resolves
        action.payload
        .then(function(response){
            //create a new action with the old type, but
            //replace the promise with the response data
            const newAction = {...action, payload: response }
            dispatch(newAction);
        });
    };
}