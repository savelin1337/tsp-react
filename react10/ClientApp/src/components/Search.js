import React, { Component } from 'react';
import styles from './Search.module.scss';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableSettingsModal from './TableSettingsModal';

export class Search extends Component {
    static displayName = Search.name;

    render() {
        return (
            <>
                <Stack spacing={ 1 } direction="row">
                    <TextField className={styles.searchField} id="search-field" label="Поиск..." variant="filled" />
                    <TableSettingsModal/>
                    <IconButton aria-label="more">
                        <MoreVertIcon />
                    </IconButton>
                </Stack>
            </>
        );
    }
}
