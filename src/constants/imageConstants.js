// export const getImagePath = (groupingType, groupValue) => {
//     switch (groupingType) {
//         case 'status':
//             switch (groupValue) {
//                 case 'In progress':
//                     return '/icons_FEtask/in-progress.svg';
//                 case 'Todo':
//                     return '/icons_FEtask/To-do.svg';
//                 case 'Backlog':
//                     return '/icons_FEtask/Backlog.svg';
//                 case 'Cancelled':
//                     return '/icons_FEtask/Cancelled.svg';
//                 case 'Done':
//                     return '/icons_FEtask/Done.svg';
//                 default:
//                     return '/icons_FEtask/add.svg';
//             }
//         case 'priority':
//             switch (groupValue) {
//                 case 0:
//                     return '/icons_FEtask/No-priority.svg';
//                 case 1:
//                     return '/assets/images/Img - Low Priority.svg';
//                 case 2:
//                     return '/assets/images/Img - Medium Priority.svg';
//                 case 3:
//                     return '/assets/images/Img - High Priority.svg';
//                 case 4:
//                     return '/assets/images/SVG - Urgent Priority colour.svg';
//                 default:
//                     return '/assets/images/Img - High Priority.svg';
//             }
//         default:
//             return '/assets/images/default.jpg';
//     }
// };


export const getPriorityIcon = (priority) => {
    switch (priority) {
        case 0:
            return <img src='/icons_FEtask/No-priority.svg' alt='No priority' />;
        case 1:
            return <img src='/icons_FEtask/Img - Low Priority.svg' alt='low priority' />;
        case 2:
            return <img src='/icons_FEtask/Img - Medium Priority.svg' alt='medium priority' />;
        case 3:
            return <img src='/icons_FEtask/Img - High Priority.svg' alt='high priority' />;
        case 4:
            return <img src='/icons_FEtask/SVG - Urgent Priority colour.svg' alt='urgent priority' />;
        default:
            return <img src='/icons_FEtask/No-priority.svg' alt='No priority' />;
    }
}

export const getStatusIcon = (status) => {
    switch (status) {
        case 'In progress':
            return <img src='/icons_FEtask/in-progress.svg' alt='in progress' />;
        case 'Todo':
            return <img src='/icons_FEtask/To-do.svg' alt='todo status' />;
        case 'Backlog':
            return <img src='/icons_FEtask/Backlog.svg' alt='Backlog' />;
        case 'Cancelled':
            return <img src='/icons_FEtask/Cancelled.svg' alt='Cancelled' />;
        case 'Done':
            return <img src='/icons_FEtask/Done.svg' alt='Done' />;
        default:
            return <img src='/icons_FEtask/No-priority.svg' alt='No priority' />;
    }
}