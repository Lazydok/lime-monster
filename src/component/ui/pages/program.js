import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '90%',
        maxWidth: 700,
        margin: 'auto',
        textAlign: 'left'
    },
    stepperContainer: {
        display: 'flex',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
})

const ProgramMain = (
    {
        classes,
        activeStep=0,
        stepHandleNext = f => f,
        stepHandleBack = f => f,
        stepHandleReset = f => f,
    }
 ) => {
    const getSteps = () =>
        [
            'Nene Art (영아: 4 ~ 6세)',
            'Ninito Art (유아: 7~ 10세)',
            'Nino Art (어린이: 11 ~ 14세)',
            'Bueno Art (청소년: 15 ~ 18세)',
        ]

    const getStepContent = (step) => {
        switch(step){
            case 0:
                return "영아를 프로그램으로 머시기 석삼식의 방식으로 소근육과 대근육 발달이 어쩌고 저쩌고.. 생각의 경계를 넓히는...디테일버튼 구현추가[사진도 몇장 첨부]"
            case 1:
                return "유아를 위한 프로그램으로 스토리텔링 위주의 교율을 통해 창의적 사고가어쩌고저쪼고....디테일버튼 구현추가[사진도 몇장 첨부]"
            case 2:
                return "어린이를 위한 프로그램으로 정규교육(학교과정)을 보충하여 함께 어쩌고 저쩌고..디테일버튼 구현추가..[사진도 몇장 첨부]"
            case 3:
                return "청소년을 위한 프로그램으로 기술적인 부분과 이론적인 부분에 치중하여...디테일버튼 구현추가.[사진도 몇장 첨부]"
            default:
                return ""
        }
    }

    const steps = getSteps()

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepperContainer}>
                {
                    steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>{getStepContent(index)}</Typography><div className={classes.actionsContainer}>
                                    <div>
                                      <Button
                                        disabled={activeStep === 0}
                                        onClick={() => stepHandleBack(activeStep)}
                                        className={classes.button}
                                      >
                                        Back
                                      </Button>
                                      <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => stepHandleNext(activeStep)}
                                        className={classes.button}
                                      >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                      </Button>
                                    </div>
                                  </div>
                                </StepContent>
                            </Step>
                        )
                    })
                }
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>모든 과정을 수료 하였습니다.</Typography>
                <Button onClick={() => stepHandleReset()} className={classes.button}>
                  Reset
                </Button>
              </Paper>
            )}
        </div>
    )
}

export default withStyles(styles)(ProgramMain)