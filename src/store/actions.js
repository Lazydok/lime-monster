import C from './constants'

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