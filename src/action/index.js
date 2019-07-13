export function setUserData(list)
{
console.log('got in actions',list);
return{type:"userDetails",payload:list}
}

export function editUpdateUserDetails(data, id){
	return{type: "UPDATE_USER", payload: {userDetails: data, index: id}}
}

export function deleteUser(index){
	return {type: "DELETE_USER", payload: index}
}