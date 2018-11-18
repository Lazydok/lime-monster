import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button'
import IconSend from '@material-ui/icons/Send'
import FormControl from '@material-ui/core/FormControl';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const styles = theme => ({
    container: {
        // display: 'flex',
        flexWrap: 'wrap',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
        maxWidth: "80%",
        margin: 10
    },
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    containerS: {
        width: 700,
        maxWidth: "100%",
        margin: "auto",
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

const contact = ({ classes, onChangeHandle = f => f, onChangeStep = f => f, resetForm = f => f, contactForm,
                 sendForm = f => f}) => {
    const getSteps = () => {
        return ["가맹문의 신청서", "작성 중...", "전송완료!"]
    }

    const contents = {
        name: contactForm.name,
        phone: contactForm.phone,
        email: contactForm.email,
        content: contactForm.content,
    }

    const getStep = () => {
        let sb = contents.name + contents.phone + contents.email + contents.content
        if(sb===""){
            return 0
        }else{
            return 1
        }
    }

    const onChangeHandler = (target, value) => {
        contents[target] = value
        onChangeHandle(target, value)
        onChangeStep(getStep())
    }

    return (
        <div>
            <div style={{width:700, margin:"auto", maxWidth:"100%"}}>
                <div className={classes.containerS}>
                    <Stepper activeStep={contactForm.currentStep} alternativeLabel>
                        {
                            getSteps().map(label => {
                                return (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                )
                            })
                        }
                    </Stepper>
                </div>
            </div>
            {contactForm.currentStep !== 3 ?
                <div>
                    <div>
                        <FormControl className={classes.container}>
                            <InputLabel htmlFor="name">이름 *</InputLabel>
                            <Input
                                required
                                id="name"
                                placeholder="라임몬스터"
                                defaultValue={contents.name}
                                onBlur={event => onChangeHandler(event.target.id, event.target.value)}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.container}>
                            <InputLabel htmlFor="phone">전화번호 *</InputLabel>
                            <Input
                                required
                                id="phone"
                                placeholder="010-1234-5678"
                                defaultValue={contents.phone}
                                onBlur={event => onChangeHandler(event.target.id, event.target.value)}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.container}>
                            <InputLabel htmlFor="email">e-mail *</InputLabel>
                            <Input
                                required
                                id="email"
                                placeholder="misulhakwon@naver.com"
                                defaultValue={contents.email}
                                onBlur={event => onChangeHandler(event.target.id, event.target.value)}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.container}>
                            <InputLabel htmlFor="content">내용 *</InputLabel>
                            <Input
                                required
                                id="content"
                                placeholder="가맹관련 문의할 내용을 작성하여 주십시오."
                                defaultValue={contents.content}
                                multiline
                                rows="4"
                                onBlur={event => onChangeHandler(event.target.id, event.target.value)}
                            />
                        </FormControl>
                    </div>
                </div> :
                <div> </div>
            }
            {   contactForm.currentStep !== 3 ?
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => {
                            onChangeStep(3)
                            sendForm(contents)
                        }}
                    >
                        보내기
                        <IconSend className={classes.rightIcon}>send</IconSend>
                    </Button>
                </div> :
                <div>
                    <Button
                        variant="contained"
                        // color="primary"
                        className={classes.button}
                        onClick={() => {
                            resetForm()
                        }}
                    >
                        재작성
                    </Button>
                </div>
            }
        </div>
    )
}

contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(contact)