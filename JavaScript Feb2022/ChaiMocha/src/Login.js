/*
function Login() {
    //before
    let listaUsuarios;

    function loadUsers(arrayUsuarios){
        listaUsuarios = arrayUsuarios
        return listaUsuarios
    }

    function userExists(username){
        return listaUsuarios.indexOf(username) >= 1;
    }

}
*/
function Login() {

    var usersList;

    function userExists(username) {
        return usersList.indexOf(username) >= 0;
    }

    function loadUsers(loadedUsers) {
        usersList = loadedUsers;
    }

    function deleteUsers() {
        usersList = null;
        return usersList;
    }

    function userExistsPromise(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(usersList.indexOf(user) >= 0)
            }, 10);
        });
    }

    return {
        userExists,
        loadUsers,
        deleteUsers,
        userExistsPromise
    }
}



module.exports = Login();