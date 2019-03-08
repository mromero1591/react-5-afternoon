const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROP = "UPDATE_PROP";
const UPDATE_FOUND = "UPDATE_FOUND";
const UPDATE_AGENT = "UPDATE_AGENT"; 
const UPDATE_COST = "UPDATE_COST"; 
const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
const UPDATE_CREDIT = "UPDATE_CREDIT"; 
const UPDATE_HISTORY = "UPDATE_HISTORY";
const UPDATE_ADDRESS_ONE = "UPDATE_ADDRESS_ONE";
const UPDATE_ADDRESS_TWO = "UPDATE_ADDRESS_TWO";
const UPDATE_ADDRESS_THREE = "UPDATE_ADDRESS_THREE";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME"; 
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME"; 
const UPDATE_EMAIL = "UPDATE_EMAIL";


function reducer(state = initialState, action){
        switch (action.type) {
            case UPDATE_LOAN_TYPE:
                return {
                    ...state,
                    loanType: action.payload
                }
            case UPDATE_PROPERTY_TYPE:
                return {
                    ...state,
                    propertyType: action.payload
                }
            case UPDATE_CITY:
                return {
                    ...state,
                    city: action.payload
                }
            case UPDATE_PROP:
                return {
                    ...state,
                    propToBeUsedOn: action.payload
                }
            case UPDATE_FOUND:
                return {
                    ...state,
                    found: action.payload
                }
            case UPDATE_AGENT:
                return {
                    ...state,
                    realEstateAgent: action.payload
                }
            case UPDATE_COST:
                return {
                    ...state,
                    cost: action.payload
                }
            case UPDATE_DOWNPAYMENT:
                return {
                    ...state,
                    downPayment: action.payload
                }
            case UPDATE_CREDIT:
                return {
                    ...state,
                    credit: action.payload
                }
            case UPDATE_HISTORY:
                return {
                    ...state,
                    history: action.payload
                }
            case UPDATE_ADDRESS_ONE:
                return {
                    ...state,
                    addressOne: action.payload
                }
            case UPDATE_ADDRESS_TWO:
                return {
                    ...state,
                    addressTwo: action.payload
                }
            case UPDATE_ADDRESS_THREE:
                return {
                    ...state,
                    addressThree: action.payload
                }
            case UPDATE_FIRST_NAME:
                return {
                    ...state,
                    firstName: action.payload
                }
            case UPDATE_LAST_NAME:
                return {
                    ...state,
                    lastName: action.payload
                }
            case UPDATE_EMAIL:
                return {
                    ...state,
                    email: action.payload
                }
            default:
                return state;
        }

}

export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType(propertyType) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: propertyType
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateAgent(realEstateAgent) {
    return {
        action: UPDATE_AGENT,
        payload: realEstateAgent
    }
}
export function updateCost(cost) {
    return {
        action: UPDATE_COST,
        payload: cost
    }
}
export function updateDownPayment(downPayment) {
    return {
        action: UPDATE_DOWNPAYMENT,
        payload: downPayment
    }
}
export function updateCredit(credit) {
    return {
        action: UPDATE_CREDIT,
        payload: credit
    }
}
export function updateHistory(history) {
    return {
        action: UPDATE_HISTORY,
        payload: history
    }
}
export function updateAddressOne(addressOne) {
    return {
        action: UPDATE_ADDRESS_ONE,
        payload: addressOne
    }
}
export function updateAddressTwo(addressTwo) {
    return {
        action: UPDATE_ADDRESS_TWO,
        payload: addressTwo
    }
}
export function updateAddressThree(addressThree) {
    return {
        action: UPDATE_ADDRESS_THREE,
        payload: addressThree
    }
}
export function updateFirstName(firstName) {
    return {
        action: UPDATE_FIRST_NAME,
        payload: firstName
    }
}
export function updateLastName(lastName) {
    return {
        action: UPDATE_LAST_NAME,
        payload: lastName
    }
}
export function updateEmail(email) {
    return {
        action: UPDATE_EMAIL,
        payload: email
    }
}

export default reducer;