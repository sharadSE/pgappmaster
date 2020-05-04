const initialState = {
    bedList : [],
    aminList: [],
    bookingCount : 0,
    bedprice: 0,
    aminprice: 0,
    totalprice: 0,
    // bookList : [{
    //     bedList : '',
    //     bedprice: 0,
    //     aminList: [],
    //     aminprice:0,      
    // }]
 }

 const bedBookingReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_BED': 
                // state.bookingCount= state.bookingCount + 1,
                // state.bookList[state.bookingCount].bedList= action.payload.bed_id,
                // state.bookList[state.bookingCount].bedprice= state.bookList[state.bookingCount].bedprice + action.payload.bedprice
             return {
                 ...state,
                 bedList: state.bedList.concat(action.payload),
                 bedprice: state.bedprice + action.payload.price
                //  bookList: state.bookList
                }
                //  bedList,
                 //state.bedList.concat(action.payload),
                //  bedprice,
                 //state.bedprice + action.payload.price
            
        case 'ADD_AMIN' :
            // state.bookList[state.bookingCount].aminList= state.aminList.concat(action.payload),
            // state.bookList[state.bookingCount].aminprice= state.bookList[state.bookingCount].aminprice + action.payload.aminprice
            return {
                ...state,
                // bookList: state.bookList,
                aminprice: state.aminprice + action.payload.charge,
                aminList: state.aminList.concat(action.payload),
            }
        case 'BOOK_BED' :{

            return {
                ...state,
                totalprice: state.bedprice + state.aminprice,
                bookingCount: state.bookingCount + 1,
                
            }}
        case 'ADD_PRICE' :
            return {
                ...state,
                    totalprice: state.aminprice
            }
        default: return state     
    }
}
export default bedBookingReducer