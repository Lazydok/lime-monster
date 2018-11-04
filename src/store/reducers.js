import C from './constants'

export const currentPage = (state = {}, action) => {
    switch (action.type){
        case C.CHANGE_PAGE:
            return {
                pageTitle: action.title,
                loading: false
            }
        case C.FINISH_LOADING:
            return {
                pageTitle: action.title,
                loading: true
            }
        default:
            return state
    }
}

export const currentMenu = (state = "", action) => {
    switch (action.type){
        case C.CHANGE_MENU:
            return action.title
        default:
            return state
    }
}

export const toggleMenu = (state = false, action) => {
    switch (action.type) {
        case C.CHANGE_TOGGLE:
            return action.isEnabled
        default:
            return state
    }
}

export const contactForm = (state={}, action) => {
    switch (action.type) {
        case C.CHANGE_CONTACT_FORM:
            const newState = {...state}
            newState[action.target] = action.value
            return newState
        case C.CHANGE_CONTACT_STEP:
            return {...state, currentStep: action.step}
        case C.RESET_CONTACT_FORM:
            return action.state
        default:
            return state
    }
}

export const programStep = (state=0, action) => {
    switch(action.type){
        case C.PROGRAM_SET_STEP:
            return action.step
        default:
            return state
    }
}