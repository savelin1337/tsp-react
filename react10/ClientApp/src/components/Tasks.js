import React, { Component } from 'react';
import CollapsibleTable from './CollapsibleTable';
import { Search } from './Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TaskAddModal from './TaskAddModal';

export class Tasks extends Component {
    static displayName = Tasks.name;

    constructor(props) {
        super(props);
        this.state = {
            tasks: {
                done: [],
                today: [],
                upcoming: [],
            },
            headers: [],
            loading: true
        };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderTasksTable(headers, tasks) {
        console.log(tasks);

        return (
            <CollapsibleTable tasks={tasks} headers={headers} />
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Загрузка данных...</em></p>
            : Tasks.renderTasksTable(this.state.headers, this.state.tasks);

        return (
            <div>
                <h1>Задачи</h1>
                <Search />
                <Box sx={{
                    paddingTop: 2,
                    paddingBottom: 2
                    } }>
                <Stack spacing={2} direction="row">
                    <TaskAddModal/>
                    <Button variant="contained">Добавить проект</Button>
                    </Stack>
                </Box>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        const testData = {
            "done": [
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "0",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                }
            ],
            "today": [
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "0",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                }
            ],
            "upcoming": [
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                },
                {
                    date: "01.01.2001",
                    taskCode: "Шифр задачи",
                    projectCode: "48/21 - ТСП",
                    name: "Прозвонить Копьева",
                    statusCode: 3,
                    statusName: "Выполнена",
                    responsible: "Мочалов А. Н.",
                    reassign: "Менщиков А. И.",
                    priority: "2",
                    comment: "Комментарий",
                    planTime: "00:15:00",
                    factTime: "00:00:14",
                    dateOfStart: "01/01/2001 00:00:00",
                    dateOfEnd: "01/24/2023 10:23:17"
                }
            ]
        };
        const headers = [
            {
                "name": "date",
                "title": "Дата"
            },
            {
                "name": "taskCode",
                "title": "Шифр задачи"
            },
            {
                "name": "projectCode",
                "title": "Шифр проекта"
            },
            {
                "name": "name",
                "title": "Задача"
            },
            {
                "name": "status",
                "title": "Статус"
            },
            {
                "name": "responsible",
                "title": "Ответственный"
            },
            {
                "name": "reassign",
                "title": "Переназначить"
            },
            {
                "name": "priority",
                "title": "Приоритет"
            },
            {
                "name": "comment",
                "title": "Комментарий"
            },
            {
                "name": "planTime",
                "title": "План время"
            },
            {
                "name": "factTime",
                "title": "Факт время"
            },
            {
                "name": "dateOfStart",
                "title": "Начал"
            },
            {
                "name": "dateOfEnd",
                "title": "Завершил"
            },
        ];
        this.setState({ tasks: testData, headers: headers, loading: false });
    }
}
