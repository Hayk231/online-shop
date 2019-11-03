const initialState = {
    allData: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_DATA' : {
            // const finArr = [];
            // let ref = firebase.database().ref('/products');
            // ref.on('value', snapshot => {
            //     const products = snapshot.val();
            //     for (let key in products) {
            //         finArr.push({id: key, info : products[key]})
            //     }
            // });
            return {
                ...state,
                allData: []
            };
        }

        default : return state
    }
};

export default reducer;
