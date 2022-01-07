import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

// UI Components
import { DataGrid } from '@mui/x-data-grid';
import { AppBar, Toolbar, Typography } from '@mui/material';

// Images
import LexcelonLogo from './images/LexcelonLogo.png';

// Constants
const LEXCELON_GREEN = '#598d36';
const TABLE_PAGE_SIZE = 5;
const TABLE_COLUMNS = [
  { field: 'id',
    headerName: 'ID',
    width: 100,
    headerAlign: 'center'
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    headerAlign: 'center'
  },
  {
    field: 'pop',
    headerName: 'Population',
    type: 'number',
    width: 110,
    headerAlign: 'center',
  },
  {
    field: 'growth',
    headerName: 'Growth',
    width: 125,
    headerAlign: 'center',
  },
  {
    field: 'pop2018',
    headerName: '2018 Population',
    width: 160,
    headerAlign: 'center',
  },
  {
    field: 'pop2010',
    headerName: '2010 Population',
    width: 160,
    headerAlign: 'center',
  },
  {
    field: 'growthSince2010',
    headerName: 'Growth Since 2010',
    width: 160,
    headerAlign: 'center',
  },
  {
    field: 'percent',
    headerName: 'Percent',
    width: 160,
    headerAlign: 'center',
  },
  {
    field: 'density',
    headerName: 'Density',
    width: 160,
    headerAlign: 'center',
  },
];

const api = axios.create({
  baseURL: '/api'
});

export default class App extends Component {

  constructor(props) {
    super(props);

    // Initialize the class component state
    this.state = {
      states: []
    };
  }

  // ComponentDidMount is called as soon as the class component has mounted
  componentDidMount() {
    // Retrieve the list of state data from the server
    api.get('http://localhost:8000/api/states').then((response) => {
      let states = response.data;

      // Set the states state value so it can appear on the table
      this.setState({ states });
    });
  }

  render() {
    return (
      <>
        {/* App Bar */}
      <AppBar position='static'>
          {/*CODE MODIFIED HERE: changed header color to LEXCELON_GREEN and added LexcelonLogo*/ }
          <Toolbar style={{
                background: LEXCELON_GREEN
                }}>
                    <img src={LexcelonLogo} height="64" alt="Logo"/>
          </Toolbar>
        </AppBar>

        {/* Table */}
        <Typography variant='h1' style={{ fontSize: 50, textAlign: 'center', marginTop: '25px', marginBottom: '15px' }}>States</Typography>
        <div style={{ height: 400, width: '100%' }}>
          {this.state.states &&
            <DataGrid
              rows={this.state.states}
              columns={TABLE_COLUMNS}
              pageSize={TABLE_PAGE_SIZE}
              checkboxSelection
              disableSelectionOnClick
            />
          }
        </div>
      </>
    );
  }
}
