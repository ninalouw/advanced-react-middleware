export default function({ dispatch }){
    return next => action => {
        next(action);
    };
}