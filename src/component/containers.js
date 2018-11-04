import { connect } from 'react-redux'
import Menu from './ui/menu'
import DetailMenu from './ui/detailMenu'
import detailMenuItems from './ui/detailMenuItems'
import Page from './ui/pages/page'
import pageContact from './ui/pages/contact'
import pageProgram from './ui/pages/program'
import { changeMenu, changePage, changeToggleMenu, changeContactForm, changeContactStep, contactFormReset, programSetStep } from '../store/actions'

export const MainMenu = connect(
    state =>
        ({
            currentMenu: state.currentMenu,
            toggleMenu: state.toggleMenu
        }),
    dispatch =>
        ({
            onSelect(event, menuTitle, prevMenu) {
                if (prevMenu !== menuTitle){
                    dispatch(changeMenu(menuTitle))
                }
                switch (menuTitle) {
                    case "HOME":
                    case "PROGRAM":
                    case "CONTACT":
                    case "INFO":
                         if (prevMenu !== menuTitle) {
                                dispatch(changePage(menuTitle))
                            }
                            break
                    case "ABOUT":
                            dispatch(changeToggleMenu(true))
                        break
                    default:
                            console.log("Not Found Menu: "+menuTitle)
                }
            }
        })
)(Menu)

export const MainDetailMenu = connect(
    state =>
        ({
            currentMenu: state.currentMenu,
            toggleMenu: state.toggleMenu
        }),
    dispatch =>
        ({
            toggleDrawer(isEnable){
                    dispatch(changeToggleMenu(isEnable))
            }
        })
)(DetailMenu)

export const DetailMenuItems = connect(
    state =>
        ({
            currentMenu: state.currentMenu,
            currentPage: state.currentPage
        }),
    dispatch =>
        ({
            onSelect(title, prevPage){
                if (prevPage.pageTitle !== title) {
                    dispatch(changePage(title))
                }
            }
        }),
    null
)(detailMenuItems)

export const MainPage = connect(
    state =>
        ({
            currentPage: state.currentPage,
        }),
)(Page)

export const PageContactMain = connect(
    state =>
        ({
            contactForm: state.contactForm,
        }),
    dispatch => ({
            onChangeHandle(target, value) {
                dispatch(changeContactForm(target, value))
            },
            onChangeStep(step) {
                dispatch(changeContactStep(step))
            },
            resetForm() {
                dispatch(contactFormReset())
            }
        })
)(pageContact)

export const PageProgramMain = connect(
    state =>
        ({
            activeStep: state.programStep
        }),
    dispatch => ({
        stepHandleNext(activeStep){
            dispatch(programSetStep(activeStep + 1))
        },
        stepHandleBack(activeStep){
            dispatch(programSetStep(activeStep - 1))
        },
        stepHandleReset(){
            dispatch(programSetStep(0))
        },
    })
)(pageProgram)

