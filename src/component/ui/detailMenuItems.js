import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EduIdeaIcon from '@material-ui/icons/Loyalty'
import EduEnvIcon from '@material-ui/icons/TouchApp'
import SNSIcon from '@material-ui/icons/Dashboard'
import ArtLabIcon from '@material-ui/icons/Business'
// import Divider from '@material-ui/core/Divider';

const DetailMenuItems = ({currentMenu, currentPage, onSelect = f => f}) => {
    switch (currentMenu) {
        case 'ABOUT':
            return (
                <div>
                    <ListItem button onClick={() => onSelect(currentMenu, currentPage)}>
                        <ListItemIcon>
                            <ArtLabIcon />
                        </ListItemIcon>
                        <ListItemText primary="라임몬스터 연구소" />
                    </ListItem>
                    <ListItem button onClick={() => onSelect(currentMenu+"_IDEA", currentPage)}>
                        <ListItemIcon>
                            <EduIdeaIcon />
                        </ListItemIcon>
                        <ListItemText primary="교육 이념" />
                    </ListItem>
                    <ListItem button onClick={() => onSelect(currentMenu+"_CONDITION", currentPage)}>
                        <ListItemIcon>
                            <EduEnvIcon />
                        </ListItemIcon>
                        <ListItemText primary="교육 환경" />
                    </ListItem>
                    <ListItem button onClick={() => onSelect(currentMenu+"_SNS", currentPage)}>
                        <ListItemIcon>
                            <SNSIcon />
                        </ListItemIcon>
                        <ListItemText primary="소셜 미디어(SNS)" />
                    </ListItem>
                </div>
            )
        default:
            return (
                <div>
                    상세 메뉴를 찾을 수 없습니다.
                </div>
            )
    }
}

export default DetailMenuItems