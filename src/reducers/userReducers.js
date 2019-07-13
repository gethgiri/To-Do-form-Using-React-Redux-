const list = [];
const userReducers = (state=list, action) => {
	console.log('got it in reducers',action);
	switch(action.type){
		case "userDetails":
	
		return [...state, ...action.payload];
		break;

		case "UPDATE_USER":
		let updateUserData = [...state];
		const indexToUpdate = updateUserData.findIndex(function(user, id){
			return id === action.payload.index;
		})
		console.log("indexToUpdate", indexToUpdate);

		return [...state.slice(0, indexToUpdate), action.payload.userDetails, 
			...state.slice(indexToUpdate + 1)]
		
		break;

		case "DELETE_USER":
		return [
				...state.slice(0, action.payload),
				...state.slice(action.payload + 1)
			]
		
		break;

		default:
		return state;
	}
}

export default userReducers;