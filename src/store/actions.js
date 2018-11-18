import C from './constants'
import fetch from 'isomorphic-fetch'

export const changeMenu = (title) => ({
    type: C.CHANGE_MENU,
    title
})

export const changePage = (title) => ({
    type: C.CHANGE_PAGE,
    title
})

export const finishLoading = (title) => ({
    type: C.FINISH_LOADING,
    title
})

export const changeToggleMenu = (isEnabled) => ({
    type: C.CHANGE_TOGGLE,
    isEnabled
})

export const changeContactForm = (target, value) => ({
    type: C.CHANGE_CONTACT_FORM,
    target,
    value
})

export const changeContactStep = (step) => ({
    type: C.CHANGE_CONTACT_STEP,
    step,
})

export const contactFormReset = () => ({
    type: C.RESET_CONTACT_FORM,
    state : {name: "",
                phone: "",
                email: "",
                content: "",
                currentStep: 0,
    },
})

export const programSetStep = (step) => ({
    type: C.PROGRAM_SET_STEP,
    step,
})

const parseResponse = response => response.json()

const logError = error => console.error(error)

const fetchThenDispatch = (dispatch, url, method, body) =>
    fetch(url, {
            method,
            body,
            headers: { 'Content-Type': 'application/json'}
        })
        .then(parseResponse)
        .then(dispatch)
        .catch(logError)

export const contactFormSend = (contents) => dispatch => {
    console.log(contents)
    fetchThenDispatch(
        dispatch,
        'http://localhost:5000/apply',
        'PUT',
        JSON.stringify({
            'name': contents.name,
            'phone': contents.phone,
            'email': contents.email,
            'content': contents.content
        })
    )}
