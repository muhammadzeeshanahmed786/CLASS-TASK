export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser:{},
    users: [
        {
            userName: 'haider',
            email: 'haider@gmail.com',
            password: '123sss555',
            role: 'trainer'
        },
        {
            userName: 'akram',
            email: 'akram@gmail.com',
            password: 'xse3sss555',
            role: 'student'
        },
    ]
}




export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "UPDATE_USER": {
           
            let UserClone=state.users.slice(0);
            UserClone.push(action.payload);
            // console.log(UserClone)
            return {
                ...state,
                users: UserClone
            }
        }
        
            case "LOGIN_USER": {
                let authClone=state.authUser.slice(0);
                authClone.push(action.payload)
            console.log("Auth",authClone)

                return {
                    ...state,
                    authUser: action.payload
                }
            }
        
        default:
            return state;

    }

    
}