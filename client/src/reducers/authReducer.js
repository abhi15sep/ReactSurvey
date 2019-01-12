export default function(state = {}, action) {
	console.log('testing action: ', action);
	switch(action.type) {
		default: return state;
	}
}
