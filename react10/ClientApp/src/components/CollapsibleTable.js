import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TaskViewModal from './TaskViewModal';
import StatusSelect from './StatusSelect';

function CollapsedTasks(props) {
    const { display, tasks, headers } = props;

    const tableStyling = {
        padding: "6px 10px"
    };

    let contents = (
        display
        &&
        <>
            {tasks.map((task) =>
                <TableRow sx={{ backgroundColor: task.priority == 0 ? "#71FACA" : "#FFFFFF" }}>
                    {headers.map((header) =>
                        <>
                            {header.name === "status" ?
                                <TableCell sx={{ ...tableStyling }}>
                                    <StatusSelect />
                                </TableCell>

                                :
                                <TaskViewModal>
                                    {task[header.name]}
                                </TaskViewModal>}
                        </>

                    )}
                </TableRow>
            )}
        </>
    );

    return (
        <>{contents}
        </>
    );
}

function TaskGroup(props) {
    const { title, tasks, colNum, headers, isOpen } = props;
    const [open, setOpen] = React.useState(isOpen);

    return (
        <React.Fragment>
            <TableRow sx={{
                '& > *': {
                    borderBottom: 'unset',
                    backgroundColor: '#E1E1FB'
                }

            }}>
                <TableCell colSpan={colNum}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    <span>{title}</span>
                </TableCell>

            </TableRow>
            <CollapsedTasks display={open} tasks={tasks} headers={headers} />
        </React.Fragment>
    );
}

export default function CollapsibleTable(props) {
    const { tasks, headers } = props;

    const tableStyling = {
        padding: "6px 10px"
    };

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) =>
                            <TableCell sx={{ ...tableStyling }} key={header.name}>{header.title}</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TaskGroup title="Выполненные задачи" tasks={tasks.done} isOpen={false} colNum={13} headers={headers} />
                    <TaskGroup title="Задачи на сегодня" tasks={tasks.today} isOpen={true} colNum={13} headers={headers} />
                    <TaskGroup title="Предстоящие задачи" tasks={tasks.upcoming} isOpen={false} colNum={13} headers={headers} />
                </TableBody>
            </Table>
        </TableContainer>
    );
}
